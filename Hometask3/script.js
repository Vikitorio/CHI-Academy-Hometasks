class Transport {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class Bike extends Transport {
    constructor(vehicleData) {
        super(vehicleData.brand, vehicleData.model);
        this.type = "Bike"
    }
    ride() {
        console.log(`${this.type} (${this.brand + ": " + this.model}) is moving.`);
    }
    stop() {
        console.log(`${this.type} is stop.`);
    }
}

class Car extends Transport {
    constructor(vehicleData) {
        super(vehicleData.brand, vehicleData.model);
        this.type = "Car"
    }
    ride() {
        console.log(`${this.type} (${this.brand + ": " + this.model}) is moving.`);
    }
    stop() {
        console.log(`${this.type} is stop.`);
    }
}


class TransportFabric {
    static buildTransport(type, vehicleData) {
        switch (type) {
            case "car":
                return new Car(vehicleData);
            case "bike":
                return new Bike(vehicleData);
        }
    }
}

const hondaBike = TransportFabric.buildTransport("bike", { brand: "Honda", model: "CB350" });
hondaBike.ride();

const bentley = TransportFabric.buildTransport("car", { brand: "Bentley", model: "Bentayga" });
bentley.ride();



// Task 2
const prevPaginationButton = document.querySelector(".pagination-prev");
const nextPaginationButton = document.querySelector(".pagination-next");
const pageDisplayer = document.querySelector(".pagination-page");
const characterList = document.querySelector(".character-list");
const baseUrl = "https://rickandmortyapi.com/api/character";


let pageData = {};
let currentPage = 1;
let lastPage = 1;
pageDisplayer.textContent = currentPage;

const eventHandlers = {
    changePage: (eventData) => changePage(pageData.info[eventData.target.dataset.direction]),
}

const updatePaginationButtonStatus = () => {
    prevPaginationButton.disabled = currentPage == 1;
    nextPaginationButton.disabled = currentPage == lastPage;
}
const addDelay = (delayTime) => {
    return new Promise(resolve => setTimeout(resolve, delayTime));
}

const changePage = async (url) => {
    if (url) {
        try {
            const newData = await fetchCharacters(url);
            currentPage = newData.info.next ? newData.info.next.split("=")[1] - 1 : newData.info.pages;
            updatePaginationButtonStatus();
            pageDisplayer.textContent = currentPage;
            renderPage(newData);
        } catch (error) {
            alert(error.message);
        }

    }

}

const fetchCharacters = async (url) => {
    characterList.innerHTML = `<div class="loading">Loading ...<div>`;
    await addDelay(1000);
    const responce = await fetch(url);
    if (!responce.ok) {
        throw new Error("Failed to fetch");
    }
    const parsedData = await responce.json();
    pageData = parsedData;
    lastPage = parsedData.info.pages;
    return parsedData;

}
const renderPage = async (data) => {
    const charactersList = document.querySelector(".character-list");
    charactersList.innerHTML = "";
    data.results.forEach((char) => {
        charactersList.innerHTML += `
        <div class="character-card">
            <div class="character-imagebox">
                <img class="character-image" src=${char.image}></img>
            </div>
            <div class="character-info">
                <p>Name: ${char.name}<p>
                <p>Status: ${char.status}</p>
            </div>
        </div>`;

    })
}
document.querySelector("body").addEventListener("click", async (event) => {
    const eventType = event.target.dataset.event;
    eventHandlers[eventType] && eventHandlers[eventType](event);

});


changePage(baseUrl);
