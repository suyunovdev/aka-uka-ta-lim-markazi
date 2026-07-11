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

      // Update original message with new status
      const originalText = message.text || "";
      const updatedText = originalText.replace(
        /📌 \*?Holat:\*? .+/,
        `📌 *Holat:* ${statusText}\n👷 *Mas'ul:* ${operatorName}\n⏱ *Yangilangan:* ${now}`
      );

      await tgApi("editMessageText", {
        chat_id: message.chat.id,
        message_id: message.message_id,
        text: updatedText,
        parse_mode: "Markdown",
      });

      // Ask for comment with force reply
      await tgApi("sendMessage", {
        chat_id: message.chat.id,
        text: `💬 *${operatorName}*, izoh yozing:\n_(${statusText})_\n\n🆔 Lid: #lid\\_${message.message_id}`,
        parse_mode: "Markdown",
        reply_to_message_id: message.message_id,
        reply_markup: {
          force_reply: true,
          selective: true,
          input_field_placeholder: "Izoh yozing...",
        },
      });

      // Answer callback
      await tgApi("answerCallbackQuery", {
        callback_query_id: callback.id,
        text: `${statusText} — izoh yozing!`,
      });

      return NextResponse.json({ ok: true });
    }

    // Handle reply message (comment)
    const msg = body.message;
    if (msg?.reply_to_message?.from?.is_bot && msg.reply_to_message.text?.includes("#lid_")) {
      const botReplyText = msg.reply_to_message.text || "";
      const lidIdMatch = botReplyText.match(/#lid_(\d+)/);

      if (lidIdMatch) {
        const lidMessageId = parseInt(lidIdMatch[1]);
        const commentAuthor = msg.from.first_name + (msg.from.last_name ? ` ${msg.from.last_name}` : "");
        const comment = msg.text || "";
        const now = new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" });

        // Send comment as reply to original lid message
        await tgApi("sendMessage", {
          chat_id: msg.chat.id,
          text: `💬 *Izoh* — ${commentAuthor}:\n${comment}\n\n_${now}_`,
          parse_mode: "Markdown",
          reply_to_message_id: lidMessageId,
        });

        // Delete the bot's "izoh yozing" prompt
        await tgApi("deleteMessage", {
          chat_id: msg.chat.id,
          message_id: msg.reply_to_message.message_id,
        });
      }

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
