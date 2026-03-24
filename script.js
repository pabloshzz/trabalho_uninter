const botaoMenu = document.getElementById('botaoMenu');
const menu = document.getElementById('menu');
const botaoTema = document.getElementById('botaoTema');
const formContato = document.getElementById('formContato');

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroMensagem = document.getElementById('erroMensagem');
const mensagemSucesso = document.getElementById('mensagemSucesso');

botaoMenu.addEventListener('click', function () {
    menu.classList.toggle('ativo');
});

const botaoTemaMobile = document.getElementById('botaoTemaMobile');
const botoesTema = [botaoTema, botaoTemaMobile].filter(Boolean);

function atualizarBotoesTema(estaEscuro) {
    botoesTema.forEach((botao) => {
        if (estaEscuro) {
            botao.classList.add('ativo');
            botao.setAttribute('aria-label', 'Alternar tema: ligado');
        } else {
            botao.classList.remove('ativo');
            botao.setAttribute('aria-label', 'Alternar tema: desligado');
        }
    });
}

function alternarTema() {
    const estaEscuro = document.body.classList.toggle('tema-escuro');
    atualizarBotoesTema(estaEscuro);
}

botoesTema.forEach((botao) => {
    botao.addEventListener('click', alternarTema);
});

atualizarBotoesTema(document.body.classList.contains('tema-escuro'));

function emailValido(valorEmail) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(valorEmail);
}

formContato.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let formularioValido = true;

    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroMensagem.textContent = '';
    mensagemSucesso.textContent = '';

    if (nome.value.trim() === '') {
        erroNome.textContent = 'Por favor, preencha o nome.';
        formularioValido = false;
    }

    if (email.value.trim() === '') {
        erroEmail.textContent = 'Por favor, preencha o e-mail.';
        formularioValido = false;
    } else if (!emailValido(email.value.trim())) {
        erroEmail.textContent = 'Digite um e-mail válido.';
        formularioValido = false;
    }

    if (mensagem.value.trim() === '') {
        erroMensagem.textContent = 'Por favor, escreva uma mensagem.';
        formularioValido = false;
    }

    if (formularioValido) {
        mensagemSucesso.textContent = 'Mensagem enviada com sucesso!';
        formContato.reset();
    }
});
