import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const subjectLabels: Record<string, string> = {
  math: "Matematika",
  physics: "Fizika",
  chemistry: "Kimyo",
  biology: "Biologiya",
  uzbek: "Ona tili va adabiyot",
  english: "Ingliz tili",
  russian: "Rus tili",
  turkish: "Turk tili",
  it: "IT (Axborot texnologiyalari)",
  sat: "SAT",
  other: "Boshqa fan",
};

export async function POST(req: NextRequest) {
  try {
    const { name, phone, subject, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "Ism va telefon kerak" }, { status: 400 });
    }

    const subjectText = subjectLabels[subject] || subject || "";

    const text = [
      "📋 *Yangi lid saytdan!*",
      "",
      `👤 *Ism:* ${name}`,
      `📞 *Telefon:* ${phone}`,
      subjectText ? `📚 *Fan:* ${subjectText}` : "",
      message ? `💬 *Xabar:* ${message}` : "",
      "",
      `🕐 *Vaqt:* ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`,
      "",
      "📌 *Holat:* 🆕 Yangi",
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
