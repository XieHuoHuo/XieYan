# XieYan - Academic Personal Page

A professional academic personal page with bilingual support (English and Chinese).

## Features

- 📱 Fully responsive design (mobile and desktop)
- 🌐 Bilingual support with easy language switching
- 🎨 Modern, clean, and professional design
- 📑 Comprehensive sections for academic profiles:
  - About Me
  - Education
  - Research Interests
  - Publications
  - Contact Information

## Quick Start

Simply open `index.html` in your web browser to view the page.

### Local Development

You can serve the page locally using Python:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

Edit `index.html` to update your personal information:
- Replace placeholder text in `data-en` attributes with your English content
- Replace placeholder text in `data-zh` attributes with your Chinese content
- Update profile photo by replacing the placeholder avatar
- Add your actual links for publications, social media, etc.

## Language Switching

- Click the "English" or "中文" button in the top-right corner to switch languages
- Language preference is saved in localStorage
- Automatically detects browser language on first visit

## Browser Support

Compatible with all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera
