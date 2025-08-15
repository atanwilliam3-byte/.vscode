function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 300);