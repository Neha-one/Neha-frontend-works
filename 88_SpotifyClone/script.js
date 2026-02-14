console.log('start javascript..');

async function getsongs() {

    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    // console.log(div);
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return songs;

}
async function main() {
    let songs = await getsongs();
    // console.log(songs);
    let songList = document.querySelector(".songlist").getElementsByTagName("ul")[0]

    for (const song of songs) {
        //  Not reliable: hard-coded Windows path and only replaces "%20"; fails on other OS or encodings.
        // let splitsongURL = song.split("songs%5C")[1].replaceAll("%20", " ")
        //      BETTER-
        // decode - split - pop = clean file name from URL.
        let splitsongURL = decodeURIComponent(song).replaceAll("\\", "/").split("/").pop();
        // console.log(splitsongURL);
        let li = document.createElement("li")
        // li.textContent = splitsongURL;
        li.innerHTML = `
        <img class="invert" src="music.svg" alt="">
        <div class="info">
        <div>${splitsongURL}</div>
        <div>${"neha"}</div>
        </div>
        <div class="playnow">
        <div>Play Now</div>
        <img class="invert" src="playsong.svg " alt="">
        </div>
       `
        songList.appendChild(li);
    }
    //play 1st audio in js:-
    var audio = new Audio(songs[1]);
    // audio.play();


    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(duration);

    })
}
main();