// ユーザーが保有する記事へのID付与はcategory.jsにて付与済

function show (){
  const contents = document.querySelectorAll(".content-title"); //ユーザーが持つ記事（のタイトル）を全て取得

  for (const [i, e] of contents.entries()) {
    e.id = `content-id-${i}`;
  } // カテゴリー配下の記事それぞれにIDを付与

  contents.forEach(function(content){
    content.addEventListener('click', function(e){
      e.preventDefault(); //デフォルトでの画面遷移を中止
      const contentIdGet = document.getElementById(`${e.target.id}`);
      const href = contentIdGet.getAttribute('href');
      console.log(href);
      console.log(location.href);
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `${href}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        console.log(XHR.response);
      };
    });
  });
 };

 window.addEventListener('load', show);