import './style.css'

type Email={
  from:string
  header:string
  content:string
  emailAdress:string
  img:string
  read:boolean
}

type State={
  emails:Array<Email>;

};

const state:State = {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAdress: 'nico@email.com',
      img: 'assets/nico.JPG',
      read: false
    },
    {
      from: 'Ed',
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        'Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'ed@email.com',
      img: 'assets/ed.JPG',
      read: false
    },
    {
      from: 'Government',
      header: 'Time to pay your tax!',
      content:
        'Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'government@email.com',
      img: 'assets/gov.jpg',
      read: false
    }
    // feel free to add more emails here
  ]
}


function emailList(){

  let eList=document.querySelector(".email-list")

let inbox=document.createElement('h1')
inbox.textContent="Inbox"
eList.append(inbox)

console.log(eList)
// <h1>Inbox</h1>
// <ul class="emails-list">
//   <li class="emails-list__item">
//     <span class="emails-list__item__read-icon material-symbols-outlined">
//       mark_email_unread
//     </span>
//     <img class="emails-list__item__image" src="assets/nico.JPG" />
//     <p class="emails-list__item__from">Nico</p>
//     <p class="emails-list__item__content">
//       Link to today's video and slides is up!
//     </p>
//   </li>
// </ul>
for (let email of state.emails){
  
 


let emailListUl=document.createElement('ul')
emailListUl.className="emails-list"

let liItem=document.createElement('li')
liItem.className="emails-list__item"

liItem.addEventListener("click", ()=>{
  eList.textContent=''
//   <section class="single-email">
//   <button class="single-email__button">⬅Back</button>
//   <div class="single-email__sender-section">
//     <img class="single-email__image" src="assets/nico.JPG" />
//     <span class="single-email__sender">Nico (nico@email.com)</span>
//   </div>
//   <h1 class="single-email__header">Link to today's video and slides is up!</h1>
//   <p class="single-email__content">
//     Link is up and you know where to find it! Lorem ipsum dolor sit amet
//     consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis
//     incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a
//     architecto earum voluptatibus vel atque.
//   </p>
// </section>
let section=document.createElement('section')
section.className="single-email"

let button=document.createElement('button')
button.className="single-email__button"
button.textContent="⬅Back"
// let main=document.querySelector("main")
// main.append(button)
let div=document.createElement('div')
div.className="single-email__sender-section"

let  img=document.createElement('img')
img.className="single-email__image"
img.src="assets/nico.JPG"

let span=document.createElement('span')
span.className="single-email__sender"
span.textContent='Nico (nico@email.com)'

let h1=document.createElement('h1')
h1.className="single-email__header"
h1.textContent="Link to today's video and slides is up!"

let pContent=document.createElement('p')
pContent.className="single-email__content"
pContent.textContent= 'Link is up and you know where to find it! Lorem ipsum dolor sit amet'

div.append(img,span)
section.append(div,button,h1,pContent)
let main=document.querySelector("main")
main.append(section)
console.log(main)




})




let span=document.createElement('span')
span.className="emails-list__item__read-icon material-symbols-outlined"
span.textContent=" mark_email_unread"

let img=document.createElement('img')
img.className="emails-list__item__image"
img.src=email.img

let name=document.createElement('p')
name.className="emails-list__item__from"
name.textContent=email.from

let content=document.createElement('p')
content.className="emails-list__item__content"
content.textContent=email.content


liItem.append(span,img,name,content)
emailListUl.append(liItem)
eList.append(emailListUl)

}
}
emailList()



