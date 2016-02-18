      var link = document.querySelector(".adress .feedback");
      var popup = document.querySelector(".popup-wrap");
      var close = popup.querySelector(".popup-close");

      var form = popup.querySelector("form");
      var name = popup.querySelector("[name=name]");
      var email = popup.querySelector("[name=feedback-email]");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("popup-wrap-show");
        name.focus();
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popup-wrap-show");
        popup.classList.remove("popup-error");
      });

      popup.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popup-wrap-show");
        popup.classList.remove("popup-error");
      });

      form.addEventListener("submit", function(event) {
        if (!email.value) {
          event.preventDefault();
          popup.classList.remove("popup-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("popup-error");
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("popup-wrap-show")) {
            popup.classList.remove("popup-wrap-show");
            popup.classList.remove("popup-error");
          }
        }
      });