/* -------------------------------------------------------------------------- */
//..                               ASYNC-AWAIT                                */
/* -------------------------------------------------------------------------- */

//? Async-Await ECMAScript 2017 ile Javascript diline eklenmiştir.
//? Aslında Promise yapısının syntax olarak basileştirilmiş halidir.
//? Bu bağlamda sentetik şeker benzetmesi yapılabilir.

//* Bir fonksiyonu asenkron hale getirmek için fonksiyon keyword'ünün önüne async keyword'ü eklenir.
//* Bir async fonksiyon içerisinde await keyword'ü ile yaplılan isteğin cevabının beklenmesi sağlanır.
//* Aslında diziliş olarak senkron mantığa benzeyen kod yazarak Asenkron kod yazmayı mümkün kılar.
//* Await, promise - temelli herhangi bir fonksiyonun önüne getirilerek getirildiği satırdaki kodun dururulmasını sağlar.
//* Yapılan istek yerine getirilip sonuç değerlerinin döndürülmesi ile kodun çalışması devam eder.

const getNews = async () => {
  //?   https://newsapi.org/v2/top-headlines?country=tr&apiKey=f33b836eabbd49888b8ef386ed77c55f&category=technology

  const BASE_URL = `https://newsapi.org/v2/`;
  const API_KEY = `f33b836eabbd49888b8ef386ed77c55f`;
  const queryString = `top-headlines?country=us&category=technology`;
  const URL = `${BASE_URL}${queryString}&apiKey=${API_KEY}`; //__ Bunu yapmak zorunlu değildir. Parça parça yazmamız bize avantaj getirir.
  // console.log(URL);   //__ Doğru bir link geliyor mu onu test ederiz.

  try {
    const res = await fetch(URL);

    //__ Error handing'ini kendimiz oluşturmamız lazım. Catch'in yakalaması için error buluruz.
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    const data = await res.json();
    dipslayNews(data.articles);
  } catch (error) {
    const newsArticle = document.getElementById("news");
    newsArticle.innerHTML = `
          <img src="./img/404.png" alt="" />
      `;
  }
};

const dipslayNews = (news) => {
  const newsArticle = document.getElementById("news");
  const defaultImage = "./img/404.png";

  news.forEach(({ urlToImage, url, content, title }) => {
    newsArticle.innerHTML += `
          <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src="${
                urlToImage || defaultImage //* burada verinin eğer bir resmi yok ise atamış olduğumuz default resim kullanılır.
              }" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${content || "No Content"}</p>
                  <a href="${url}" target="_blank" class="btn btn-primary">Detail</a> //? Target blank diğer bir sekme'de açmak için eklenir...
              </div>
          </div>
      `;
  });
};

getNews();
