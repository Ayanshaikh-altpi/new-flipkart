console.log("js");
let recentArray = JSON.parse(localStorage.getItem("recentArray")) || [];

const input_search = document.querySelector("#search_input");
const form_search = document.querySelector("#search_form");
const recent_searchEl = document.querySelector(".recent_search");

form_search.addEventListener("submit", (e) => {
    e.preventDefault();
    recentArray.unshift(input_search.value);
    console.log(recentArray);
    renderRecent();
    localStorage.setItem("recentArray", JSON.stringify(recentArray));
});

function renderRecent() {
    let recent_search_html = recentArray
        .map(
            (el) => `
        <div class="recent_list">
            <i class="fa-solid fa-clock-rotate-left" style="color: #669af5;"></i>
            <p>${el}</p>
        </div>
    `
        )
        .join("");
    recent_searchEl.innerHTML = recent_search_html;
}

renderRecent();

const slider = document.querySelector(".slider_container");
const button = document.querySelectorAll(".button");

button.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log(slider.style.transform);
        slider.style.transform = `translateX(${-100 * index}vw)`;
        console.log("fhaskj");
    });
});
// API with JSON
const container = document.querySelector(".middle");
const container2 = document.querySelector(".middle2");
let itemArray = [];

fetch("./item.json")
    .then((res) => res.json())
    .then((data) => {
        itemArray = data.watch;
        listItem(itemArray);
        itemArray = data.cloth;
        clothItem(itemArray);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

let fragment;
function listItem(data) {
    fragment = document.createDocumentFragment();
    data?.forEach((item) => {
        const watchItem = document.createElement("div");
        watchItem.classList.add("watch_item");
        watchItem.innerHTML = `
            <div class="watch_item">
                <a href="product.html"><img src="${item.image}" class="proImg"></a>
                <h3 class="price">Price: $${item.price}</h3>
                <p class="company">${item.name}</p>
            </div>
        `;
        fragment.appendChild(watchItem);
    });
    container.appendChild(fragment);
}
function clothItem(data) {
    console.log(data);
    data?.forEach((item) => {
        const clothItem = document.createElement("div");
        clothItem.classList.add("watch_item");
        clothItem.innerHTML = `
            <div class="watch_item">
                <a href="product.html"><img src="${item.image}" class="proImg"></a>
                <h3 class="price">Price: $${item.price}</h3>
                <p class="company">${item.name}</p>
            </div>
        `;
        fragment.appendChild(clothItem);
    });
    container2.appendChild(fragment);
}
