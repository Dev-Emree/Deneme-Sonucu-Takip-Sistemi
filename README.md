# Deneme Sonucu Takip Sistemi

Yükseköğretim Kurumları Sınavına(YKS) hazırlandığım süreçte bana yardımcı olması için geliştirilmiş bir araç

## Sitenin Amacı

Yükseköğretim Kurumları Sınavına(YKS) hazırlanan öğrencilerin girmiş oldukları sınavları daha kolay inceleyip daha rahat analiz yapmalarına yardımcı olmak.

# Kodun Özeti

## Gereklilikler

- [body-parser](https://www.npmjs.com/package/body-parser) - Url işlemlerini kolaylaştırmak için kullanıldı.
- [connect-mongo](https://www.npmjs.com/package/connect-mongo) - Kullanıcı bilgileri *session*'a kaydedildiği için mongodb ile iletişimi kolaylaştırmak için kullanıldı.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Site dilini çerezlere kaydederek kullanıcının işini kolaylaştırmak için kullanıldı.
- [crypto](https://www.npmjs.com/package/crypto) - Kullanıcı verilerini veri merkezine kaydederken şifrelemek için kullanıldı.
- [dotenv](https://www.npmjs.com/package/dotenv) - Değişebilir parametreleri kolayca değiştirebilmek için kullanıldı.
- [ejs](https://www.npmjs.com/package/ejs) - Sunucu tarafında sayfa işlemek için kullanıldı.
- [express](https://www.npmjs.com/package/express) - HTTP sunucusu kurmak için kullanıldı.
- [express-session](https://www.npmjs.com/package/express) - Kullanıcı girişi *session* ile kaydedildiğinden kodları basitleştirmek ve kolaylaştırmak için kullanıldı.
- [mongoose](https://www.npmjs.com/package/mongoose) - Kullanıcı sayılarını takip etmek için kullanılan veri merkezinin işlemlerini kolaylaştırmak için kullanıldı.
- [mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator) - Kullanıcıda benzersiz olması gerken kullanıcı adını kontrol etmeyi kolaylaştırdığı için kullanıldı.
- [passport](https://www.npmjs.com/package/passport) - Kullanıcı girişini daha dinamik tuttuğu ve kolaylaştırdığı için kullanıldı.
- [passport-local](https://www.npmjs.com/package/passport-local) - **passport** paketinde lokal giriş işlemlerini sağladığı için kullanıldı.

## Uygulama Mimarisi

- `server.js` - Uygulamanın başlangıç noktası. Express ile sunucu kurulduktan sonra mongodb ile bağlantı sağlanır ve yönlendiriciler işlenir.
- `controllers/` - Fonksiyonları geliştirme sürecini daha sağlıklı hale getirmek için MVC yapısı kullanıldı.
- `models/` - Veri merkezi işlemlerinin kodlarını içerir.
- `routes/` - Yönlendiricileri daha kolay yönetebilmek ve geliştirme sürecini daha sağlıklı hale getirmek için MVC yapısı kullanıldı.

> # Ön İzleme
Ön uç kodlarını <a href="deneme-sonucu-takip-sistemi.mevcollegemun.org">buradan</a> görebilirsiniz.



> # İngilizce README dosyası
<a href="https://github.com/Dev-Emree/Deneme-Sonucu-Takip-Sistemi/blob/main/README.en.md">Buradan</a> ulaşabilirsiniz.