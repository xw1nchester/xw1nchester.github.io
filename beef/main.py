import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

BASE_URL = "https://beef-casino6.com"
IMAGES_DIR = "winners"

html_file = "winners.html"
output_html_file = "output.html"

os.makedirs(IMAGES_DIR, exist_ok=True)

with open(html_file, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

img_tags = soup.find_all("img")

counter = 1

for img in img_tags:
    src = img.get("src")
    if not src:
        continue

    # формируем полный URL
    full_url = urljoin(BASE_URL, src)

    # имя файла: 1.webp, 2.webp и т.д.
    ext = os.path.splitext(src)[1] or ".jpg"
    filename = f"{counter}{ext}"
    filepath = os.path.join(IMAGES_DIR, filename)

    print(f"Скачиваю: {full_url}")

    try:
        r = requests.get(full_url, timeout=10)
        r.raise_for_status()

        with open(filepath, "wb") as f:
            f.write(r.content)

        # меняем src в HTML
        img["src"] = f"{IMAGES_DIR}/{filename}"
        counter += 1

    except Exception as e:
        print(f"Ошибка при скачивании {full_url}: {e}")

# сохраняем новый HTML
with open(output_html_file, "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Готово!")
