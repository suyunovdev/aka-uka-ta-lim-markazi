import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const statusMap: Record<string, string> = {
  status_called: "📞 Qo'ng'iroq qilindi",
  status_enrolled: "✅ Yozildi",
  status_later: "🔄 Keyinroq aloqa",
  status_rejected: "❌ Rad etdi",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const callback = body.callback_query;

    if (!callback) {
      return NextResponse.json({ ok: true });
    }

    const { data, from, message } = callback;
    const statusText = statusMap[data];

    if (!statusText || !message) {
      return NextResponse.json({ ok: true });
    }

    const operatorName = from.first_name + (from.last_name ? ` ${from.last_name}` : "");

    // Update the original message: replace status line
    const originalText = message.text || "";
    const updatedText = originalText.replace(
      /📌 \*?Holat:\*? .+/,
      `📌 *Holat:* ${statusText}\n👷 *Mas'ul:* ${operatorName}\n⏱ *Yangilangan:* ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`
    );

    // Edit the message with updated status and remove buttons
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: message.chat.id,
        message_id: message.message_id,
        text: updatedText,
        parse_mode: "Markdown",
      }),
    });

    // Answer callback to remove loading state
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        callback_query_id: callback.id,
        text: statusText,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
