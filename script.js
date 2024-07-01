"use strict"


const navigate = document.querySelector(".navigate")
const btnBreadcrumb = document.querySelector(".navbar")
const close = document.querySelector(".close")
const section = document.querySelector(".section-1")
const slide = document.querySelectorAll(".slide")
const repo = document.querySelectorAll(".respo")
const crespo = document.querySelectorAll(".crespo");
const grid = document.querySelectorAll(".grid")
const news = document.querySelectorAll(".news")
const back = document.querySelector(".dara")
const popup = document.querySelector(".popup")
const red = document.querySelector(".red")
// hide and showing navbar


const showMenu = () => {
    navigate.classList.toggle("hidden")
  
}
showMenu()

btnBreadcrumb.addEventListener("click", function () {
    showMenu()
    section.style.display = "none";
    popup.style.display = "none";
})
close.addEventListener("click", function () {
    showMenu()
    section.style.display = "block"
})

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !navigate.classList.contains("hidden")) {
        showMenu()
        section.style.display = "block";

    }
})

red.addEventListener("click", function () {
    popup.style.display="none"
})

// slide code
let slideIndex = 0
const hideSlide = () => {
    for (var i = 0; i < slide.length; i++){
        slide[i].style.display = "none"
    }
}

const showSlides = () => {
    hideSlide()
    slideIndex++
    if (slideIndex > slide.length) {
        slideIndex = 1
    }
    slide[slideIndex - 1].style.display="block"
    setTimeout(showSlides, 1000)
}
showSlides()


// repo

let repoindex = 0
const hodeRepo = () => {
    for (var i = 0; i < repo.length; i++){
        repo[i].style.display="none"
    }
}
const showRepo = () => {
    hodeRepo()

    repoindex++
    if (repoindex > repo.length) {
        repoindex = 1
    }
    
    repo[repoindex - 1].style.display = "block";
    setTimeout(showRepo, 2000)
}
showRepo()

// let repoindex = 0

// let showindex = 0;

// const hold = (hide) => {
//     for (var i = 0; i < hide.length; i++){
//         hide[i].style.display="none"
//     }
    
// }
// const showrepo = (show) => {
//     hold(show)
    
//     showindex++
//     if (showindex > show.length) {
//         showindex = 1
//     }
//     show[showindex - 1].style.display = "block"
// }
// // showrepo(repo)
// showrepo(crespo)
//  showrepo(repo)



let crespoindex = 0

const hideCrespo = () => {
    for (var i = 0; i < crespo.length; i++){
        crespo[i].style.display = "none"
    }
}
const showCrespo = () => {
    hideCrespo()

    crespoindex++
    if (crespoindex > crespo.length) {
        crespoindex = 1
    }
    crespo[crespoindex - 1].style.display = "block"
    setTimeout(showCrespo, 2000)
}

showCrespo()

window.addEventListener("resize", function () {
    if (window.innerWidth <= 700) {
        let currentGrid = 0
        const hideGrid = () => {
            for (var i = 0; i < grid.length; i++){
                grid[i].style.display="none"
            }
        }
        const showGrid = () => {
             hideGrid();
             
            currentGrid++
            if (currentGrid > grid.length) {
                currentGrid = 1
            }
            grid[currentGrid - 1].style.display = "block"
            
            setTimeout(showGrid, 4000)
        }
        showGrid()

    }
})

back.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
   })
})


