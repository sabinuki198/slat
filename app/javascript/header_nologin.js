window.addEventListener('load', function(){
  const loginBtn = document.getElementById("login-btn");
  const signUpBtn = document.getElementById("sign-up-btn");

  

    loginBtn.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    loginBtn.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    });

    signUpBtn.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    signUpBtn.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    });

   
});
