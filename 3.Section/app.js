// document.getElementById()
// console.log(document.getElementById("task-title"));



//get things from the element
// console.log(document.getElementById("task-title").id)
// console.log(document.getElementById("task-title").className)
// const taskTitle=document.getElementById("task-title");

//change styling
// taskTitle.style.background="black";
// taskTitle.style.color="#fff";
// taskTitle.style.padding="5px";
// taskTitle.style.display="none";

//change content
// taskTitle.textContent="Task List";
// taskTitle.innerText="My Tasks";
// taskTitle.innerHTML="<span style='color:red;'>Task List</span>";

//document.querySelector()
// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".task-title"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color="red";
// document.querySelector("ul li").style.color="blue";
// document.querySelector("li:last-child").style.color="red";
// document.querySelector("li:nth-child(3)").style.color="yellow";
// document.querySelector("li:nth-child(4)").textContent="Hello World";
// document.querySelector("li:nth-child(odd)").style.background="#ccc";
// document.querySelector("li:nth-child(even)").style.background="#f4f4f4";

//? getElementByClassName()
// const items=document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color="red";
// items[3].textContent="Hello";

// const listItems = document
//     .querySelector("ul")
//     .getElementsByClassName("collection-item");
// console.log(listItems);

//? document.getElementByTagName()

// let lis=document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color="red";
// lis[3].textContent="Hello";

// //? convert html collection to array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function (li,index) {
//     console.log(li.clasName)
//     li.textContent=`${index} : Hello`
// });

// console.log(lis);
//? document.querySeelectorAll()

// const items=document.querySelectorAll("ul.collection li.collection-item");

// items.forEach(function (item,index) {
//         console.log(item.clasName)
//         item.textContent=`${index} : Hello`
//     });


    // const liOdd=document.querySelectorAll("li:nth-child(odd)");
    // const liEven=document.querySelectorAll("li:nth-child(even)");

    // liOdd.forEach(function(li){
    //     li.style.background="#ccc";
    // });
    // for(let i=0;i<liEven.length;i++)
    // {
    //     liEven[i].style.background="#f4f4f4";
    // }
//     let val;
//     const list=document.querySelector("ul.collection");
//     const lisItem=document.querySelector("li.collection-item:first-child");
    
//     val=lisItem;
//     val=list;
    
//     //get child nodes
//     val=list.childNodes;
//     val=list.childNodes[0];
//     val=list.childNodes[0].nodeName;
//     val=list.childNodes[1].nodeType;
//     //get children element nodes
//     val=list.children;
//     val=list.children[1];
//     val=list.children[1].textContent="Hello";
    
// //children of children
// val=list.children[3].children[0].id="test-link";
// val=list.children[3].children[0];
// //! first child
// val=list.firstChild;
// val=list.firstElementChild;
// //! last child

// val=list.lastChild;
// val=list.lastElementChild;

// //? count child elements
// val=list.childElementCount;

// //?get parent node
// val=lisItem.parentNode;
// val=lisItem.parentElement;
// val=lisItem.parentElement.parentElement;

// //? get next subling
// val=lisItem.nextSibling;
// val=lisItem.nextElementSibling.nextElementSibling;
// //? get previous subling
// // val=lisItem.previousSibling;
// // val=lisItem.previousElementSibling;

// console.log(val);
///dfsdfsdfsdfdsfsd
//deneme yaptim

