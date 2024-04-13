//? NodeJS 2020 yılından itibaren ES-Modül desteği vermeye başlamıştır.
//? CommonJS'nin ve ES-Modülün birbirlerine göre  avantaj ve dezavantajları vardır.
//? Ancak Backend uygulamaları için geliştirilen birçok eski modül hala Common JS modül yapısını kullandığı için yaygın olan kullanım Common JS'dir.
//? Front-end uygulamaları için ES-Modül yapısı kullanılmaktadır.

import { topla } from "./hesap.js";
import * as emoji from "node-emoji";

console.log(topla(3, 5));

console.log(emoji.random());
