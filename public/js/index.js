

const ul = document.getElementById('item');
const btnAdd = document.getElementById('add');
const name = document.querySelector('#name');
const price = document.getElementById('price');
const descreption = document.getElementById('descreption')
const quantity = document.getElementById('quantity');
btnAdd.addEventListener('click', addItem);

ul.addEventListener('click',buyItem);
function creatList(obj) {   
    li = document.createElement('li');
    li.appendChild(document.createTextNode(`${obj.name}  ${obj.descreption}  ${obj.price}  ${obj.quantity}`));
    var Buy1 = document.createElement('input');
    Buy1.setAttribute('type','submit' );
    Buy1.setAttribute('value','Buy1');
    Buy1.setAttribute('id',obj.id);
    Buy1.className = 'Buy1'
  
    var Buy2 = document.createElement('input');
    Buy2.setAttribute('type','submit' );
    Buy2.setAttribute('value','Buy2');
    Buy2.setAttribute('id',obj.id);
    Buy2.className = 'Buy2'

    var Buy3 = document.createElement('input');
    Buy3.setAttribute('type','submit' );
    Buy3.setAttribute('value','Buy3');
    Buy3.setAttribute('id',obj.id);
    Buy3.className = 'Buy3'

    li.appendChild(Buy1);
    li.appendChild(Buy2);
    li.appendChild(Buy3);
    
   
        ul.appendChild(li);
}
fetch('http://localhost:5000/data').then(res => res.json()).then(obj=>{
    obj.forEach(e => {creatList(e) });
})

function addItem(){
   
     var obj ={
        name:name.value,
        descreption:descreption,
        price:price.value,
        quatity: quatity.value
     };
     fetch('/add',{body:obj})
}

function editquantity (item, q){
    console.log(item.id)
    if(item.quantity-q<0){
        alert('item quantity is less you can buy: '+item.quantity);
    }else if(item.quantity-q==0){
        console.log(item.id)
        fetch(`/delet/${item.id}`,{id:item.id});
    }else{
        
        fetch(`/edit`,{method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({id:item.id, quantity:item.quantity-q})})
        }
        location.reload()
    
}

function buyItem(e) {
    let li= e.target.parentElement;
    fetch(`/edit/${e.target.id}`,{id:e.target.id}).
    then(res => res.json()).
    then(item=>{
        console.log(item)
    if(e.target.classList.contains('Buy1')){
        editquantity(item[0],1);
    }else if(e.target.classList.contains('Buy2')){
        editquantity(item[0],2);
    }else{
        editquantity(item[0],3);
    }
           
        
    })
//     if(e.target.classList.contains('Buy1')){
//      if()
//         {  li.parentElement.removeChild(li)}
//     fetch('/delete',{method:"post",
//     headers:{"Content-type":"application/json"},
//     body:JSON.stringify({id:e.target.id})})
// }

//     if(e.target.classList.contains('edit')){
//         fetch(`http://localhost:4000/edit/${e.target.id}`).then(res => res.json()).then(obj=>{
//             product.value = obj[0].product   
//            price.value = obj[0].price
//             category.value = obj[0].category
//             document.getElementById('form').setAttribute ('action',`/edit/${obj[0].id}`)
//         })
//     }
}


