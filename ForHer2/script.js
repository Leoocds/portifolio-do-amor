const audioElement = document.getElementById('background-music');
let currentImage = 0;
const images = document.querySelectorAll(".carousel img");
const message = document.querySelector(".message");
const prevButton = document.getElementById("prev-button");
const nextEndButton = document.getElementById("next-end-button");
let presentationFinished = false;

audioElement.volume = 0.02;

function toggleNextAndEndButtons() {
    if (currentImage === images.length - 1) {
        nextEndButton.textContent = '❤️';
    } else {
        nextEndButton.textContent = 'Próxima';
    }
}

function changeImage(index) {
    currentImage = index;

    images.forEach(image => image.style.display = "none");
    images[index].style.display = 'block';

    message.classList.remove('message-photo5');  

    switch (index) {
        case 0:
            message.innerHTML =
              "Essa é minha namorada Clara, a mulher mais gata que já vi. É incrível quanto o sorriso dela é radiante, como o cabelo é lindo, e como seus olhos são brilhantes.";
            break;
        case 1:
            message.innerHTML =
              "Essa daí é minha sogra e ela, e eu acredito que se algum artista fosse ter inveja de outro artista seria da dona Izabella, porque a obra que essa mulher fez é de outro nível. O jeitinho dela é incomparável, eu amo o modo como ela age, amo a maturidade que ela tem, amo quando ela fala, amo quando ela sorri, amo cada 'te amo' que ela me diz, amo poder lutar por ela, amo o quanto ela luta por mim, amo quando ela conversa comigo e me ajuda, amo quando ela me faz sorrir, amo poder vê-la feliz.";
            break;
        case 2:
            message.innerHTML =
              "Eu mesmo pergunto a mim mesmo se eu sou realmente o cara pra essa mulher espetacular, ela é diferente, ela é como nenhuma outra é, ela tem algo que ninguém vai ter, e eu me apaixono a cada dia mais por ela.";
            break;
        case 3:
            message.innerHTML =
              "Nessa foto é ela e o Onofre, sim, ela estuda farmácia, e eu faria de tudo pra poder ver ela de jaleco, com seu nome escrito e embaixo escrito 'Farmácia'. Mas se tem alguém além da família dela que deseja ver essa garota conquistando um diploma, esse alguém sou eu.";
            break;
        case 4:
            message.innerHTML =
              "Aí está ela no show dos sonhos, com uma galera, eu não estou nessa foto, gostaria, pois poderia vê-la sorrindo enquanto conquistava um de seus desejos, mas mesmo não estando eu já fico super feliz de saber que ela foi e pode ver eles cantando.";
            break;
        case 5:
            message.innerHTML =
              "Aqui está a garota que ama uma praia até em dias chuvosos, gosta de química e ama azul. Eu faria o que fosse pra poder te-la perto de mim, mas mesmo não tendo, cuido dela como uma pedra preciosa."; 
            break;
    }

    toggleNextAndEndButtons();
}

changeImage(currentImage);

prevButton.addEventListener("click", () => {
    let newIndex = (currentImage - 1 + images.length) % images.length;
    changeImage(newIndex);
});

nextEndButton.addEventListener('click', () => {
    if (presentationFinished) {
        return;
    }
    if (currentImage === images.length - 1) {
        presentationFinished = true;
        message.innerHTML = "Made by @me with love for her";
        removeLastImage();
        hideButtons();
    } else {
        let newIndex = (currentImage + 1) % images.length;
        changeImage(newIndex);
    }
});

function removeLastImage() {
    if (images.length > 0) {
        const lastImage = images[images.length - 1];
        lastImage.parentNode.removeChild(lastImage);
    }
}

function hideButtons() {
    prevButton.classList.add('hidden');
    nextEndButton.classList.add('hidden');
}

