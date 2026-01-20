# Doğum Günü Sürpriz Websitesi 💕

Sevgilin için hazırlanmış özel bir doğum günü sürpriz websitesi!

## Özellikler

- ✨ Animasyonlu partiküller ve kalpler
- ⏰ Birlikte geçirilen zamanın canlı sayacı
- 📖 İlişki zaman çizelgesi
- 📸 Fotoğraf galerisi (placeholder'lar dahil - kendi fotoğraflarınızı ekleyebilirsiniz)
- 💌 Özel aşk mektubu bölümü
- 📱 Tam responsive tasarım
- 🎨 Modern ve romantik animasyonlar

## GitHub Pages'e Deploy Etme

1. Bu klasörü GitHub'a yükleyin:
```bash
git init
git add .
git commit -m "İlk commit - Doğum günü sürprizi"
git branch -M main
git remote add origin [REPO_URL]
git push -u origin main
```

2. GitHub repository ayarlarında:
   - Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "main" ve "/ (root)"
   - Save

3. Birkaç dakika içinde siteniz şu adreste yayında olacak:
   `https://[username].github.io/[repo-name]/`

## Fotoğraf Ekleme

Fotoğrafları eklemek için `index.html` dosyasında image placeholder'ları düzenleyin:

```html
<!-- Şu kodu: -->
<div class="image-placeholder">
    <span>Fotoğraf 1</span>
</div>

<!-- Bununla değiştirin: -->
<img src="images/foto1.jpg" alt="Anılarımız">
```

Fotoğrafları bir `images` klasörüne koyun ve src yollarını güncelleyin.

## Kişiselleştirme

- **Mesajları değiştirmek için:** `index.html` dosyasındaki metinleri düzenleyin
- **Renkleri değiştirmek için:** `style.css` dosyasındaki `:root` değişkenlerini düzenleyin
- **Zaman çizelgesine eklemeler için:** `index.html`'deki timeline bölümüne yeni item'lar ekleyin

## Kullanılan Teknolojiler

- HTML5
- CSS3 (Animations, Grid, Flexbox)
- JavaScript (Vanilla)
- AOS (Animate On Scroll) Library
- Particles.js
- Google Fonts (Pacifico, Poppins)

## Tarayıcı Desteği

Modern tüm tarayıcılarda çalışır:
- Chrome
- Firefox
- Safari
- Edge

---

Made with ❤️ for a special someone
