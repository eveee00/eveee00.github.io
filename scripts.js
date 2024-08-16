console.log("randomizing footer...")
document.addEventListener('DOMContentLoaded', function() {
    var messages = [
        { text: "note: near a tree by a river, there's a hole in the ground..." },
        { text: "note: :3" },
        { text: ":)", url: "/media/mystery.mp4" },
        { text: "note: yeah i know that the github button isn't aligned, i'll fix it later. update: fixed." },
        { text: "tip: did you know? refreshing this site changes this text." },
        { text: "tip: don't mine at night" },
        { text: "note: well here we are again, it's always such a pleasure..." },
        { text: "note: huge success" },
        { text: "note: i'd just like to interject for a moment...", url: "/extras/stallman.html" },
        { text: "note: sometimes it's ok to just guhhhhh" },
        { text: "oobe says: please just log in with a microsoft account i swear we won't track you come on please!!11!1!" },
        { text: "oobe says: what do you mean you have no wifi drivers installed? you need them!" },
        { text: "oobe says: use our shit!" },
        { text: "oobe says: even better, use an online account!" },
        { text: "oobe says: please allow us to auto-import your data into our shitty browser we shove down your throat!" },
        { text: "oobe hates: ~$ oobe\\bypassnro" },
        { text: "note: in soviet russia, arch installs you." },
        { text: "note: ¯\\_(ツ)_/¯" },
        { text: "oobe says: no, we won't give you an option to just skip the m$ account!!" },
    ];

    var randomMessage = messages[Math.floor(Math.random() * messages.length)];

    var footer = document.getElementById('footer');
    footer.innerHTML = '<input class="noteMS" type="image" height="30" width="30" src="/media/music.png" name="B1" onclick="randomlink()"><span class="music-note"></span>';

    if (randomMessage.url) {
        var link = document.createElement('a');
        link.href = randomMessage.url;
        link.textContent = randomMessage.text;
        link.style.color = "white"; // Change the color if needed
        footer.appendChild(link);
    } else {
        footer.appendChild(document.createTextNode(randomMessage.text));
    }
});
var geometryDash = new Audio('/media/gd.mp3');
var randomlinks = [];
randomlinks[0] = "https://www.youtube.com/watch?v=yGZr98GEs0U";
randomlinks[1] = "https://www.youtube.com/watch?v=AS58aeJQI4Y";
randomlinks[2] = "https://www.youtube.com/watch?v=cygu65ytwTc";
randomlinks[3] = "https://www.youtube.com/watch?v=M9J6DKJXoKk";
randomlinks[4] = "https://www.youtube.com/watch?v=20dIl2fl5GM";
randomlinks[5] = "https://www.youtube.com/watch?v=BwUBkKKP27A";
randomlinks[6] = "/media/gd.mp3";
randomlinks[7] = "https://www.youtube.com/watch?v=5kca9KVKy04";
randomlinks[8] = "https://www.youtube.com/watch?v=utP11PQEsZw";
randomlinks[9] = "https://www.youtube.com/watch?v=5BZLz21ZS_Y";
randomlinks[10] = "https://www.youtube.com/watch?v=Si8PyULlt7Q";

function randomlink() {
    console.log("randomizing link for music...")
    window.open(randomlinks[Math.floor(Math.random() * randomlinks.length)]);
}

console.error("you nosy little shit, now close the consloe! >:3")