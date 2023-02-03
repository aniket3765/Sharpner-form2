const form = document.querySelector('#btn');
const name= document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector(".msg");
const userList = document.querySelector('#user')

form.addEventListener("click", onsubmit);
function onsubmit(e){
    e.preventDefault();

   if(name.value==='' || email.value===''){
      msg.classList.add("alert");
   msg.innerHTML = "Please enter your Name and email";
    setTimeout(()=> msg.remove(),3000);
   } 
   else{
      let obj = {
        name : name.value,
        email : email.value
    };
    let newObj = JSON.stringify(obj);
      localStorage.setItem(userNum+1,newObj);
     name.value= "";
     email.value= "";

     let obj2 = JSON.parse(localStorage.getItem(newObj));
     console.log(obj2   );
   }
   
}  
