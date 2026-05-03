document.addEventListener("DOMContentLoaded", function() {
    const inputNome = document.querySelector("#nome");
    const saudacao = document.querySelector("#saudacao");
    const boca = document.querySelector(".boca");
    let mensagemSelecionada = null;

    const mensagensNomeGrande = [
        "🤔 Esse nome é bem comprido!",
        "Esse nome cabe em um RG? 🤔",
        "Que nome ÉPICO!",
        "É o seu nome, não a senha do banco",
        "Nome de Senhor dos Anéis!",
        "Ei, você dormiu em cima do teclado?",
        "Seu nome não cabe no campo! 😱",
        "Será que sobrou alguma letra do alfabeto?",
    ];
  
  inputNome.addEventListener("input", function() {
    if (this.value.trim() === "") {
        saudacao.textContent = "Olá";
    } 
    else if ((this.value.split(" ")[0]).length > 12) {
      if (mensagemSelecionada === null) {
        const indice = Math.floor(Math.random() * mensagensNomeGrande.length);
        mensagemSelecionada = mensagensNomeGrande[indice];
      }
        saudacao.textContent = mensagemSelecionada;
        boca.textContent = "0";
    } 
    else {
        const primeiroNome = this.value.split(" ")[0];
        saudacao.textContent = "Olá, " + primeiroNome;
        boca.textContent = "◡";
        mensagemSelecionada = null;
    }
  });
});