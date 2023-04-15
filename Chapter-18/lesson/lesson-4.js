// video 197
// Selector part one in javascript

// Id, Class, tagName, Name
/**
let title = document.getElementById('title')

console.log(title)

let paragraphs = document.getElementsByClassName('lead')
console.log(paragraphs)

let list = document.getElementsByTagName('li')
console.log(list)

let listItemOne = document.getElementsByName('list-item-one')
console.log(listItemOne) 
*/

// console.log('Hello test hello!')







// video 198
// Selector part Two in javascript
/**
let title = document.querySelector('#title')
console.log(title)

let paragraph = document.querySelector('.lead')
console.log(paragraph)

let paragraphs = document.querySelectorAll('.lead')
console.log(paragraphs)

let lists = document.querySelectorAll('li')
console.log(lists)


let listItemOne = document.querySelector('[name w= list-item-one]')
console.log(listItemOne)
 */








// video 199
// Get elements method vs Query selector in javascript
/**
let li1 = document.getElementsByTagName('li') //element
let li2 = document.querySelectorAll('li')  // Node
console.log(li1)
console.log(li2)

let ul = document.querySelector('ul')
console.log(ul.childNodes)
 */








// video 200
// How to traverse dom elements in javascript
/**

let list = document.getElementById('list')
// let parent = list.parentElement
// console.log(parent)

// let children = list.children
// console.log(children)
// console.log(list.previousSibling)
// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)

// let li  = document.querySelector('li')
// console.log(li.nextElementSibling)

console.log(list.firstElementChild)
console.log(list.lastElementChild)
 */








// video 201
// How to loop throw HTML collections in javascript
/**
let listItem = document.getElementsByTagName('li') 

// let listItems = Array.from(listItem)
// let listItems = Array.prototype.slice.apply(listItem)
let listItems = [... listItem] //spreed operator([... listItem])


// console.log(typeof listItems, listItems)
listItems.forEach((li, index) => {
    let text =li.innerHTML
    li.innerHTML = `(${index + 1}) ${text}`
})
 */








// video 202
// create dom elements in javascript
/**
// let li = document.createElement('li')
// li.className = 'list-group-item'
// li.setAttribute('title','i am item')
// // console.log(li)

// li.innerHTML= 'Four'
// let list = document.getElementById('list')
// list.appendChild(li)

function createElement(tagName, className, innerHTML){
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''
    return tag
}

function append(parent, children){
    children.forEach(child => parent.appendChild(child));
}



let li = createElement('li', 'list-group-item','Four')
let li5 = createElement('li', 'list-group-item','Five')
let li6 = createElement('li', 'list-group-item','Six')
// li.setAttribute('title', 'i am fourth item')
let list = document.getElementById('list')
list.appendChild(li)
list.appendChild(li5)
list.appendChild(li6)



let p1 = createElement('p','lead', '1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic enim ea repellat iusto consequuntur quam tempora nisi maiores explicabo!')

let p2 = createElement('p','lead', '2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic enim ea repellat iusto consequuntur quam tempora nisi maiores explicabo!')

let div = createElement('div')
append(div,[p1,p2])

console.log(div) 

let container = document.getElementById('cont').appendChild(div)
// container.appendChild(div)


 */
/**
let listItem = document.getElementsByClassName('list-group-item')
let listItems = [... listItem]
listItems.forEach((li, index) => {
    let text =li.innerHTML
    li.innerHTML = `(${index + 1}) ${text}`
}) */






















