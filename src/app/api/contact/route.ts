import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const { name, phone, subject, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "Ism va telefon kerak" }, { status: 400 });
    }

    const text = [
      "📋 *Yangi lid saytdan!*",
      "",
      `👤 *Ism:* ${name}`,
      `📞 *Telefon:* ${phone}`,
      subject ? `📚 *Fan:* ${subject}` : "",
      message ? `💬 *Xabar:* ${message}` : "",
      "",
      `🕐 *Vaqt:* ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!res.ok) {
      console.error("Telegram error:", await res.text());
      return NextResponse.json({ error: "Xabar yuborilmadi" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
  }
}
