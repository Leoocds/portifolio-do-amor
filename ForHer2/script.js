const images = document.querySelectorAll(".carousel img");
const message = document.querySelector(".message");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-end-button");

let currentImageIndex = 0;

const messages = [
  "Essa é minha namorada Clara, a mulher mais gata que já vi. É incrível quanto o sorriso dela é radiante, como o cabelo é lindo, e como seus olhos são brilhantes.",
  "Essa daí é minha sogra e ela, e eu acredito que se algum artista fosse ter inveja de outro artista seria da dona Izabella, porque a obra que essa mulher fez é de outro nível. O jeitinho dela é incomparável, eu amo o modo como ela age, amo a maturidade que ela tem, amo quando ela fala, amo quando ela sorri, amo cada 'te amo' que ela me diz, amo poder lutar por ela, amo o quanto ela luta por mim, amo quando ela conversa comigo e me ajuda, amo quando ela me faz sorrir, amo poder vê-la feliz. <p>Quando eu não tinha ninguém do lado, era ela quem estava aqui. Pode ser que muitas pessoas tenham saído da vida dela, mas eu acredito muito que essas pessoas que foram embora, são as que não merecem essa pessoa tão fantástica do lado, todavia eu sempre irei valorizar a presença dela aqui.",
  "Eu mesmo pergunto a mim mesmo se eu sou realmente o cara pra essa mulher espetacular, ela é diferente, ela é como nenhuma outra é, ela tem algo que ninguém vai ter, e eu me apaixono a cada dia mais por ela. <p>Ela sempre me diz que eu faço de tudo por ela, sendo que eu só faço o mínimo pra poder ver ela feliz, eu posso comprar quantos ingressos for do show do Jão, quantos ingressos for do Imagine Dragons, posso levá-la para ver Harry Styles e seus tantos outros cantores, posso dar todos os livros que ela ama ler, posso dar quantas pelúcias forem do Bob Esponja, que ainda não vai ser suficiente pro que essa mulher é.</p> <p>Eu nem sei se eu serei o cara que ficará com ela pelo resto da vida, mas se eu não for eu gostaria que os próximos dêem a ela muito mais do que ela merece, porque o máximo ainda é pouco.",
  "Nessa foto é ela e o Onofre, sim, ela estuda farmácia, e eu faria de tudo pra poder ver ela de jaleco, com seu nome escrito e embaixo escrito 'Farmácia', mesmo que ela não esteja ligando tando para o curso. Mas se tem alguém além da família dela que deseja ver essa garota conquistando um diploma, esse alguém sou eu. <p>Eu vi ela tentar, e, passar nas faculdades que ela queria, torci tanto por ela que até chorei de felicidade, mesmo que a vida não quis que ela seguisse, eu sei o quanto ela é capaz de conseguir o que ela quer novamente.",
  "Aí está ela no show dos sonhos, com uma galera, eu não estou nessa foto, gostaria, pois poderia vê-la sorrindo enquanto conquistava um de seus desejos, mas mesmo não estando eu já fico super feliz de saber que ela foi e pode ver eles cantando. <p>Lembro o perrengue que foi e que ela nem imaginava que iria nesse show, mas de última hora sua melhor amiga mudou tudo, e eu com certeza não deixaria de ajuda-la, pois a cada dia luto mais pra poder tirar um sorriso perfeito desse rosto esbelto, sendo com o ingresso de um show, ou fazendo piadas idiotas, pois ela é incrível. E se depender de mim, ela irá em todos shows que ela quiser.",
  "Aqui está a garota que ama uma praia até em dias chuvosos, gosta de química e ama azul. Eu faria o que fosse pra poder te-la perto de mim, mas mesmo não tendo, cuido dela como uma pedra preciosa. <p>Quero poder ver essa garota feliz, e quando ela não estiver eu quero poder ajuda-la para que a tristeza vá embora. Com certeza irei amá-la o máximo que eu puder, farei de tudo por ela, arrancarei pedaços e o que for, porque essa garota é bem mais que especial pra mim, que póssamos viver momentos malucos, adotar diversos dogs pelas ruas, ficar na praia do nascer do amanhecer até o final de tarde ouvindo musica, eu não sei o que poderemos fazer, mas o que eu puder fazer contigo eu quero. <p>Saiba que eu posso te elogiar o quanto for que ainda não conseguirei te definir, eu amo seus defeitos, amo seu sorriso, amo seu olho, sua boca, sua orelha, seu cabelo, sua bochecha, amo seu rosto por completo, amo o quanto você é gostosa, amo você por inteira e amarei cada dia mais. Eu quero você do meu lado o tempo que eu puder, você é íncrivel. Eu te amo! ❤️"
];

function updateCarousel() {
  images.forEach((img) => (img.style.display = "none"));

  images[currentImageIndex].style.display = "block";

  if (currentImageIndex === 4) {
    message.style.display = "block"; 
    message.innerHTML = messages[currentImageIndex];
  } else {
    message.style.display = "none"; 
  }
}

prevButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel();
});

updateCarousel();
