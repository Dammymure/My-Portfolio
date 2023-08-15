// scroll effect


// const heroleftEl = document.querySelector(".hero-left-text")

// const careers = ["Fullstack Developer", "Content Writer", "Freelancer", "Project Manager"]

// let careerIndex = 0

// let characterIndex = 0

// function updateText() {
//  characterIndex++
//  heroleftEl.innerHTML = `
//     <h1 class="hero-text">I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>
// `
//  if (characterIndex === careers[careerIndex].length) {
//   careerIndex++
//   characterIndex = 0
//  }
//  if (careerIndex === careers.length) {
//   careerIndex = 0
//  }
//  setTimeout(updateText, 400)
// }

// updateText()

// const menu = document.querySelector('#mobile-menu')
// const menuLinks = document.querySelector('.navbar__menu')
// const navLogo = document.querySelector('#navbar__logo')

// // Display mobile menu
// const mobileMenu = () => {
//  menu.classList.toggle('is-active');
//  menuLinks.classList.toggle('active');
// };

// menu.addEventListener('click', mobileMenu);

// // Mouse animation
// const bodyEl = document.querySelector("body")
// const animeSection = document.querySelector(".anime")

// bodyEl.addEventListener("mousemove", (event) => {
//  const xPos = event.offsetX
//  const yPos = event.offsetY
//  const spanEl = document.createElement("span")
//  const one = 10
//  const two = 70


//  spanEl.style.left = (xPos - one) + "px"
//  spanEl.style.top = (yPos + two) + "px"
//  const size = Math.random() * 30
//  spanEl.style.width = size + "px"
//  spanEl.style.height = size + "px"
//  animeSection.appendChild(spanEl)
//  setTimeout(() => {
//   spanEl.remove()
//  }, 3000)
// }) 

// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//  <meta charset="UTF-8">
//  <meta name="viewport" content="width=device-width, initial-scale=1.0">
//  <title>Document</title>
//  <link rel="stylesheet" href="Style.css">
// </head>
// <body>
//      <nav class="navbar">
//       <div class="navbar__container">
     
//        <div class="navbar__group">
//          <img src="/images/dm-high-resolution-logo-color-on-transparent-background.png" alt="" class="logo">
     
//        </div>
     
//        <div class="navbar__toggle" id="mobile-menu">
//         <span class="bar"></span>
//         <span class="bar"></span>
//         <span class="bar"></span>
//        </div>
     
//        <ul class="navbar__menu">
//         <li class="navbar__item ">
//          <a href="#home" class="navbar__links highlight" id="#home-page">Home</a>
//         </li>
//         <li class="navbar__item">
//          <a href="#apps" class="navbar__links" id="#apps">Projects</a>
//         </li>
//         <li class="navbar__item">
//          <a href="#testimonials" class="navbar__links" id="#testimonials">Testimonials</a>
//         </li>
//         <li class="navbar__item">
//          <a href="#about-us" class="navbar__links" id="#about-us">About Us</a>
//         </li>
//         <li class="navbar__item">
//          <a href="#contact" class="navbar__links" id="#about-us">Contact</a>
//         </li>
//        </ul>
//       </div>
//      </nav>
//      <div class="anime">
//       <section class="hero">
//        <div class="hero-container">
//           <div class="hero-left">
//             <h1 class="hero-left-text"></h1>
//            </div>
//            <div class="hero-right">
//             <img src="images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg" alt="" class="hero-right-img">
//            </div>
//        </div>
//       </section>

//      </div>
//      <div>
//       <div class="middle">
//         <h1>My Projects</h1>
//         <p>lorem20</p>
//       </div>
//      </div>
     
// <script src="Index.js"></script>
// </body>

// </html>--></meta>