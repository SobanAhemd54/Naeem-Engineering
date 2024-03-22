function toggleFAQ (element) {
    var answer = element.nextElementSibling;
    var icon = element.querySelector('i');
    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    } else {
      answer.style.display = "block";
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  }
 
  function inp() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let btn = document.getElementById("btn1");
  
    if (username.trim() === "" && email.trim() === "" && message.trim() === "") {
      btn.disabled = true; // Disable the button if all input fields are empty
    } else {
      btn.disabled = false; // Enable the button if any input field has a value
    }
  }
  
  inp(); // Call the function initially to check for empty inputs
  
  

