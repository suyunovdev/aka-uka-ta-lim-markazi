import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const statusMap: Record<string, string> = {
  status_called: "📞 Qo'ng'iroq qilindi",
  status_enrolled: "✅ Yozildi",
  status_later: "🔄 Keyinroq aloqa",
  status_rejected: "❌ Rad etdi",
};

async function tgApi(method: string, body: object) {
  return fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Handle callback button press
    const callback = body.callback_query;
    if (callback) {
      const { data, from, message } = callback;
      const statusText = statusMap[data];

      if (!statusText || !message) {
        return NextResponse.json({ ok: true });
      }

      const operatorName = from.first_name + (from.last_name ? ` ${from.last_name}` : "");
      const now = new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" });

      // Update original message with new status, keep buttons for re-update
      const originalText = message.text || "";
      const updatedText = originalText
        .replace(
          /📌 \*?Holat:\*? .+(\n👷.+)?(\n⏱.+)?/,
          `📌 *Holat:* ${statusText}\n👷 *Mas'ul:* ${operatorName}\n⏱ *Yangilangan:* ${now}`
        );

      await tgApi("editMessageText", {
        chat_id: message.chat.id,
        message_id: message.message_id,
        text: updatedText + "\n\n_Izoh yozish uchun shu xabarga reply qiling_",
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [
              { text: "📞 Qo'ng'iroq qilindi", callback_data: "status_called" },
              { text: "✅ Yozildi", callback_data: "status_enrolled" },
            ],
            [
              { text: "🔄 Keyinroq", callback_data: "status_later" },
              { text: "❌ Rad etdi", callback_data: "status_rejected" },
            ],
          ],
        },
      });

      // Answer callback
      await tgApi("answerCallbackQuery", {
        callback_query_id: callback.id,
        text: `${statusText} — izoh uchun reply qiling`,
      });

      return NextResponse.json({ ok: true });
    }

    // Handle reply to bot message (comment on lead)
    const msg = body.message;
    if (msg?.reply_to_message?.from?.is_bot && msg.text) {
      const repliedText = msg.reply_to_message.text || "";

      // Check if replied to a lead message
      if (repliedText.includes("Yangi lid saytdan") || repliedText.includes("Holat:")) {
        const commentAuthor = msg.from.first_name + (msg.from.last_name ? ` ${msg.from.last_name}` : "");
        const now = new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" });

        await tgApi("sendMessage", {
          chat_id: msg.chat.id,
          text: `💬 *Izoh* — ${commentAuthor}:\n${msg.text}\n\n_${now}_`,
          parse_mode: "Markdown",
          reply_to_message_id: msg.reply_to_message.message_id,
        });
      }

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
