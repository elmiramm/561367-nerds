      var link = document.querySelector(".btn-write-us");
      var popup = document.querySelector(".modal-contacts");
      var close = document.querySelector(".modal-close");
      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=name]");
      var email = popup.querySelector("[name=email]");
      var storage = localStorage.getItem("login");
      
      link.addEventListener("click", function(evt){
        evt.preventDefault();
        popup.classList.add("modal-contacts-show");
        login.focus();
        if(storage) {
          login.value = storage;
          email.focus();
        } else {
          login.focus();
          }
      });
      
      close.addEventListener("click", function(evt){
        evt.preventDefault();
        popup.classList.remove("modal-contacts-show");
        popup.classList.remove("modal-error");
      });
      
      form.addEventListener("submit", function (evt) {
        if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        } else {
          localStorage.setItem("login", login.value);
        }
      });
      
      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains("modal-contacts-show")) {popup.classList.remove("modal-contacts-show"); popup.classList.remove("modal-error");
          }
        }
      });
      