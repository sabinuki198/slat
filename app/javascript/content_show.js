// ユーザーが保有する記事へのID付与はcategory.jsにて付与済

function show (){
  const contents = document.querySelectorAll(".content-title"); //ユーザーが持つ記事（のタイトル）を全て取得

  for (const [i, e] of contents.entries()) {
    e.id = `content-id-${i}`;
  } // カテゴリー配下の記事それぞれにIDを付与
  
 };

 window.addEventListener('load', show);