const songs = [
    {
        message: "Essa música me lembra de você! ❤️",
        url: "https://open.spotify.com/embed/track/69CbgcOl13AiZs2CbTuBi6?utm_source=generator" 
    },
    {
        message: "Essa música lembra nós dois.👩🏻‍❤️‍👨🏾",
        url: "https://open.spotify.com/embed/track/6hiKXxS7pgPKnKfCU7UJ6O?utm_source=generator"  
    },
    {
        message: "Uma música aleatória.",
        url: "https://open.spotify.com/embed/track/66rhnZizvTv2ufYpyHoWoW?utm_source=generator"
    },
    {
        message: "A música que eu te declararia.❤️‍🩹",
        url: "https://open.spotify.com/embed/track/35lcN4HxxsiwIq6ILSKVSh?utm_source=generator"
    },
    {
        message: "A trilha sonora que eu gostaria que tocasse quando te encontrasse.🎶",
        url: "https://open.spotify.com/embed/track/31VOknKjFrEX47bZXzqcoF?utm_source=generator"
    },
    {
        message: "Uma música que gostaria que cantássemos juntos.🕺🏾💃🏻",
        url: "https://open.spotify.com/embed/track/3EBtHRt4uSSFhNladqH3UP?utm_source=generator"
    }
];

function playSong(index) {
    const player = document.getElementById("musicPlayer");
    const messageElement = document.getElementById("message");

    messageElement.textContent = songs[index].message;
    player.style.display = "block";
    player.src = songs[index].url;
}
