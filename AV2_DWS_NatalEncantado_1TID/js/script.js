
/*  1. MENU PARA CELULARES*/

// Busca o botão que abre e fecha o menu
const botaoMenu = document.getElementById("botao-menu");

// Busca a área que contém os links do menu
const menu = document.getElementById("menu");

// Verifica se esses elementos existem nesta página
if (botaoMenu && menu) {

    // Executa esta função quando o botão for clicado
    botaoMenu.addEventListener("click", function () {

        // Adiciona ou remove a classe que mostra o menu
        const menuAberto = menu.classList.toggle("aberto");

        // Atualiza a informação de acessibilidade do botão
        botaoMenu.setAttribute("aria-expanded", menuAberto);

        // Troca o símbolo conforme o menu está aberto ou fechado
        botaoMenu.textContent = menuAberto ? "×" : "☰";
    });

    // Fecha o menu depois que o usuário escolhe uma página
    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("aberto");

            botaoMenu.setAttribute("aria-expanded", "false");

            botaoMenu.textContent = "☰";
        });
    });
}

// 2. PRODUTOS EM DESTAQUE

// Seleciona o espaço onde os produtos serão mostrados
const areaDestaques = document.getElementById("produtos-destaque");

// Lista inicial de produtos da loja
const produtosDestaque = [
    {
        nome: "Árvore de Natal",
        categoria: "Decoração",
        descricao: "Uma árvore para decorar sua casa.",
        preco: 189.90,
        imagem: "img/arvore-produto.png"
    },
    {
        nome: "Presente Especial",
        categoria: "Presentes",
        descricao: "Um presente para surpreender alguém.",
        preco: 79.90,
        imagem: "img/presente.png" 
    },
    {
        nome: "Enfeites Natalinos",
        categoria: "Enfeites",
        descricao: "Pequenos detalhes cheios de encanto.",
        preco: 39.90,
        imagem: "img/decoracoes.png"
    }
    

];

