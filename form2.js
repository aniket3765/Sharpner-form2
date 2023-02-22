const form = document.querySelector('#btn');
const name= document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector(".msg");
const userList = document.querySelector('#user')


document.getElementById("items").addEventListener('click', removeItem);
document.getElementById("items").addEventListener('click', editItem);
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

  var deleteBtn = document.createElement('input');
  deleteBtn.setAttribute('type','button' );
  deleteBtn.setAttribute('value','delete');

  var editbtn = document.createElement('input');
  editbtn.setAttribute('type','button' );
  editbtn.setAttribute('value','edit');

  // Add classes to  button
  editbtn.className = 'btn btn-info btn-sm edit';
  deleteBtn.className = 'btn btn-danger btn-sm delete';

  // Append button to li
  li.appendChild(editbtn);
  li.appendChild(deleteBtn);


    let obj = {
        name : name.value,
        email : email.value
    };
       axios.post('https://crudcrud.com/api/7c7b09c532bc4fccb7303c4537a160b7/newaniket',obj);
     name.value= "";
     email.value= "";

     

   }
   }
   
function removeItem(e){
    if(e.target.classList.contains('delete')){
     
        var li = e.target.parentElement;
        document.getElementById("items").removeChild(li);
      }
    }
    function editItem(e){
        if(e.target.classList.contains('edit')){
            let li = e.target.parentElement;
            let text_node = li.textContent;
            let obj = JSON.parse(localStorage.getItem(text_node));
            name.value = obj.name;
            email.value = obj.email;
            localStorage.removeItem(text_node);
            document.getElementById("items").removeChild(li);
        }
    }
