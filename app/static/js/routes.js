console.log('started route')

var hamberg = document.querySelectorAll('.n-button')
hamberg.forEach((ham) => {
  ham.addEventListener('click', () => {
    console.log(hamberg)
    hamberg.forEach((ham) => {
      ham.classList.toggle('active')
    })
    document.querySelector('.n-menu-mobile').classList.toggle('active')
  })
})

var logo = document.querySelector('.n-logo')
logo.addEventListener('click', () => {
  console.log('logo click')
  const { origin } = window.location
  window.location.href = origin
  console.log(origin)
})

// handle menu more section
var navMoreMenu = document.querySelector('.n-menu-more')
navMoreMenu.addEventListener('click', (event) => {
  console.log('click')
  var options = document.querySelector('.n-more-options')
  console.log(options)
  if (options.style.display == '' || options.style.display == 'none') {
    options.style.display = 'flex'
  } else {
    options.style.display = 'none'
  }
})

// var submitBtn = document.querySelector('.submit-button')
// submitBtn.addEventListener('click', (event) => {
//   event.preventDefault()
//   console.log('mail')
//   var name = document.querySelector('#f-c-form-name').value
//   var street = document.querySelector('#f-c-form-street').value
//   var city = document.querySelector('#f-c-form-City').value
//   var post = document.querySelector('#f-c-form-Post').value
//   var contact = document.querySelector('#f-c-form-contact').value
//   var email = document.querySelector('#f-c-form-email').value
//   var idea = document.querySelector('#f-c-form-idea').value

//   var body = '<p>' + idea + '<p>'
//   var to = email + ',' + 'shaikabdulkalamazad1@gmail.com'

//   console.log('Mail End')
// })
