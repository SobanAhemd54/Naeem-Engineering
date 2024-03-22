import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, push , set , onValue } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyALirRG-bsw5MjUpc4ogrA66ImTxZr_F68",
  authDomain: "naeem-engineering.firebaseapp.com",
  databaseURL: "https://naeem-engineering-default-rtdb.firebaseio.com",
  projectId: "naeem-engineering",
  storageBucket: "naeem-engineering.appspot.com",
  messagingSenderId: "59660303097",
  appId: "1:59660303097:web:d92f1c2d1614a123af4028"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(app);
console.log(database);

window.submitbtn = function () {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Assuming obj is your data object
  let obj = {
    username: username,
    email: email,
    message: message
  };

  // Push data to the 'Contact' node in your database
  let refren = push(ref(database, 'Contact'));
  let refrenkey = refren.key;
  document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
  set(ref(database, `Contact/${refrenkey}`) , obj)
  .then(function () {
    alert('Submit successful')
    console.log('Submit successful');
    
  })
  .catch(function (err) {
    alert('Submit failed' + err.message)
    console.log('Submit failed' + err.message)
  })
  
};
window.showdata = function () {
    let refence = ref(database, 'Contact');
    let show = document.getElementById('show');
  
    onValue(refence, (snapshot) => {
      const data = snapshot.val();
      show.innerHTML = ""; // Clear the existing content again in case data changed
      
      for (let key in data) { // Iterate over each key in the data object
        if (data.hasOwnProperty(key)) { // Check if the key is a direct property of data
          let item = data[key]; // Get the data item object
          let p = document.createElement('li');
          let ptext = document.createTextNode(`Username: ${item.username}, Email: ${item.email}, Message: ${item.message}`);
          p.appendChild(ptext);
          show.appendChild(p);
        }
      }
    });
  };
  
  window.showdata(); // Call the showdata() function to fetch and display specific data
  

  
  
