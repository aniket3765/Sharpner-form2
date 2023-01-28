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
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
     userList.appendChild(li);

     name.value= "";
     email.value= "";
   }
   
}  
