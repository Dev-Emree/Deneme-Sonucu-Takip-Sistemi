# Deneme Sonucu Takip Sistemi

Yükseköğretim Kurumları Sınavına(YKS) hazırlandığım süreçte bana yardımcı olması için geliştirilmiş bir araç

## Sitenin Amacı

Yükseköğretim Kurumları Sınavına(YKS) hazırlanan öğrencilerin girmiş oldukları sınavları daha kolay inceleyip daha rahat analiz yapmalarına yardımcı olmak.

# Kodun Özeti

## Gereklilikler

- [body-parser](https://www.npmjs.com/package/body-parser) - Url işlemlerini kolaylaştırmak için kullanıldı.
- [connect-mongo](https://www.npmjs.com/package/connect-mongo) - Kullanıcı bilgileri *session*'a kaydedildiği için MongoDB ile iletişimi kolaylaştırmak için kullanıldı.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Kullanıcının işini kolaylaştırmak için kullanıldı.
- [crypto](https://www.npmjs.com/package/crypto) - Kullanıcı verilerini veri merkezine kaydederken şifrelemek için kullanıldı.
- [dotenv](https://www.npmjs.com/package/dotenv) - Değişebilir parametreleri kolayca değiştirebilmek için kullanıldı.
- [ejs](https://www.npmjs.com/package/ejs) - Sunucu tarafında sayfa işlemek için kullanıldı.
- [express](https://www.npmjs.com/package/express) - HTTP sunucusu kurmak için kullanıldı.
- [express-session](https://www.npmjs.com/package/express) - Kullanıcı girişi *session* ile kaydedildiğinden kodları basitleştirmek ve kolaylaştırmak için kullanıldı.
- [mongoose](https://www.npmjs.com/package/mongoose) - Kullanıcı verilerini yönetmek için kullanıldı.
- [mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator) - Kullanıcıda benzersiz olması gerken kullanıcı adını kontrol etmeyi kolaylaştırdığı için kullanıldı.
- [passport](https://www.npmjs.com/package/passport) - Kullanıcı girişini daha dinamik tuttuğu ve kolaylaştırdığı için kullanıldı.
- [passport-local](https://www.npmjs.com/package/passport-local) - **passport** paketinde lokal giriş işlemlerini sağladığı için kullanıldı.

## Uygulama Mimarisi

- `server.js` - Uygulamanın başlangıç noktası. Express ile sunucu kurulduktan sonra MongoDB ile bağlantı sağlanır ve yönlendiriciler işlenir.
- `controllers/` - Fonksiyonları geliştirme sürecini daha sağlıklı hale getirmek için MVC yapısı kullanıldı.
- `models/` - Veri merkezi işlemlerinin kodlarını içerir.
- `routes/` - Yönlendiricileri daha kolay yönetebilmek ve geliştirme sürecini daha sağlıklı hale getirmek için MVC yapısı kullanıldı.

> # Ön İzleme
Ön uç kodlarını <a href="https://deneme-sonucu-takip-sistemi.mevcollegemun.org">buradan</a> görebilirsiniz.

Sistemi test etmek için kullanıcı adı:`Test` şifre:`test` olan hesap açılmıştır kayıt olabilir ya da test hesabını deneyebilirsiniz.

<a href="https://deneme-sonucu-takip-sistemi.mevcollegemun.org/detay/tyt/64a1a64bea8f39449c861c3d">Buradan</a> örnek sınav sonucu paylaşım linkine bakabilirsiniz.

# Kimlik Doğrulama
Kullanıcıların kimlik doğrulamaları için [passport.js](https://www.passportjs.org/) kullanılıyor. Paket çok geniş olmasına rağmen kullanıcı kitle gereği sadece session üzerinden giriş yapılabiliyor. `passport-local` paketi ile giriş bilgileri session olarak kaydediliyor.

> # İngilizce README dosyası
<a href="https://github.com/Dev-Emree/Deneme-Sonucu-Takip-Sistemi/blob/main/README.en.md">Buradan</a> ulaşabilirsiniz.
