document.addEventListener('DOMContentLoaded', function(){
  const postForm = document.getElementById('new_post');
  const previewList = document.getElementById('previews');
  if (!postForm) return null;
  console.log("preview.jsが読み込まれました");

  const fileField = document.querySelector('input[type="file"][name="content[image]"]');
  fileField.addEventListener('change', function(e){
    const alreadyPreview = document.querySelector('.preview');
    if (alreadyPreview) {
      alreadyPreview.remove();
    };
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const blob = window.URL.createObjectURL(file);
    
    const previewWrapper = document.createElement('div');
    previewWrapper.setAttribute('class', 'preview');
    const previewImage = document.createElement('img');
    previewImage.setAttribute('class','preview-image');
    previewImage.setAttribute('src', blob);
    previewImage.setAttribute('width', 250);
    previewImage.setAttribute('height', 150);

    previewWrapper.appendChild(previewImage);
    previewList.appendChild(previewWrapper);

  });
});