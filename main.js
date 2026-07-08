let images = [
    "https://sencanada.ca/media/0a2bdmhv/com_pho_father-of-confederation-charlottetown-conference.jpg",
    "https://d14fiu1i7ba797.cloudfront.net/340x207/media/media/3bac7236-85c5-44fe-8cea-2d0c2948c5df.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPDekk1SSjRb_ZJiF4AyVAdL4xs0hBIhqHQ&s"
];

let texts = [
    "Charlottetown Conference (1864) — First discussions of Confederation.",
    "Quebec Conference (1864) — Leaders created the 72 Resolutions.",
    "Canada 1867 — Confederation officially forms the Dominion of Canada."
];

let index = 0;

function update() {
    document.getElementById("exhibitImage").src = images[index];
    document.getElementById("exhibitText").innerText = texts[index];
}

function next() {
    index = (index + 1) % images.length;
    update();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    update();
}
