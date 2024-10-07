const mario = document.getElementById("mario")
const flower = document.getElementById("flower")

document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
    if(mario.classList != "jump") {
        mario.classList.add("jump")
    } 
    setTimeout(function() {
        mario.classList.remove("jump")
    }, 350)
}

let isAlive = setInterval ( function() {
    let MarioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let FlowerLeft = parseInt(window.getComputedStyle(flower).getPropertyValue("left"));

    if(FlowerLeft < 50 && FlowerLeft > 0 && MarioTop >= 510) {
        alert("GAME OVER")
    }
}, 10)