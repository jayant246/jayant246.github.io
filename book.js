// document.addEventListener('DOMContentLoaded', () => {
//     // let list = document.querySelector('.list');
// // console.log(list.previousElementSibling.textContent);
// // console.log(list.nextElementSibling);
// // list.previousElementSibling.innerText+= "<p> how are you </p>"
// // let head = document.querySelector('#book-list h2')
// // head.addEventListener('click', function(e){
// //     head.remove();
// // })
// let btn = document.querySelectorAll('.delete');
// // btn.forEach(items => {
// //     items.addEventListener('click', () => {
// //         items.parentElement.remove();
// //     })
// // })
// let list = document.querySelector('#book-list ul');
// list.addEventListener('click', e =>{
//     if(e.target.className == 'delete'){
//         let li = e.target.parentElement;
//         list.removeChild(li);
//     }

// })
// // let add = document.querySelector('.btn-add');
// // add.addEventListener('click', e => {
// //     e.preventDefault();
// //     let value = document.querySelector('.add-book').value;
// //     console.log(value);
// // })
// let forms = document.forms['add'];
// // console.log(forms);
// forms.addEventListener('submit', e => {
//     e.preventDefault();
//     let value = forms.querySelector('.add-book').value;

//     // create element
//     let li = document.createElement('li');
//     let deleteBTN = document.createElement('span');

//     // add text-content
//     deleteBTN.textContent = "delete";
//     li.textContent = value;

//     // add class
//     // deleteBTN.className = "delete";
//     deleteBTN.classList.add("delete");
//     li.appendChild(deleteBTN);
//     list.appendChild(li);
     
//     // remove
//     // forms.querySelector('input').value = "";
//     document.querySelector('.add-book').value = "";
// })

// // hide books
//     let hide = document.querySelector('#hide');
//     hide.addEventListener('change', e => {
//         if(hide.checked)
//         list.style.display = "none";
//         else
//         list.style.display = "block";

//     })

//     // Search bar & filter books
//     let searchBar = document.querySelector('#search input');
//     searchBar.addEventListener('keyup', e =>{
//         let term = e.target.value.toLowerCase();
//         let books = document.querySelectorAll('.list li');
//         books.forEach(items => {
//             let value = items.firstElementChild.textContent;

//     // .includes() can also be used
//             if(value.toLowerCase().indexOf(term) != -1)
//                 items.style.display = "block";
//             else
//                 items.style.display = "none";
//         })
//     })
// // attributes
// // let books = document.querySelector('#book-list li:nth-child(3)').children[0];
// // // books => <span class = "delete">delete </span> 
// // console.log(books.hasAttribute('class')); // true
// // console.log(books.getAttribute('class')); // delete
// // books.setAttribute('class', 'temp'); // class => temp
// // books.removeAttribut('class');  // class => ""
// })
// delete, add, search & hide

let list = document.querySelector('.list');

// delete

// => this delete button will only act for existing delete button
// & soln is add event to whole ul
// let deleteBTN = document.querySelectorAll('.list li .delete');
// deleteBTN.forEach(items => {
//     console.log("object");
//     items.addEventListener('click', e =>{
//        items.parentElement.remove();
//     })
// })

list.addEventListener('click', e => {
    if(e.target.className == "delete"){
        e.target.parentElement.remove();
    }
})

// add
let addBTN = document.querySelector('.btn-add');
addBTN.addEventListener('click', e =>{
    e.preventDefault();
    let val = document.querySelector('.add-book').value;

    // create new Element
    let li = document.createElement('li');
    let del = document.createElement('span');
    let name = document.createElement('span');

    // set value to newly created element
    del.textContent = "delete";
    name.textContent = val;

    // add class to newly created element
    del.classList.add("delete");
    
    // append

    li.appendChild(name);
    li.appendChild(del);
    list.appendChild(li);
    // clear adding input

    let inputBar = document.querySelector('.add-book');
    inputBar.value = "";
})

// hide or show books

let checkBox = document.querySelector('#hide');
checkBox.addEventListener('change', e => {
    if(checkBox.checked)
        list.style.display = "none";
    else
        list.style.display = "block";
})

// search

let searchBar = document.querySelector('#search input');
searchBar.addEventListener('keyup', e => {
    let term = e.target.value;
    let books = document.querySelectorAll('.list li');
    books.forEach(item => {
        let bookName = item.firstChild.textContent.toLowerCase();
        if(bookName.includes(term.toLowerCase()))
            item.style.display = "block";
        else 
            item.style.display = "none";
    })
})