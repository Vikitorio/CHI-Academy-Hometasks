
const body = document.querySelector("body");
const charactersList = document.querySelector(".character-list");


const charModal = document.querySelector(".character-modal");
const charModalImage = charModal.querySelector(".character-modal__image");
const charModalName = document.querySelector(".character-modal__name");
const charModalStatus = document.querySelector(".character-modal__status");
const charModalGender = document.querySelector(".character-modal__gender");
const charModalSpecies = document.querySelector(".character-modal__species");

const characterLoading = document.querySelector(".character-loading");

const baseUrl = "https://rickandmortyapi.com/api/character";

let pageData = {};
let isPageLoading = false; // variable that contain loading state 

const eventHandlers = {
    toggleModal: () => charModal.hidden = !charModal.hidden,
    reachBottom: () => loadContent(pageData.info.next),
}

const toggleLoading = () => {
    characterLoading.hidden = !characterLoading.hidden;
    isPageLoading = !isPageLoading;
}
// helper that make some delay to see loading text
const addDelay = (delayTime) => {
    return new Promise(resolve => setTimeout(resolve, delayTime))
}

const loadContent = async (url) => {
    if (url && !isPageLoading) {
        toggleLoading();
        try {
            const newData = await fetchCharacters(url);
            renderPage(newData);
        } catch (error) {
            alert(error);
            toggleLoading();
        }
    }

}

const fetchCharacters = async (url) => {

    await addDelay(1000);
    const responce = await fetch(url);
    if (!responce.ok){
        throw new Error("Failed to fetch data");
    }
    const parsedData = await responce.json();
    pageData = parsedData;
    return parsedData;
}

const fetchCharacterById = async (charId) => {
    const responce = await fetch(baseUrl + "/" + charId);
    const parsedData = await responce.json();
    return parsedData;

}
const renderPage = async (data) => {

    data.results.forEach((char) => {
        const newCard = document.createElement("div");
        newCard.className = "character-card";
        newCard.innerHTML = `
            <div class="character-imagebox">
                <img class="character-image" src=${char.image}></img>
            </div>
            <div class="character-info">
                <p>Name: ${char.name}<p>
                <p>Status: ${char.status}</p>
            </div>`;
        newCard.addEventListener("click", async (event) => {
            event.stopPropagation();
            const charData = await fetchCharacterById(char.id);
            setModalData(charData);
            eventHandlers["toggleModal"]();
        })
        charactersList.appendChild(newCard);

    })
    toggleLoading();
}
// fill modal window with data 
const setModalData = (charData) => {
    charModalImage.src = charData.image;
    charModalName.innerHTML = "Name: " + charData.name;
    charModalStatus.innerHTML = "Status: " + charData.status;
    charModalGender.innerHTML = "Gender: " + charData.gender;
    charModalSpecies.innerHTML = "Species: " + charData.species;
};
body.addEventListener("click", async (event) => {
    const eventType = event.target.dataset.event;
    eventHandlers[eventType] && eventHandlers[eventType](event);

});

document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition >= document.body.scrollHeight - 300 && isPageLoading == false) {
        console.log("Reach bottom");
        eventHandlers["reachBottom"]();
    }
})


loadContent(baseUrl);
