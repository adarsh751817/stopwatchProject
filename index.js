
let stwtch = document.getElementById("stwtch");


let sec = 0;
let min = 0;
let hrs = 0;
let timer = null;

function mystopwatch() {
    sec = sec + 1;

    if (sec == 60) {
        sec = 0;
        min = min + 1;

    }
    if (min == 60) {

        min = 0

        hrs = hrs + 1;
    }

    let s = sec;
    let m = min;
    let h = hrs;

    if (sec < 10) {
        s = "0" + sec;
    }
    

    if (min < 10) {
        m = "0" + min;
    }
    

    if (hrs < 10) {
        h = "0" + hrs;
    }

    stwtch.innerHTML = h + ":" + m + ":" + s;

}


function startwatch() {

    {


        if (timer !== null) {
            clearInterval(timer);
        }
    }
    timer = setInterval(mystopwatch, 1000);

}

function recetGame() {
    clearInterval(timer);
    hrs = 0;
    min = 0;
    sec = 0;
    stwtch.innerHTML = "00:00:00";
}

function stopgarme() {
    clearInterval(timer);

}