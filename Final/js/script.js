let nameForm = document.querySelector("#name-form")
let enterPage = document.querySelector(".enter-page")
let homePage = document.querySelector(".home-page")
let plantsPage = document.querySelector(".plants-page")
let remindersPage = document.querySelector(".reminders-page")
let tipsPage = document.querySelector(".tips-page")
let navBar = document.querySelector(".nav-bar")
let navBG = document.querySelector(".nav-bg")
let headerBar = document.querySelector(".header-bar")
let homeIcon = document.querySelector("#home-icon")
let plantsIcon = document.querySelector("#plants-icon")
let remindersIcon = document.querySelector("#reminders-icon")
let tipsIcon = document.querySelector("#tips-icon")
let iconBG = document.querySelector("#icon-bg")

nameForm.addEventListener("submit", function(event){
    event.preventDefault()
    enterPage.style.opacity = "0"
    homePage.style.display = "grid"
    navBar.style.display = "flex"
    navBG.style.display = "block"
    headerBar.style.display = "grid"
    setTimeout(function(){
        enterPage.display = "none"
        homePage.style.opacity = "1"
        navBar.style.opacity = "1"
        navBG.style.opacity = "1"
        headerBar.style.opacity = "1"
    }, 250)
})

homeIcon.addEventListener("click", function(){
    hideAllPages()
    setTimeout(function(){
        homePage.style.display = "grid"
        setTimeout(function(){
            homePage.style.opacity = "1"
            iconBG.style.marginLeft = "0"
        }, 50)
    }, 125)
})

plantsIcon.addEventListener("click", function(){
    hideAllPages()
    setTimeout(function(){
        plantsPage.style.display = "grid"
        setTimeout(function(){
            plantsPage.style.opacity = "1"
            iconBG.style.marginLeft = "80px"
        }, 50)
    }, 125)
})

remindersIcon.addEventListener("click", function(){
    hideAllPages()
    setTimeout(function(){
        remindersPage.style.display = "grid"
        setTimeout(function(){
            remindersPage.style.opacity = "1"
            iconBG.style.marginLeft = "160px"
        }, 50)
    }, 125)
})

tipsIcon.addEventListener("click", function(){
    hideAllPages()
    setTimeout(function(){
        tipsPage.style.display = "grid"
        setTimeout(function(){
            tipsPage.style.opacity = "1"
            iconBG.style.marginLeft = "240px"
        }, 50)
    }, 125)
})

function hideAllPages() {
    homePage.style.opacity = "0"
    plantsPage.style.opacity = "0"
    remindersPage.style.opacity = "0"
    tipsPage.style.opacity = "0"
    homeIcon.style.backgroundColor = "transparent"
    plantsIcon.style.backgroundColor = "transparent"
    remindersIcon.style.backgroundColor = "transparent"
    tipsIcon.style.backgroundColor = "transparent"
    setTimeout(function(){
        homePage.style.display = "none"
        plantsPage.style.display = "none"
        remindersPage.style.display = "none"
        tipsPage.style.display = "none"
    }, 125)
}

