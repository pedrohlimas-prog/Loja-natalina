
/* =========================================
   1. LISTA DE PRODUTOS
   ========================================= */

// Cada produto possui um código, nome, categoria,
// descrição, preço e endereço de imagem.
const catalogo = [
    {
        id: 1,
        nome: "Árvore de Natal",
        categoria: "Decoração",
        descricao: "Árvore decorativa para sua sala.",
        preco: 189.90,
        imagem: "img/arvore-produto.png"
    },
    {
        id: 2,
        nome: "Caixa de Presente",
        categoria: "Presentes",
        descricao: "Uma embalagem especial para presentear.",
        preco: 29.90,
        imagem: "img/presente.png"
    },
    {
        id: 3,
        nome: "Enfeites Natalinos",
        categoria: "Enfeites",
        descricao: "Enfeites para árvore e decoração.",
        preco: 39.90,
        imagem: "img/decoracoes.png"
    },
    {
        id: 4,
        nome: "Guirlanda Decorativa",
        categoria: "Decoração",
        descricao: "Uma guirlanda para decorar sua porta.",
        preco: 69.90,
        imagem: "img/Guirlanda.png"
    },
    {
        id: 5,
        nome: "Luzes Natalinas",
        categoria: "Iluminação",
        descricao: "Luzes para criar um ambiente acolhedor.",
        preco: 49.90,
        imagem: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        nome: "Presente Dourado",
        categoria: "Presentes",
        descricao: "Uma opção para surpreender alguém.",
        preco: 89.90,
        imagem: "img/presente-dourado.png"
    },
    {
        id: 7,
        nome: "Coroa de Natal",
        categoria: "Decoração",
        descricao: "Coroa de folhagem verde para a porta de entrada.",
        preco: 74.90,
        imagem: "img/coroa.png"
    },
    {
        id: 8,
        nome: "Vaso com Azevinho",
        categoria: "Decoração",
        descricao: "Arranjo de azevinho com bagas vermelhas.",
        preco: 58.90,
        imagem: "img/vaso-azevinho.jpg"
    },
    {
        id: 9,
        nome: "Boneco de Neve Decorativo",
        categoria: "Decoração",
        descricao: "Boneco de neve de tecido para a sala.",
        preco: 45.90,
        imagem: "img/boneco-neve.jpg"
    },
    {
        id: 10,
        nome: "Sino Dourado de Mesa",
        categoria: "Decoração",
        descricao: "Sino de metal dourado com acabamento brilhante.",
        preco: 32.90,
        imagem: "img/sino-dourado.jpg"
    },
    {
        id: 11,
        nome: "Estrela de Natal Luminosa",
        categoria: "Decoração",
        descricao: "Estrela de topo de árvore com brilho suave.",
        preco: 54.90,
        imagem: "img/estrela-luminosa.jpg"
    },
    {
        id: 12,
        nome: "Papai Noel Decorativo",
        categoria: "Decoração",
        descricao: "Figura do Papai Noel em cerâmica pintada à mão.",
        preco: 79.90,
        imagem: "img/papai-noel-decorativo.jpg"
    },
    {
        id: 13,
        nome: "Pinheirinho de Mesa",
        categoria: "Decoração",
        descricao: "Mini pinheiro de 40 cm para a mesa de jantar.",
        preco: 99.90,
        imagem: "img/pinheirinho-mesa.jpg"
    },
    {
        id: 14,
        nome: "Centro de Mesa Natalino",
        categoria: "Decoração",
        descricao: "Vela, pinhas e fita para enfeitar a mesa da ceia.",
        preco: 84.90,
        imagem: "img/centro-mesa.jpg"
    },
    {
        id: 15,
        nome: "Kit Chocolate Natalino",
        categoria: "Presentes",
        descricao: "Trio de barras de chocolate em caixa com laço.",
        preco: 42.90,
        imagem: "img/kit-chocolate.jpg"
    },
    {
        id: 16,
        nome: "Cesta de Natal Completa",
        categoria: "Presentes",
        descricao: "Cesta com vinho, biscoitos e doces típicos.",
        preco: 59.90,
        imagem: "img/cesta-natal.jpg"
    },
    {
        id: 17,
        nome: "Caneca Natalina",
        categoria: "Presentes",
        descricao: "Caneca de cerâmica com estampa natalina.",
        preco: 36.90,
        imagem: "img/caneca-natalina.jpg"
    },
    {
        id: 18,
        nome: "Porta-Retrato Natalino",
        categoria: "Presentes",
        descricao: "Moldura dourada com tema de inverno.",
        preco: 49.90,
        imagem: "img/porta-retrato.jpg"
    },
    {
        id: 19,
        nome: "Vela Aromática de Canela",
        categoria: "Presentes",
        descricao: "Vela de cera de soja com aroma de canela e laranja.",
        preco: 34.90,
        imagem: "img/vela-canela.jpg"
    },
    {
        id: 20,
        nome: "Caixa de Biscoitos Decorados",
        categoria: "Presentes",
        descricao: "Doze biscoitos de gengibre em caixa decorada.",
        preco: 27.90,
        imagem: "img/biscoitos-decorados.jpg"
    },
    {
        id: 21,
        nome: "Pelúcia Rena Rudolf",
        categoria: "Presentes",
        descricao: "Rena de pelúcia macia com nariz vermelho.",
        preco: 59.90,
        imagem: "img/rena-pelucia.jpg"
    },
    {
        id: 22,
        nome: "Meias Natalinas",
        categoria: "Presentes",
        descricao: "Par de meias de lã com estampa de flocos.",
        preco: 24.90,
        imagem: "img/meias-natalinas.jpg"
    },
    {
        id: 23,
        nome: "Kit Bolas de Natal",
        categoria: "Enfeites",
        descricao: "Doze bolas coloridas para árvore, de 6 cm.",
        preco: 49.90,
        imagem: "img/kit-bolas.jpg"
    },
    {
        id: 24,
        nome: "Pingente de Estrela",
        categoria: "Enfeites",
        descricao: "Estrela dourada para pendurar na árvore.",
        preco: 9.90,
        imagem: "img/pingente-estrela.jpg"
    },
    {
        id: 25,
        nome: "Anjo de Vidro",
        categoria: "Enfeites",
        descricao: "Anjinho de vidro soprado com asas douradas.",
        preco: 22.90,
        imagem: "img/anjo-vidro.jpg"
    },
    {
        id: 26,
        nome: "Fita de Veludo Vermelha",
        categoria: "Enfeites",
        descricao: "Rolo de 3 metros de fita para laços e árvore.",
        preco: 14.90,
        imagem: "img/fita-veludo.jpg"
    },
    {
        id: 27,
        nome: "Flocos de Neve Decorativos",
        categoria: "Enfeites",
        descricao: "Conjunto de flocos de acrílico para pendurar.",
        preco: 18.90,
        imagem: "img/flocos-neve.jpg"
    },
    {
        id: 28,
        nome: "Pinha Dourada",
        categoria: "Enfeites",
        descricao: "Pinha pintada de dourado para compor a árvore.",
        preco: 12.90,
        imagem: "img/pinha-dourada.jpg"
    },
    {
        id: 29,
        nome: "Laço Vermelho Grande",
        categoria: "Enfeites",
        descricao: "Laço de tecido para a porta ou para a árvore.",
        preco: 16.90,
        imagem: "img/laco-vermelho.jpg"
    },
    {
        id: 30,
        nome: "Renas de Madeira",
        categoria: "Enfeites",
        descricao: "Par de renas de madeira para a mesa ou a lareira.",
        preco: 99.90,
        imagem: "img/renas-madeira.jpg"
    },
    {
        id: 31,
        nome: "Sino de Metal Pendurado",
        categoria: "Enfeites",
        descricao: "Sininho com laço vermelho para a porta.",
        preco: 11.90,
        imagem: "img/sino-metal.jpg"
    },
    {
        id: 32,
        nome: "Pisca-Pisca de Estrela",
        categoria: "Iluminação",
        descricao: "Fio de luzes em formato de estrelas, bivolt.",
        preco: 44.90,
        imagem: "img/pisca-estrela.jpg"
    },
    {
        id: 33,
        nome: "Vela LED Natalina",
        categoria: "Iluminação",
        descricao: "Vela sem chama com bateria e temporizador.",
        preco: 29.90,
        imagem: "img/vela-led.jpg"
    },
    {
        id: 34,
        nome: "Lanterna Natalina",
        categoria: "Iluminação",
        descricao: "Lanterna de metal com luz quente para a varanda.",
        preco: 69.90,
        imagem: "img/lanterna-natalina.jpg"
    },
    {
        id: 35,
        nome: "Cortina de Luzes",
        categoria: "Iluminação",
        descricao: "Cortina de luzes brancas com 3 metros de altura.",
        preco: 119.90,
        imagem: "img/cortina-luzes.jpg"
    },
    {
        id: 36,
        nome: "Painel de Luzes Neve",
        categoria: "Iluminação",
        descricao: "Painel de LED com efeito de neve caindo.",
        preco: 149.90,
        imagem: "img/painel-neve.jpg"
    },
    {
        id: 37,
        nome: "Lâmpada Vintage Natalina",
        categoria: "Iluminação",
        descricao: "Lâmpada de filamento com luz âmbar.",
        preco: 26.90,
        imagem: "img/lampada-vintage.jpg"
    },
    {
        id: 38,
        nome: "Fio de Luz Vermelho",
        categoria: "Iluminação",
        descricao: "Fio de luz vermelha com 10 metros.",
        preco: 54.90,
        imagem: "img/fio-luz-vermelho.jpg"
    },
    {
        id: 39,
        nome: "Lamparina Dourada",
        categoria: "Iluminação",
        descricao: "Lamparina de vidro com acabamento dourado.",
        preco: 62.90,
        imagem: "img/lamparina-dourada.jpg"
    },
    {
        id: 40,
        nome: "Projetor de Estrelas",
        categoria: "Iluminação",
        descricao: "Projetor que cria um céu estrelado na parede.",
        preco: 129.90,
        imagem: "img/projetor-estrelas.jpg"
    },
    {
        id: 41,
        nome: "Cartão de Natal Vermelho",
        categoria: "Embalagens e cartões",
        descricao: "Cartão dobrável com envelope e mensagem impressa.",
        preco: 8.90,
        imagem: "img/cartao-vermelho.jpg"
    },
    {
        id: 42,
        nome: "Cartão Dourado de Boas Festas",
        categoria: "Embalagens e cartões",
        descricao: "Cartão com detalhes dourados em relevo.",
        preco: 11.90,
        imagem: "img/cartao-dourado.jpg"
    },
    {
        id: 43,
        nome: "Tags de Presente Natalinas",
        categoria: "Embalagens e cartões",
        descricao: "Pacote com 20 etiquetas para presentes.",
        preco: 9.90,
        imagem: "img/tags-presente.jpg"
    },
    {
        id: 44,
        nome: "Papel de Presente Natalino",
        categoria: "Embalagens e cartões",
        descricao: "Rolo de papel com estampa de pinheiros.",
        preco: 19.90,
        imagem: "img/papel-presente.jpg"
    },
    {
        id: 45,
        nome: "Laço Dourado Autoadesivo",
        categoria: "Embalagens e cartões",
        descricao: "Laço pronto para colar na embalagem.",
        preco: 6.90,
        imagem: "img/laco-dourado.jpg"
    },
    {
        id: 46,
        nome: "Caixa Cilíndrica Natalina",
        categoria: "Embalagens e cartões",
        descricao: "Caixa redonda com tampa para presentes pequenos.",
        preco: 15.90,
        imagem: "img/caixa-cilindrica.jpg"
    },
    {
        id: 47,
        nome: "Sacola Natalina Grande",
        categoria: "Embalagens e cartões",
        descricao: "Sacola de papel reforçada com alça de fita.",
        preco: 12.90,
        imagem: "img/sacola-natalina.jpg"
    },
    {
        id: 48,
        nome: "Etiquetas Decorativas",
        categoria: "Embalagens e cartões",
        descricao: "Adesivos redondos com temas de inverno.",
        preco: 7.90,
        imagem: "img/etiquetas-decorativas.jpg"
    },
    {
        id: 49,
        nome: "Envelope Natalino",
        categoria: "Embalagens e cartões",
        descricao: "Envelope de papel kraft com selo de árvore.",
        preco: 4.90,
        imagem: "img/envelope-natalino.jpg"
    },
    {
        id: 50,
        nome: "Fita Adesiva Natalina",
        categoria: "Embalagens e cartões",
        descricao: "Fita decorativa com estampa de bonecos de neve.",
        preco: 8.50,
        imagem: "img/fita-adesiva.jpg"
    }
];

