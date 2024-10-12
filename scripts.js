// i didn't want to rewrite the whole js file, so i'm gonna just remove stuff like the tab system later.
// i also removed some of the footer text about the windows OOBE, since it wasn't even remotely funny.

document.addEventListener('DOMContentLoaded', function() {
    // Open the "info" tab by default
    openTab(null, 'info');
    //stuff for randomized footer
    var messages = [
        { text: "note: near a tree by a river, there's a hole in the ground..." },
        { text: "note: :3" },
        { text: ":)", url: "/media/mystery.mp4" },
        { text: "note: yeah i know that the github button isn't aligned, i'll fix it later. update: fixed." },
        { text: "tip: did you know? refreshing this site changes this text." },
        { text: "tip: don't mine at night" , url: "https://www.youtube.com/watch?v=X_XGxzMrq04"},
        { text: "note: well here we are again, it's always such a pleasure..." },
        { text: "note: huge success" },
        { text: "note: i'd just like to interject for a moment...", url: "/extras/stallman.html" },
        { text: "note: sometimes it's ok to just guhhhhh" },
        { text: "note: in soviet russia, arch installs you." },
        { text: "note: ¯\\_(ツ)_/¯" },
        { text: "purchase your tracks today", url: "https://www.youtube.com/watch?v=vr2ays5a-Rc.mp4"},
        { text: "99 DAWWllers", url: "https://www.youtube.com/watch?v=vZOu7zhxGeI"},
        { text: "100 sachne 80", url: "https://www.youtube.com/watch?v=R-v2Ao8h8Tw"},
        { text: "note: i had to rewrite this whole mess since i didn't understand my own codebase" },
        { text: "note: next time i'll commenmt more" },
        { text: "note: some of the quotes here were stolen from the loadingquotes vencord plugin (sorry)" },
        { text: "thinking of a funny quote..." },
        { text: "welcome to nginx!" },
        { text: "�(repeat like 30 times)" },
        { text: "note: i'm not a cat.. or am i?", url: "https://www.youtube.com/watch?v=32EJg8lqJgQ" },
        // holy shit copilot suggested the message above ... and i added the "or am i" part
        { text: "i don't remember this being in the ost", url: "https://www.youtube.com/watch?v=rGITOAjbABc" },
        { text: "one, two, uhhh... i forgot, 4...", url: "https://www.youtube.com/watch?v=jpw2ebhTSKs"},
        { text: "why did i even put this in?", url: "https://www.youtube.com/watch?v=WHkewGc9n58"},
        { text: "O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A-JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA", url: "https://www.youtube.com/watch?v=h-mUGj41hWA" },


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
randomlinks[11] = "https://www.youtube.com/watch?v=FmW6RNT2jCs";
randomlinks[12] = "https://www.youtube.com/watch?v=W_qNvDLDHd0";

function randomlink() {
    console.log("randomizing link for music...")
    window.open(randomlinks[Math.floor(Math.random() * randomlinks.length)]);
}

console.error("you nosy little shit, now close the console! >:3")
// LMAOOOO I MADE A SPELLING MISTAKE AND ONLY NOW NOTICED IT

function showSection(sectionId, element) {
    var sections = document.querySelectorAll('.main');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    var tabs = document.querySelectorAll('.tab-bar a');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });
    element.classList.add('active-tab');
}