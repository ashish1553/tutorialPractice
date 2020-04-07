
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




// let repEle=document.createElement("h3");
// repEle.className="repClass";
// repEle.id="repId";
// repEle.innerHTML="Replaced Item";
// console.log(repEle);

// let repIns=document.querySelector("#card3")
// console.log(repIns);
// repIns.replaceWith(repEle)


// document.querySelector('#headId').addEventListener("click",function(e) {
//     console.log('you have clicked the heading');
//     console.log(e);
// })



// let btn=document.getElementById('inputButton');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);


// function func1(e)
// {
//     console.log("Its a Click",e.target);

// }
// function func2(e)
// {
//     console.log('Its a Double Click',e.offsetX);
// }



// let c=document.getElementsByClassName('container');
// console.log(Array.from(c));






let divEle = document.createElement('div');
let val = localStorage.getItem('text');
let text;
if (val == null)
{
    text = document.createTextNode('This is Editable text. Click to edit.');
}
else
{
    text = document.createTextNode(val);
}

divEle.appendChild(text);
divEle.setAttribute("id", "elem");
divEle.setAttribute("class", "elem");
divEle.setAttribute("style", "border: 2px solid green; width: 400px; height: 100px; margin: 34px padding: 23px ");

let container = document.querySelector('.bigContainer');
let first = document.getElementById('para-3');
// console.log(first);
container.insertBefore(divEle, first);
// console.log(divEle);

divEle.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
        let html = elem.innerHTML;
        divEle.innerHTML = `<textarea class="form-control textarea" id="textArea" rows="3" style="margin: 7px; width: 94%;">${html}</textarea>
        `
    }
    let textArea = document.getElementById('textArea');
    textArea.addEventListener('blur',function(){
        elem.innerHTML = textArea.value;
        localStorage.setItem('text',elem.innerHTML)

    })
});



























