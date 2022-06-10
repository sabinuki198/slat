window.addEventListener('load', function(){
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const signUpBtn = document.getElementById("sign-up-btn");
  const contentCreateBtn = document.getElementById("content-create-btn");
    loginBtn.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    loginBtn.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    });

    
    logoutBtn.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    logoutBtn.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    });

    
    signUpBtn.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    signUpBtn.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    });

    
    contentCreateBtn.addEventListener('mouseover', function(){
      this.setAttribute("style", "color: orange;");
    });
    contentCreateBtn.addEventListener('mouseout', function(){
      this.removeAttribute("style", "color: orange;");
    });
});