/* =========================================
   2. ELEMENTOS DA PÁGINA
   ========================================= */

// Busca os campos de pesquisa e os espaços de resultado.
const listaProdutos = document.getElementById("lista-produtos");
const buscaProduto = document.getElementById("busca-produto");
const filtroCategoria = document.getElementById("filtro-categoria");
const ordenacao = document.getElementById("ordenacao");
const totalProdutos = document.getElementById("total-produtos");

// Elementos do carrinho.
const itensCarrinho = document.getElementById("itens-carrinho");
const totalCarrinho = document.getElementById("total-carrinho");
const quantidadeCarrinho = document.getElementById("quantidade-carrinho");
const limparCarrinho = document.getElementById("limpar-carrinho");
const mensagemCarrinho = document.getElementById("mensagem-carrinho");

// Converte um número em um preço no formato brasileiro.
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

/* =========================================
   3. FILTRAR E MOSTRAR OS PRODUTOS
   ========================================= */

function mostrarProdutos() {

    // Esta função só precisa executar na página de produtos.
    if (!listaProdutos) {
        return;
    }

    // Lê o que o usuário digitou na busca.
    const textoBusca = buscaProduto.value.toLowerCase().trim();

    // Lê a categoria selecionada.
    const categoriaSelecionada = filtroCategoria.value;

    // Cria uma cópia da lista original para poder ordenar.
    let produtosFiltrados = catalogo.filter(function (produto) {

        const nomeCombina = produto.nome.toLowerCase().includes(textoBusca);

        const categoriaCombina =
            categoriaSelecionada === "todos" ||
            produto.categoria === categoriaSelecionada;

        return nomeCombina && categoriaCombina;
    });

    // Ordena os resultados conforme a opção escolhida.
    if (ordenacao.value === "menor") {
        produtosFiltrados.sort(function (a, b) {
            return a.preco - b.preco;
        });
    }

    if (ordenacao.value === "maior") {
        produtosFiltrados.sort(function (a, b) {
            return b.preco - a.preco;
        });
    }

    if (ordenacao.value === "nome") {
        produtosFiltrados.sort(function (a, b) {
            return a.nome.localeCompare(b.nome, "pt-BR");
        });
    }

    // Limpa os cartões antigos antes de mostrar os novos.
    listaProdutos.innerHTML = "";

    // Atualiza o número de resultados.
    totalProdutos.textContent =
        "Mostrando " + produtosFiltrados.length + " de " + catalogo.length + " produtos.";

    // Informa quando a busca não encontra nenhum produto.
    if (produtosFiltrados.length === 0) {
        listaProdutos.innerHTML =
            '<p class="aviso-vazio">Nenhum produto encontrado.</p>';
        return;
    }

    // Cria um cartão para cada produto encontrado.
    produtosFiltrados.forEach(function (produto) {

        const cartao = document.createElement("article");
        cartao.className = "cartao-produto";

        const imagem = document.createElement("img");
        imagem.className = "imagem-produto";
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;
        imagem.loading = "lazy";

        const informacoes = document.createElement("div");
        informacoes.className = "info-produto";

        const categoria = document.createElement("span");
        categoria.className = "categoria-produto";
        categoria.textContent = produto.categoria;

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;

        const descricao = document.createElement("p");
        descricao.className = "descricao-produto";
        descricao.textContent = produto.descricao;

        const preco = document.createElement("span");
        preco.className = "preco-produto";
        preco.textContent = formatarMoeda(produto.preco);

        const botao = document.createElement("button");
        botao.className = "botao-adicionar";
        botao.textContent = "Adicionar ao carrinho";

        // Ao clicar, adiciona o produto selecionado.
        botao.addEventListener("click", function () {
            adicionarAoCarrinho(produto.id);
            if (typeof tocarSino === "function") { tocarSino(); }
        });

        // Organiza as informações dentro do cartão.
        informacoes.append(
            categoria,
            nome,
            descricao,
            preco,
            botao
        );

        cartao.append(imagem, informacoes);

        listaProdutos.appendChild(cartao);
    });
}

