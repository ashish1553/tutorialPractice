
// let tags=document.getElementsByTagName('h3');
// console.log(tags);
// console.log(typeof(tags));




// let ids=document.getElementById('headId');
// ids.style.color='red'
// console.log(ids.innerHTML);
// ids.innerHTML='This is changed heading';



// let classes=document.getElementsByClassName('container');
// console.log(Array.from(classes));
// // console.log(classes[2]);
// for (let index = 0; index < classes.length; index++) {
//     const element = classes[index];
//     element.innerHTML='<h3>Changed Heading</h3>'
// }

// let divi=document.querySelector('div');
// divi=divi.children
// console.log(divi);
// console.log(divi.childElementCount);




// for (let index = 0; index < tags.length; index++) {
//     const element = tags[index];
//     element.style.color='green'
// }





// e.innerHTML= "<i>This is inserted</i>";
// console.log('heyff');


// let newele=document.createElement("li");
// newele.className="eleClass";
// newele.id="eleId";
// newele.setAttribute("title","mytitle")
// let eleItem=document.createTextNode("New object")
// newele.appendChild(eleItem)
// // newele.innerHTML="Added object";
// console.log(newele);

// let sele=document.querySelector("#itemListId");
// console.log(sele);
// sele.appendChild(newele)




let repEle=document.createElement("h3");
repEle.className="repClass";
repEle.id="repId";
repEle.innerHTML="Replaced Item";
console.log(repEle);

let repIns=document.querySelector("#card3")
console.log(repIns);
repIns.replaceWith(repEle)


document.querySelector('#headId').addEventListener("click",function(e) {
    console.log('you have clicked the heading');
    console.log(e);
})



























