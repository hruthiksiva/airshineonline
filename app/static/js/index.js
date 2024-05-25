console.log('started index')

$(document).ready(function() {
$('#scrollLeftBtn').click(function() {
  $('#scrollRow').animate({scrollLeft: '-=200'}, 400);
});

$('#scrollRightBtn').click(function() {
  $('#scrollRow').animate({scrollLeft: '+=200'}, 400);
});
});

var hamberg = document.querySelectorAll('.n-button')
hamberg.forEach((ham) => {
  ham.addEventListener('click', ()=>{
    console.log(hamberg)
    hamberg.forEach((ham) =>{
      ham.classList.toggle('active')
    })
    document.querySelector('.n-menu-mobile').classList.toggle('active')
  })
})

// slider
var SlideImages = document.querySelectorAll('.s-image')
var Buttons = document.querySelectorAll('.s-button')
var classNames = ['s-left-1', 's-left-2', 's-center', 's-right-1', 's-right-2']
var classNamesReverse = [
  's-left-1r',
  's-left-2r',
  's-centerr',
  's-right-1r',
  's-right-2r',
]
var len = classNames.length

function handleBTN(i, animationDir) {
  // remove active class from all
  Buttons.forEach((btn) => {
    btn.classList.remove('active')
  })

  // Add active class to the current one
  Buttons[i].classList.add('active')

  // make slider work
  SlideImages.forEach((image, index) => {
    image.className = 's-image'
    image.classList.add(classNames[(i + index) % len])
  })
}

for (let i = 0; i < len; ++i) {
  Buttons[i].addEventListener('click', () => handleBTN(i, false))
}
var i = 0
var arrows = document.querySelectorAll('.s-controls .arrow')
console.log(arrows)
arrows[0].addEventListener('click', () => {
  i = (i - 1 + len) % len
  handleBTN(i, true)
})
arrows[1].addEventListener('click', () => {
  i = (i + 1) % len
  handleBTN(i, false)
})

if(window.innerWidth < 370){
  laugh1.style.left = imgOffSets.right - chatBoxOffSets.left - 50 + 'px'
}

if(window.innerWidth < 370){
  laugh2.style.left = imgOffSets.right - chatBoxOffSets.left - 40 + 'px'
  arrow.style.left = imgOffSets.right - chatBoxOffSets.left - 30 + 'px'
}
/*


var submitBtn = document.querySelector('.submit-button')
submitBtn.addEventListener('click', (event) => {
  console.log('mail')
  var name = document.querySelector('#f-c-form-name').value
  var street = document.querySelector('#f-c-form-street').value
  var city = document.querySelector('#f-c-form-City').value
  var post = document.querySelector('#f-c-form-Post').value
  var contact = document.querySelector('#f-c-form-contact').value
  var email = document.querySelector('#f-c-form-email').value
  var idea = document.querySelector('#f-c-form-idea').value

  var body = '<p>' + idea + '<p>'
  var to = email + ',' + 'shaikabdulkalamazad1@gmail.com'

  Email.send(
    'abdulkalams098@gmail.com',
    'abdulkalams2015@gmail.com',
    'This is a subject',
    'this is the body',
    { token: '63cb3a19-2684-44fa-b76f-debf422d8b00' }
  )
  // Email.send({
  //     Host: "smtp.gmail.com",
  //     Username : "sabdul@student.nitw.ac.in",
  //     Password : "Azad@556",
  //     To : to,
  //     From : "sabdul@student.nitw.ac.in",
  //     Subject : "from Airshine website",
  //     Body : body,
  //     }).then(
  //         message => alert("mail sent successfully")
  //     );

  console.log('Mail End')
})
*/
console.log('end')

/***
 *
 */


