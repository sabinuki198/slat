window.addEventListener('load', function(){
  const logoutBtn = document.getElementById("logout-btn");
  const contentCreateBtn = document.getElementById("content-create-btn");

  logoutBtn.addEventListener('mouseover', function(){
    this.setAttribute("style", "color: orange;");
  });
  logoutBtn.addEventListener('mouseout', function(){
    this.removeAttribute("style", "color: orange;");
  });

  contentCreateBtn.addEventListener('mouseover', function(){
    this.setAttribute("style", "color: orange;");
  });
  contentCreateBtn.addEventListener('mouseout', function(){
    this.removeAttribute("style", "color: orange;");
  });
});