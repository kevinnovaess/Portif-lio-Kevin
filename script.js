
let ligado = false;

function mostrarMensagem() {
    
    if (ligado == false) {

    document.getElementById("cargo").innerHTML =
    "🚀 Desenvolvedor Full-Stack em Formação";

    document.getElementById("estudos").innerHTML =
    "🔥 Aprendendo JavaScript na prática!";

    document.body.style.background = "#098efa";

    document.getElementById("nome").style.color = "#ff1919";

    document.getElementById("botao").style.background = "#191dff";

    document.getElementById("botao").style.color = "#faf8f8";

    document.getElementById("botao").innerHTML = "Bem-vindo, Kevin!";

    ligado = true;

}
else {

    document.getElementById("cargo").innerHTML =
    "Desenvolvedor Full-Stack";

    document.getElementById("estudos").innerHTML =
    "💻 Estudando HTML, CSS e JavaScript";

    document.body.style.background = "#081b29";

    document.getElementById("nome").style.color = "#47ff5e";

    document.getElementById("botao").style.background = "#47ff5e";

    document.getElementById("botao").style.color = "#000000";

    document.getElementById("botao").innerHTML = "Ver Portfólio";

    ligado = false;

}
}
    