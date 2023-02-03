const form = document.querySelector('#btn');
const name= document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector(".msg");
const userList = document.querySelector('#user')


document.getElementById("items").addEventListener('click', removeItem);
form.addEventListener("click", onsubmit);
function onsubmit(e){
    e.preventDefault();

   if(name.value==='' || email.value===''){
      msg.classList.add("alert");
   msg.innerHTML = "Please enter your Name and email";
    setTimeout(()=> msg.remove(),3000);
   } 
   else{
 // Create new li element
  var li = document.createElement('li');
  // Add class
 
  // Add text node with input value
  li.appendChild(document.createTextNode(name.value));

  // Append li to list
  document.getElementById("items").appendChild(li);

  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);


    let obj = {
        name : name.value,
        email : email.value
    };
    let newObj = JSON.stringify(obj);
      localStorage.setItem(userNum+1,newObj);
     name.value= "";
     email.value= "";

     let obj2 = JSON.parse(localStorage.getItem(newObj));
     console.log(obj2);

   }
   }
   
function removeItem(e){
    if(e.target.classList.contains('delete')){
     
        var li = e.target.parentElement;
        document.getElementById("items").removeChild(li);
      }
    }
 
