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

      const originalText = message.text || "";

      // Remove old status/mas'ul/yangilangan lines, keep everything else
      let cleanText = originalText
        .replace(/\n📌 .*/, "")
        .replace(/\n👷 .*/, "")
        .replace(/\n⏱ .*/, "")
        .replace(/\n_Izoh.*reply.*_/, "")
        .trimEnd();

      // Preserve existing comments
      const commentMatch = originalText.match(/\n\n💬 Izohlar:[\s\S]*/);
      const existingComments = commentMatch ? commentMatch[0] : "";

      const updatedText = cleanText.replace(existingComments, "") +
        `\n\n📌 *Holat:* ${statusText}` +
        `\n👷 *Mas'ul:* ${operatorName}` +
        `\n⏱ *Yangilangan:* ${now}` +
        existingComments +
        `\n\n_Izoh → shu xabarga reply qiling_`;

      await tgApi("editMessageText", {
        chat_id: message.chat.id,
        message_id: message.message_id,
        text: updatedText,
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

      await tgApi("answerCallbackQuery", {
        callback_query_id: callback.id,
        text: statusText,
      });

      return NextResponse.json({ ok: true });
    }

    // Handle reply to bot message → add comment to original lead message
    const msg = body.message;
    if (msg?.reply_to_message?.from?.is_bot && msg.text) {
      const repliedText = msg.reply_to_message.text || "";

      if (repliedText.includes("Yangi lid") || repliedText.includes("Holat:")) {
        const author = msg.from.first_name + (msg.from.last_name ? ` ${msg.from.last_name}` : "");
        const now = new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" });
        const newComment = `\n• ${author}: ${msg.text} _(${now})_`;

        let updatedText: string;

        if (repliedText.includes("💬 Izohlar:")) {
          // Append to existing comments section (before the hint line)
          updatedText = repliedText
            .replace(/\n\n_Izoh.*reply.*_/, "")
            .trimEnd() + newComment + `\n\n_Izoh → shu xabarga reply qiling_`;
        } else {
          // Add new comments section (before the hint line)
          updatedText = repliedText
            .replace(/\n\n_Izoh.*reply.*_/, "")
            .trimEnd() + `\n\n💬 Izohlar:${newComment}` + `\n\n_Izoh → shu xabarga reply qiling_`;
        }

        await tgApi("editMessageText", {
          chat_id: msg.chat.id,
          message_id: msg.reply_to_message.message_id,
          text: updatedText,
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

        // Delete user's reply to keep chat clean
        await tgApi("deleteMessage", {
          chat_id: msg.chat.id,
          message_id: msg.message_id,
        });
      }

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
