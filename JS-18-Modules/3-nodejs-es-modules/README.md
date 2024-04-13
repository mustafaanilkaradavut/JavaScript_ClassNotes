##NEDEN FRONTEND GELİŞTİRMEDE NODEJS KULLANILIR?

- NodeJS, JS ile Backend Uygulamalarının geliştirebilmesi için yazıldı.
- Bu sebeple, Chome browser'ların JS motoru, PC ve Server'larda çalışabilecek şekilde implement edildi.
- Ancak NodeJS de çalışacak uygulamaların UI tarafıyla ilgisi olmayacağı için DOM, window v.b. kısımlar implement edilmedi.
- Browser'lar ES modüllerini desteklemeden önce NodeJS modül yapısını (CommonJS) destekliyordu.
- Dolayısıyla Fronted geliştiricileri, NodeJS'nin modül yapısından faydalanmak istediler.
- Ayrıca, NodeJS üzerinde bulunan ve npm olarak adlandırılan paket yönetim sistemi de harici kütüphanelerin yönetimini kolaylaştırdığı için NodeJS üzerinde Frontend geliştirme fikri ağır bastı.
- Ancak, browser'larda bulunan bir çok API NodeJS tarafından desteklenmediği için uygulama NodeJS üzerinde geliştirilse bile yine Browser'larda çalıştırılmalıydı.
- İşte bu ikisi (NodeJS ve Browser) arasındaki uyumu sağlamak için yani NodeJS üzerinde geliştirilen uygulamaların paketlenerek bir bundle (Bir çok harici kod ve modülün birleştirilmesi işlemi) oluşturulup Browser'lara sunulabilmesi için Webpack, Rollup, Parcel gibi bundler'lar kullanıldı.
- Günümüzde birçok FE kütüphanesi (React,Vue,Angular v.b.) yukrıda bahsedilen şekilde frontend geliştirilmesine imkan sağlamış oluyor. Son yıllarda vite gibi tool'lar yardımıyla FE geliştirmedeki tüm bu süreçler daha kolay bir şekilde yönetilebilemektedir.
- Sonuç olarak, NodeJS her ne kadar Beckend geliştirme için yazılmış olsa da bir çok avantajından dolayı FE geliştirmede de yaygın bir şekilde kullanılmaktadır.
