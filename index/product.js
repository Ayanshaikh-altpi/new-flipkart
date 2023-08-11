const container = document.querySelector(".products");
const cats = document.querySelector("#cats");
let itemArray = [];

// const value = window.location.href.split("?")[1].split("=")[1];
const value = window.location.href.split("?")[1].split("-")[1];

async function fetchAll() {
    const res = await fetch("./item.json");
    const data = await res.json();
    const all = [...data.watch, ...data.cloth];
    listItem(all);
    // all.style.color = "#2874f0";
}
fetchAll();

async function fetchWatch() {
    const res = await fetch("./item.json");
    const data = await res.json();
    listItem(data.watch);
    // watch.style.color = "#2874f0";
}

async function fetchCloth() {
    const res = await fetch("./item.json");
    const data = await res.json();
    listItem(data.cloth);
    // cloth.style.color = "#2874f0";
}
if (value === "cloth") {
    fetchCloth();
} else if (value === "watch") {
    fetchWatch();
} else {
    fetchAll();
}
const watch = document.querySelector(".watch");
const cloth = document.querySelector(".cloth");
const all = document.querySelector(".all");

let fragment;
function listItem(data) {
    const fragment = document.createDocumentFragment();
    container.innerHTML = "";
    data?.forEach((item) => {
        const watchItem = document.createElement("div");
        watchItem.classList.add("watch_item");
        watchItem.innerHTML = `
        <div class="product">
        <img
            src="${item.image}"
            alt=""
        />
        <span class="name">${item.name}</span>
        <span class="price">Price:$${item.price}</span>
   
        </div>
        `;
        fragment.appendChild(watchItem);
    });
    container.appendChild(fragment);
}

watch.addEventListener("click", fetchWatch);
cloth.addEventListener("click", fetchCloth);
all.addEventListener("click", fetchAll);