/* =========================================
   4. GUARDAR O CARRINHO
   ========================================= */

// Tenta recuperar o carrinho salvo no navegador.
function carregarCarrinho() {

    try {
        const dados = localStorage.getItem("carrinhoNatal");

        return dados ? JSON.parse(dados) : [];
    } catch (erro) {
        return [];
    }
}

// A variável guarda os produtos adicionados pelo usuário.
let carrinho = carregarCarrinho();

// Salva o carrinho no navegador.
function salvarCarrinho() {

    try {
        localStorage.setItem("carrinhoNatal", JSON.stringify(carrinho));
    } catch (erro) {
        console.log("Não foi possível salvar o carrinho.");
    }
}

/* =========================================
   5. ADICIONAR PRODUTOS
   ========================================= */

function adicionarAoCarrinho(idProduto) {

    // Procura o produto escolhido no catálogo.
    const produto = catalogo.find(function (item) {
        return item.id === idProduto;
    });

    // Interrompe se o produto não existir.
    if (!produto) {
        return;
    }

    // Verifica se o produto já está no carrinho.
    const itemExistente = carrinho.find(function (item) {
        return item.id === idProduto;
    });

    if (itemExistente) {

        // Se já estiver, aumenta a quantidade.
        itemExistente.quantidade++;

    } else {

        // Caso contrário, adiciona o produto com quantidade 1.
        carrinho.push({
            id: produto.id,
            quantidade: 1
        });
    }

    salvarCarrinho();
    mostrarCarrinho();

    if (mensagemCarrinho) {
        mensagemCarrinho.textContent =
            produto.nome + " foi adicionado ao carrinho.";
    }
}

