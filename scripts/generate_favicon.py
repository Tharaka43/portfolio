import os
from PIL import Image, ImageDraw

svg_content = '''<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldGradient" x1="60" y1="60" x2="452" y2="452" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#BF953F"/>
      <stop offset="35%" stop-color="#FCF6BA"/>
      <stop offset="60%" stop-color="#B38728"/>
      <stop offset="85%" stop-color="#FBF5B7"/>
      <stop offset="100%" stop-color="#AA771C"/>
    </linearGradient>
    <linearGradient id="borderGradient" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#BF953F" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#FCF6BA" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#AA771C" stop-opacity="0.8"/>
    </linearGradient>
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#BF953F" flood-opacity="0.45"/>
    </filter>
  </defs>

  <!-- Dark Luxury Circular Badge Background -->
  <circle cx="256" cy="256" r="240" fill="#070707"/>
  <circle cx="256" cy="256" r="236" stroke="url(#borderGradient)" stroke-width="14"/>

  <!-- Centered Iconic Gold T Emblem -->
  <path d="M 100 120 L 412 120 L 372 218 L 294 218 L 294 412 L 218 412 L 218 218 L 140 218 Z" 
        fill="url(#goldGradient)" 
        filter="url(#goldGlow)"/>
</svg>'''

# Save SVG icons
with open(r"portfolio\src\app\icon.svg", "w", encoding="utf-8") as f:
    f.write(svg_content)

with open(r"portfolio\public\favicon.svg", "w", encoding="utf-8") as f:
    f.write(svg_content)

print("Saved icon.svg and public/favicon.svg")

# Generate high quality PNG and ICO using PIL
size = 512
img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Draw circle background
draw.ellipse((8, 8, size - 8, size - 8), fill=(7, 7, 7, 255), outline=(191, 149, 63, 230), width=14)

# Draw gold polygon for "T"
polygon_points = [
    (100, 120),
    (412, 120),
    (372, 218),
    (294, 218),
    (294, 412),
    (218, 412),
    (218, 218),
    (140, 218)
]
# Fill with rich gold color #d4af37
draw.polygon(polygon_points, fill=(212, 175, 55, 255))

# Subtle inner highlight on top edge
draw.line([(106, 124), (406, 124)], fill=(252, 246, 186, 255), width=4)

# Save apple-icon.png (180x180)
apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
apple_icon.save(r"portfolio\src\app\apple-icon.png")
apple_icon.save(r"portfolio\public\apple-touch-icon.png")

# Save multi-size ICO (16, 32, 48, 64, 128, 256)
ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
img.save(r"portfolio\src\app\favicon.ico", format="ICO", sizes=ico_sizes)
img.save(r"portfolio\public\favicon.ico", format="ICO", sizes=ico_sizes)

print("Saved apple-icon.png and favicon.ico in src/app and public successfully!")
