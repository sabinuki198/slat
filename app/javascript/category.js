 function category(){
  const categoryIdEnchant = document.querySelectorAll(".category-name"); //ユーザーが持つカテゴリーを一気に取得
  for (const [i, e] of categoryIdEnchant.entries()) {
    e.id = `category-id-${i}`;
  } //繰り返し処理によりカテゴリーそれぞれにIDを付与（ユーザーが保有してる数によって違う）

  const contents = document.querySelectorAll(".content-title"); //ユーザーが持つ記事（のタイトル）を全て取得
  const contentsBox = document.querySelectorAll(".contents-side-box"); //カテゴリー配下のul要素を全て取得

  for (const [i, e] of contentsBox.entries()) {
    e.id = `contents-ul-${i}`;
  } // カテゴリー欄下のul要素にIDをそれぞれ付与

  categoryIdEnchant.forEach(function(category){
    category.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    category.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    }); // カテゴリーそれぞれがカーソル乗った時にオレンジ色に変化
    category.addEventListener('click', function(e){
      let categoryIdGet = document.getElementById(`${e.target.id}`)
      let contentsBoxId = categoryIdGet.nextElementSibling;
      if (contentsBoxId.getAttribute("style") == "display:block;") {
        contentsBoxId.removeAttribute("style", "display:block;");
      } else {
        contentsBoxId.setAttribute("style", "display:block;");
      } //カテゴリーをクリックするたびに配下の記事が表示/非表示になる
    });
  })

  
  contents.forEach(function(content){
    content.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    content.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    });
  });// 作成した記事それぞれがカーソル乗った時にオレンジ色に変化
};


window.addEventListener('load', category);