/* =========================================
   6. MOSTRAR O CARRINHO
   ========================================= */

function mostrarCarrinho() {

    // Atualiza o carrinho apenas quando seus elementos existem.
    if (!itensCarrinho || !totalCarrinho || !quantidadeCarrinho) {
        return;
    }

    itensCarrinho.innerHTML = "";

    let total = 0;
    let quantidadeTotal = 0;

    // Cria uma linha para cada item.
    carrinho.forEach(function (item) {

        const produto = catalogo.find(function (produtoCatalogo) {
            return produtoCatalogo.id === item.id;
        });

        // Ignora dados inválidos ou produtos removidos do catálogo.
        if (!produto) {
            return;
        }

        const subtotal = produto.preco * item.quantidade;

        total += subtotal;
        quantidadeTotal += item.quantidade;

        const linha = document.createElement("div");
        linha.className = "item-carrinho";

        const nome = document.createElement("p");
        nome.textContent =
            produto.nome + " — " + item.quantidade +
            " unidade(s) — " + formatarMoeda(subtotal);

        const botaoRemover = document.createElement("button");
        botaoRemover.className = "botao-adicionar";
        botaoRemover.textContent = "Remover";

        // Remove este item do carrinho.
        botaoRemover.addEventListener("click", function () {

            carrinho = carrinho.filter(function (outroItem) {
                return outroItem.id !== item.id;
            });

            salvarCarrinho();
            mostrarCarrinho();
        });

        linha.append(nome, botaoRemover);
        itensCarrinho.appendChild(linha);
    });

    // Mostra o total de unidades e o preço final.
    quantidadeCarrinho.textContent = quantidadeTotal;
    totalCarrinho.textContent = formatarMoeda(total);

    // Mensagem para carrinho vazio.
    if (carrinho.length === 0) {
        itensCarrinho.innerHTML =
            '<p class="aviso-vazio">Seu carrinho está vazio.</p>';
    }
}

/* =========================================
   7. LIMPAR O CARRINHO
   ========================================= */

if (limparCarrinho) {

    limparCarrinho.addEventListener("click", function () {

        carrinho = [];

        salvarCarrinho();
        mostrarCarrinho();

        if (mensagemCarrinho) {
            mensagemCarrinho.textContent = "Carrinho limpo.";
        }
    });
}

/* =========================================
   8. LIGAR OS FILTROS
   ========================================= */

// Atualiza os resultados enquanto o usuário digita.
if (buscaProduto) {
    buscaProduto.addEventListener("input", mostrarProdutos);
}

// Atualiza quando a categoria muda.
if (filtroCategoria) {
    filtroCategoria.addEventListener("change", mostrarProdutos);
}

// Atualiza quando a ordenação muda.
if (ordenacao) {
    ordenacao.addEventListener("change", mostrarProdutos);
}

/* =========================================
   9. INICIAR A PÁGINA
   ========================================= */

// Exibe o catálogo e recupera os itens do carrinho.
mostrarProdutos();
mostrarCarrinho();
