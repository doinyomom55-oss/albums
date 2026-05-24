console.log("albums que me gustan mucho");

const albums = document.querySelectorAll(".album");

albums.forEach(album => {
    album.addEventListener("mouseenter", () => {
        album.style.opacity = "0.8";
    });

    album.addEventListener("mouseleave", () => {
        album.style.opacity = "1";
    });
});
```
