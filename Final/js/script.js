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
let addPlant1 = document.querySelector("#add-new-plant1")
let addPlant2 = document.querySelector("#add-new-plant2")
let addPopup = document.querySelector(".add-popup")
let closePopup = document.querySelector("#popup-close")

const yourPlants = [];

// let camera = document.querySelector("#camera");

// // Get a reference to the preview image
// let previewImg = document.querySelector("#previewImg");

// // Listen to camera for a change in selection
// camera.addEventListener("change", function (event) {
//   // When file input changes, run this code...
//   console.log("User changed file input");

//   let photo = camera.files[0];

//   let imgSrc = URL.createObjectURL(photo);
//   // console.log("Image URL", imgSrc);
//   previewImg.src = imgSrc;

//   // console.log(previewImg);
// });

document.getElementById('plant-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const imageInput = document.getElementById('plant-image');
    const organInput = document.getElementById('plant-organ').value;

    if (imageInput.files.length === 0) {
        alert('Please select an image!');
        return;
    }

    const apiKey = '2b10QiE3yzpV9Lc6WnVBqX2Yl'; // Replace with your API key
    const apiUrl = 'https://my-api.plantnet.org/v2/identify/all';

    // Prepare form data
    const formData = new FormData();
    formData.append('organs', organInput);
    formData.append('images', imageInput.files[0]);

    // Make the API call
    try {
        const response = await fetch(`${apiUrl}?api-key=${apiKey}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error(error);
        alert('Failed to identify the plant. Please try again.');
    }
});

// Function to display the result
function displayResult(data) {
    const resultDiv = document.getElementById('result');
    const speciesName = document.getElementById('species-name');
    const confidenceScore = document.getElementById('confidence-score');

    if (data.results && data.results.length > 0) {
        const bestMatch = data.results[0];
        speciesName.textContent = `Species: ${bestMatch.species.scientificName}`;
        confidenceScore.textContent = `Confidence: ${(bestMatch.score * 100).toFixed(2)}%`;
        resultDiv.style.display = 'block';
    } else {
        speciesName.textContent = 'No match found.';
        confidenceScore.textContent = '';
        resultDiv.style.display = 'block';
    }
}

closePopup.addEventListener("click", function() {
    addPopup.style.opacity = "0"
    setTimeout(function(){
        addPopup.style.display = "none"
    }, 180)
})

addPlant1.addEventListener("click", function() {
    addPopup.style.display = "grid"
    setTimeout(function(){
        addPopup.style.opacity = "1"
    }, 180)
})

addPlant2.addEventListener("click", function(){
    addPopup.style.display = "grid"
    setTimeout(function(){
        addPopup.style.opacity = "1"
    }, 250)
})


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

