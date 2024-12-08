const compliments = [
    "Nos meus dias cinzas, você deixa tudo mais colorido!",
    "Canetei seu sorriso em uma linha e a folha se apaixonou.",
    "Você é literalmente como a lua, porque eu amo todas suas fases.",
    "Ganhei o mundo quando comecei a namorar com você.",
    "Assim como jão irei te amar como um idiota ama.",
    "Sua inteligência é inspiradora.",
    "Qualquer lugar fica melhor quando você tá nele.",
    "Diante da lua brilhante, lembro do seu sorriso, brilhante, vivo, radiante e que ilumina a escuridão.",
    "Você é a resposta para todas perguntas de amor e felicidade.",
    "Tipo Sol e Lua, separados pela distância e conectados pelo amor.",
    "I get so lost inside your eyes",
    {
        spotify: "https://open.spotify.com/embed/track/5Q7zuH8VNu7aLappSusPu6?utm_source=generator"
    },
    {
        spotify: "https://open.spotify.com/embed/track/2L2mM3rEO3arNIMQnb3dou?utm_source=generator"
    }
];

const complimentElement = document.getElementById("compliment");
const complimentImageElement = document.getElementById("complimentImage");
const generateButton = document.getElementById("generateButton");
const spotifyPlayerContainer = document.getElementById("spotifyPlayer");

generateButton.addEventListener("click", () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    if (typeof randomCompliment === "object" && randomCompliment.spotify) {
        complimentElement.textContent = "";
        complimentImageElement.style.display = "none"; 
        spotifyPlayerContainer.innerHTML = `
            <iframe src="${randomCompliment.spotify}" 
                    width="300" 
                    height="80" 
                    frameborder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media">
            </iframe>`;
        spotifyPlayerContainer.style.display = "block"; 
    } else {
        complimentElement.textContent = randomCompliment; 
        complimentImageElement.style.display = "none"; 
        spotifyPlayerContainer.style.display = "none"; 
    }
});
