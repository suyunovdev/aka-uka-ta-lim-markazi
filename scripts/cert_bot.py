"""
Aka-Uka Ta'lim Markazi — Sertifikat Bot (Oddiy)

Faqat rasmlarni qabul qilib saqlaydi.
Ma'lumotlarni keyin tahlil qiladi.
"""

import os
from pathlib import Path
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

TOKEN = os.environ.get("CERT_BOT_TOKEN", "")
PROJECT_DIR = Path(__file__).parent.parent
SAVE_DIR = PROJECT_DIR / "scripts" / "new_certs"
SAVE_DIR.mkdir(parents=True, exist_ok=True)

saved_count = 0


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "Assalomu alaykum! Aka-Uka Sertifikat Bot\n\n"
        "Sertifikat rasmlarini yuboring — men saqlab olaman.\n"
        "PDF, rasm, fayl — barchasi qabul qilinadi.\n\n"
        "/status — Nechta saqlandi\n"
        "/done — Tayyor, saqlashni tugatish"
    )


async def handle_photo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    global saved_count
    photo = update.message.photo[-1]
    file = await photo.get_file()
    saved_count += 1
    path = SAVE_DIR / f"cert_{saved_count:03d}.jpg"
    await file.download_to_drive(str(path))
    await update.message.reply_text(f"Saqlandi! ({saved_count} ta)")


async def handle_document(update: Update, context: ContextTypes.DEFAULT_TYPE):
    global saved_count
    doc = update.message.document
    file = await doc.get_file()
    saved_count += 1
    ext = Path(doc.file_name).suffix or ".pdf"
    path = SAVE_DIR / f"cert_{saved_count:03d}{ext}"
    await file.download_to_drive(str(path))
    await update.message.reply_text(f"Saqlandi! ({saved_count} ta)")


async def status(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f"Jami saqlangan: {saved_count} ta sertifikat")


async def done(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        f"Tayyor! {saved_count} ta sertifikat saqlandi.\n"
        f"Papka: scripts/new_certs/\n\n"
        f"Endi ma'lumotlarni tahlil qilaman."
    )


def main():
    if not TOKEN:
        print("XATO: CERT_BOT_TOKEN o'rnatilmagan!")
        print("export CERT_BOT_TOKEN='token' && python3 scripts/cert_bot.py")
        return

    print(f"Bot ishga tushdi. Rasmlar: {SAVE_DIR}")
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("status", status))
    app.add_handler(CommandHandler("done", done))
    app.add_handler(MessageHandler(filters.PHOTO, handle_photo))
    app.add_handler(MessageHandler(filters.Document.ALL, handle_document))
    app.run_polling()


if __name__ == "__main__":
    main()
