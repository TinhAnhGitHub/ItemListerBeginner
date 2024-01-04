// console.dir(document)

// console.log(document.all);
// document.all[9].textContent = "Item Users Modified"

// document.title = "Item Users Modified"
// console.log(document.title)

// const headerH1 = document.getElementById("main-header")


// innerText pays attention to styling, whereas textContent does not
// innerHTML actually replace html part
// headerH1.style.borderBottom = "2px solid #000"


// const itemsList = document.getElementsByClassName("list-groups-item")
// console.log(itemsList)


// var itemList = document.querySelector('#items')
// console.log(itemList.parentNode)
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = '#f4f4f4f4'

//children

// console.log(itemList.children) // HTML collection
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

// First Child
// itemList.firstElementChild.style.border = '2px black dotted'
// itemList.lastElementChild.textContent = "Hello last child"

// for(let i = 0; i < itemList.children.length; i++){
//     itemList.children[i].style.fontWeight = 'bold'
// }
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling)

//next siblings and previous Siblings
// itemList.previousElementSibling.style.color= 'green'

// create new Element

// var newDiv = document.createElement('div');
// newDiv.className = "hello"
// newDiv.id = "world"
// newDiv.setAttribute('title', 'helloWorld')
// var newDivText = document.createTextNode('HelloWorld')
// newDiv.appendChild(newDivText)

// var containerElement = document.querySelector('header .container')
// containerElement.appendChild(newDiv)
// console.log(newDiv)
// var h1 = document.querySelector('header h1')
// newDiv.style.fontSize = '30px'
// containerElement.insertBefore(newDiv, h1)

// var button = document.querySelector('button').addEventListener(
//     'click',function RunEvent(e){

//     }
// )
    
// )
// function clickKing (e){
    // document.getElementById('header-title').textContent = "Button Clicked !"
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.className)
        // console.log(e.target.classList)
        // var output = document.getElementById('output')
        // console.log(output)
        // output.innerHTML = '<h3>'+e.target.className+'</h3>'
        // output.style.color = 'black'

        // console.log(e.clientX)
        // console.log(e.offsetX)

//         console.log(e.altKey)
// }


var button = document.querySelector('button')
var box    = document.querySelector('#box')
var output = document.getElementById('output')
var select = document.querySelector('.selection')
// button.addEventListener('click', runEvent)
// button.addEventListener('click', runEvent)
// button.addEventListener('mousedown', runEvent) // as soon as click down->run
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseleave', runEvent) //TODO: work with inner elemnt as well

// box.addEventListener('mousemove', runEvent)

var InputForm = document.querySelector('input[type="text"]')
var form = document.querySelector('form')

// InputForm.addEventListener('keydown', runEvent) leyup, keypress

// InputForm.addEventListener('focus', runEvent)
// InputForm.addEventListener('blur', runEvent)
// InputForm.addEventListener('cut', runEvent)
// InputForm.addEventListener('paste', runEvent) 'input': all of these count
// select.addEventListener('change',runEvent)

form.addEventListener('submit', runEvent)

function runEvent(e){
    e.preventDefault();
   console.log("EVENT TYPE: "+e.type)
   // console.log(e.target.value)

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>'
    // document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+', 40)'


}





