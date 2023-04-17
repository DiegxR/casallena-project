import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const notify = (message, color1, color2) =>{
    Toastify({
        text: `${message}`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: `linear-gradient(to right, ${color1}, ${color2})`,
        },
        onClick: function(){} // Callback after click
      }).showToast();
} 