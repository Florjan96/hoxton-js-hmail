import './style.css'

const state = {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'nico@email.com',
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
console.log(state)

function emailList(){

  
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
  let eList=document.querySelector(".email-list")

let inbox=document.createElement('h1')
inbox.textContent="Inbox"

let emailListUl=document.createElement('ul')
emailListUl.className="emails-list"

let liItem=document.createElement('li')
liItem.className="emails-list__item"

 
let span=document.createElement('span')
span.className="emails-list__item__read-icon material-symbols-outlined"
span.textContent=" mark_email_unread"

let img=document.createElement('img')
img.className="emails-list__item__image"
img.src="assets/nico.JPG" 

let name=document.createElement('p')
name.className="emails-list__item__from"
name.textContent="Nico"

let content=document.createElement('p')
content.className="emails-list__item__content"
content.textContent="Link to today's video and slides is up!"


liItem.append(span,img,name,content)
emailListUl.append(liItem)
eList.append(emailListUl,inbox)

}
}
emailList()