// Formata um número como preço em reais
function formatarPreco(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Cria os cartões dos produtos na página
function mostrarDestaques() {

    // Se a página não tiver a área de produtos, encerra a função
    if (!areaDestaques) {
        return;
    }

    // Limpa o espaço antes de inserir os cartões
    areaDestaques.innerHTML = "";

    // Percorre cada produto da lista
    produtosDestaque.forEach(function (produto) {

        // Cria um cartão para o produto
        const cartao = document.createElement("article");

        cartao.className = "cartao-produto";

        // Cria a imagem do produto
        const imagem = document.createElement("img");

        imagem.className = "imagem-produto";
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;
        imagem.loading = "lazy";

        // Cria a área das informações
        const informacoes = document.createElement("div");

        informacoes.className = "info-produto";

        // Insere categoria, nome, descrição e preço
        informacoes.innerHTML = `
            <span class="categoria-produto">${produto.categoria}</span>
            <h3>${produto.nome}</h3>
            <p class="descricao-produto">${produto.descricao}</p>
            <span class="preco-produto">${formatarPreco(produto.preco)}</span>
            <a class="botao-adicionar" href="produtos.html">
                Ver produto
            </a>
        `;

        // Junta a imagem e as informações no cartão
        cartao.appendChild(imagem);
        cartao.appendChild(informacoes);

        // Adiciona o cartão na grade da página
        areaDestaques.appendChild(cartao);
    });
}

// Executa a função para mostrar os produtos
mostrarDestaques();

/* =========================================
   3. AMPLIAR IMAGENS DA GALERIA
   ========================================= */

// Procura todas as imagens que estão na galeria.
const imagensGaleria = document.querySelectorAll(".grade-galeria img");

// Adiciona um evento de clique em cada imagem.
imagensGaleria.forEach(function (imagem) {

    imagem.addEventListener("click", function () {

        // Cria a camada escura da visualização.
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";

        // Cria uma cópia da imagem escolhida.
        const imagemAmpliada = document.createElement("img");
        imagemAmpliada.src = imagem.src;
        imagemAmpliada.alt = imagem.alt;

        // Cria o botão de fechar.
        const botaoFechar = document.createElement("button");
        botaoFechar.textContent = "×";
        botaoFechar.setAttribute("aria-label", "Fechar imagem");

        // Fecha a visualização quando o botão for clicado.
        botaoFechar.addEventListener("click", function () {
            lightbox.remove();
        });

        // Também fecha quando o fundo escuro for clicado.
        lightbox.addEventListener("click", function (evento) {
            if (evento.target === lightbox) {
                lightbox.remove();
            }
        });

        // Fecha a visualização ao pressionar Escape.
        function fecharComEscape(evento) {
            if (evento.key === "Escape") {
                lightbox.remove();
                document.removeEventListener("keydown", fecharComEscape);
            }
        }

        document.addEventListener("keydown", fecharComEscape);

        // Junta os elementos e mostra a camada.
        lightbox.append(imagemAmpliada, botaoFechar);
        document.body.appendChild(lightbox);
    });
});

/* =========================================
   4. FORMULÁRIO DE CONTATO (com validação)
   ========================================= */

// Procura o formulário e o espaço para a resposta.
const formularioContato = document.getElementById("form-contato");
const retornoContato = document.getElementById("retorno-contato");

// Só configura o formulário se ele existir na página atual.
if (formularioContato && retornoContato) {

    formularioContato.addEventListener("submit", function (evento) {

        // Impede o navegador de recarregar a página.
        evento.preventDefault();

        // Lê os campos preenchidos pelo visitante.
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value.trim();

        // Expressão que confere o formato nome@dominio.com
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        // Mostra uma mensagem de erro (vermelha) ou de sucesso (verde).
        function mostrar(texto, erro) {
            retornoContato.textContent = texto;
            retornoContato.style.color = erro ? "#9a0d00" : "";
        }

        // Valida um campo por vez e para no primeiro erro.
        if (nome.length < 3) {
            mostrar("Digite seu nome completo (mínimo de 3 letras).", true);
        } else if (!emailValido) {
            mostrar("Digite um e-mail válido, como nome@exemplo.com.", true);
        } else if (assunto === "") {
            mostrar("Escolha um assunto.", true);
        } else if (mensagem.length < 10) {
            mostrar("Escreva uma mensagem com pelo menos 10 letras.", true);
        } else {
            mostrar("Obrigado pela mensagem, " + nome + "! Responderemos em breve.", false);
            formularioContato.reset();
        }
    });
}

/* =========================================
   5. SLIDESHOW / CARROSSEL (Home)
   ========================================= */

const slides = document.querySelectorAll("#slideshow .slide");
const areaIndicadores = document.getElementById("indicadores");

if (slides.length > 0) {

    let slideAtual = 0;
    let temporizador;

    // Cria uma bolinha (botão) para cada slide.
    const bolinhas = [];
    slides.forEach(function (slide, indice) {
        const bolinha = document.createElement("button");
        bolinha.setAttribute("aria-label", "Ir para o slide " + (indice + 1));
        bolinha.addEventListener("click", function () {
            mostrarSlide(indice);
            reiniciarTemporizador();
        });
        areaIndicadores.appendChild(bolinha);
        bolinhas.push(bolinha);
    });

    // Mostra o slide pedido; volta ao início/fim com o operador %.
    function mostrarSlide(indice) {
        slides[slideAtual].classList.remove("ativo");
        bolinhas[slideAtual].classList.remove("ativo");

        slideAtual = (indice + slides.length) % slides.length;

        slides[slideAtual].classList.add("ativo");
        bolinhas[slideAtual].classList.add("ativo");
    }

    // Troca automática a cada 5 segundos.
    function reiniciarTemporizador() {
        clearInterval(temporizador);
        temporizador = setInterval(function () {
            mostrarSlide(slideAtual + 1);
        }, 5000);
    }

    document.getElementById("proximo").addEventListener("click", function () {
        mostrarSlide(slideAtual + 1);
        reiniciarTemporizador();
    });

    document.getElementById("anterior").addEventListener("click", function () {
        mostrarSlide(slideAtual - 1);
        reiniciarTemporizador();
    });

    mostrarSlide(0);
    reiniciarTemporizador();
}

/* =========================================
   6. PARALLAX (Home)
   ========================================= */

const secaoParallax = document.getElementById("parallax");
const camadasParallax = document.querySelectorAll("[data-velocidade]");

if (secaoParallax && camadasParallax.length > 0) {

    function moverCamadas() {

        // Posição da seção em relação ao topo da tela.
        const posicao = secaoParallax.getBoundingClientRect().top;

        // Cada camada anda uma fração diferente da rolagem.
        camadasParallax.forEach(function (camada) {
            const velocidade = parseFloat(camada.dataset.velocidade);
            camada.style.transform =
                "translateY(" + (-posicao * velocidade) + "px)";
        });
    }

    window.addEventListener("scroll", moverCamadas, { passive: true });
    moverCamadas();
}

/* =========================================
   7. SONS (música de fundo e sininho)
   Os sons são gerados pelo navegador (Web Audio API),
   por isso não precisam de arquivos de áudio.
   ========================================= */

let contextoAudio = null;
let musicaTocando = false;
let temporizadorMusica = null;

// Cria o contexto de áudio só depois de um clique do usuário.
function obterAudio() {
    if (!contextoAudio) {
        const Contexto = window.AudioContext || window.webkitAudioContext;
        if (!Contexto) {
            return null;
        }
        contextoAudio = new Contexto();
    }
    if (contextoAudio.state === "suspended") {
        contextoAudio.resume();
    }
    return contextoAudio;
}

// Toca uma nota curta (frequência em Hz, duração e volume em segundos/0-1).
function tocarNota(frequencia, duracao, volume) {

    const audio = obterAudio();
    if (!audio) {
        return;
    }

    const oscilador = audio.createOscillator();
    const ganho = audio.createGain();
    const agora = audio.currentTime;

    oscilador.type = "sine";
    oscilador.frequency.value = frequencia;

    // O volume começa baixo e some devagar, como um sino.
    ganho.gain.setValueAtTime(volume, agora);
    ganho.gain.exponentialRampToValueAtTime(0.0001, agora + duracao);

    oscilador.connect(ganho);
    ganho.connect(audio.destination);

    oscilador.start(agora);
    oscilador.stop(agora + duracao);
}

// Efeito sonoro curtinho (sininho) usado ao adicionar no carrinho.
function tocarSino() {
    tocarNota(1318, 0.9, 0.18);
    setTimeout(function () {
        tocarNota(1760, 0.9, 0.12);
    }, 120);
}

// Melodia natalina de domínio público (Jingle Bells), em volume baixo.
// Cada item: [frequência em Hz, duração em batidas]
const melodia = [
    [659, 1], [659, 1], [659, 2],
    [659, 1], [659, 1], [659, 2],
    [659, 1], [784, 1], [523, 1.5], [587, 0.5], [659, 4],
    [698, 1], [698, 1], [698, 1.5], [698, 0.5],
    [698, 1], [659, 1], [659, 1], [659, 0.5], [659, 0.5],
    [659, 1], [587, 1], [587, 1], [659, 1], [587, 2], [784, 2]
];

// Toca uma nota por vez e agenda a próxima; ao acabar, recomeça.
function tocarMelodia(indice) {

    if (!musicaTocando) {
        return;
    }

    const nota = melodia[indice % melodia.length];
    const duracaoBatida = 0.35;

    tocarNota(nota[0], nota[1] * duracaoBatida * 1.6, 0.07);

    temporizadorMusica = setTimeout(function () {
        tocarMelodia(indice + 1);
    }, nota[1] * duracaoBatida * 1000);
}

const botaoMusica = document.getElementById("btn-musica");

if (botaoMusica) {

    // Volta a tocar se o visitante já tinha ligado nesta sessão.
    botaoMusica.addEventListener("click", function () {

        musicaTocando = !musicaTocando;

        if (musicaTocando) {
            obterAudio();
            tocarMelodia(0);
            botaoMusica.textContent = "🔕 Pausar música";
        } else {
            clearTimeout(temporizadorMusica);
            botaoMusica.textContent = "🔔 Tocar música";
        }

        botaoMusica.setAttribute("aria-pressed", musicaTocando);
    });
}

/* =========================================
   8. EFEITO DE NEVE
   ========================================= */

function criarNeve() {

    // Respeita quem pediu menos movimento no sistema.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const quantidade = 28;

    for (let i = 0; i < quantidade; i++) {

        const floco = document.createElement("span");
        floco.className = "floco";
        floco.textContent = "❄";
        floco.setAttribute("aria-hidden", "true");

        // Posição, tamanho e velocidade aleatórios.
        floco.style.left = Math.random() * 100 + "vw";
        floco.style.fontSize = (10 + Math.random() * 16) + "px";
        floco.style.animationDuration = (8 + Math.random() * 10) + "s";
        floco.style.animationDelay = (-Math.random() * 15) + "s";
        floco.style.opacity = 0.4 + Math.random() * 0.5;

        document.body.appendChild(floco);
    }
}

criarNeve();

/* =========================================
   9. CONTAGEM REGRESSIVA PARA O NATAL
   ========================================= */

const textoContagem = document.getElementById("contagem");

if (textoContagem) {

    function atualizarContagem() {

        const agora = new Date();

        // No JavaScript os meses começam em 0: dezembro é 11.
        let natal = new Date(agora.getFullYear(), 11, 25);

        // Se o Natal deste ano já passou, conta até o do próximo.
        if (agora > natal) {
            natal = new Date(agora.getFullYear() + 1, 11, 25);
        }

        const falta = natal - agora; // diferença em milissegundos

        const dias = Math.floor(falta / (1000 * 60 * 60 * 24));
        const horas = Math.floor(falta / (1000 * 60 * 60)) % 24;
        const minutos = Math.floor(falta / (1000 * 60)) % 60;
        const segundos = Math.floor(falta / 1000) % 60;

        textoContagem.textContent =
            dias + "d " + horas + "h " + minutos + "min " +
            segundos + "s para o Natal";
    }

    atualizarContagem();
    setInterval(atualizarContagem, 1000);
}

/* =========================================
   10. BOTÃO VOLTAR AO TOPO
   ========================================= */

const botaoTopo = document.getElementById("topo");

if (botaoTopo) {

    // Só aparece depois de rolar 400px.
    window.addEventListener("scroll", function () {
        botaoTopo.classList.toggle("visivel", window.scrollY > 400);
    }, { passive: true });

    botaoTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
