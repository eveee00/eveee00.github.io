document.addEventListener('DOMContentLoaded', function() {
    var messages = [
        { text: "note: this site is horribly unfinished." },
        { text: "note: i suck at coding." },
        { text: "note: near a tree by a river, there's a hole in the ground..." },
        { text: "note: :3" },
        { text: ":)", url: "/media/mystery.mp4" },
    ];

    var randomMessage = messages[Math.floor(Math.random() * messages.length)];

    var footer = document.getElementById('footer');
    footer.textContent = '';

    if (randomMessage.url) {
        var link = document.createElement('a');
        link.href = randomMessage.url;
        link.textContent = randomMessage.text;
        link.style.color = "white"; // Change the color if needed
        footer.appendChild(link);
    } else {
        footer.textContent = randomMessage.text;
    }
});
