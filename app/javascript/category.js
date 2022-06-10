window.addEventListener('load', function(){
  const categoryIdEnchant = document.querySelectorAll(".category-name");
  for (const [i, e] of categoryIdEnchant.entries()) {
    e.id = `category-id-${i}`;
  } //カテゴリーそれぞれにIDを付与（ユーザーが保有してる数によって違う）

  const contents = document.querySelectorAll(".content-title");
  const contentsBox = document.querySelectorAll(".contents-side-box");

  for (const [i, e] of contentsBox.entries()) {
    e.id = `content-id-${i}`;
  } // カテゴリー欄下のulの箱にIDをそれぞれ付与



  categoryIdEnchant.forEach(function(category){
    category.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    category.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    });
    category.addEventListener('click', function(e){
      let categoryIdGet = document.getElementById(`${e.target.id}`)
      let contentsBoxId = categoryIdGet.nextElementSibling;
      if (contentsBoxId.getAttribute("style") == "display:block;") {
        contentsBoxId.removeAttribute("style", "display:block;");
      } else {
        contentsBoxId.setAttribute("style", "display:block;");
      }

    });
  });// カテゴリーそれぞれがカーソル乗った時にオレンジ色に変化

  
  contents.forEach(function(content){
    content.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    content.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    });
  });// 作成した記事それぞれがカーソル乗った時にオレンジ色に変化

});