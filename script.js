// Lista fixa de nomes
const todosAgentes = ["astra","breach","brimstone","chamber","clove","cypher","deadlock","fade","gekko","harbor","iso","jett","KAYO","killjoy","miks","neon","omen","phoenix","raze","reyna","sage","skye","sova","tejo","veto","viper","vyse","waylay","yoru"];
var agenteFiltrado = []
const gun1 = ["Classic","Shorty","Frenzy","Ghost","Bandit","Sheriff"]
const gun2 = ["Sheriff","Stinger","Spectre","Bucky","Judge","Bulldog","Guardian","Marshal","Outlaw","Ares"]
const gun3 = ["Judge","Guardian","Phantom","Vandal", "Outlaw", "Operator", "Odin"]
const gun4 = ["Phantom","Vandal","Odin", "Operator"]

// vincula no botão
document.getElementById("btnRandomize").addEventListener("click", randomizar);

document.getElementById("btnRandomize2").addEventListener("click", randomizarArma);

document.addEventListener("DOMContentLoaded", () => {
    const btnSettings = document.getElementById("btnSettings");
    const btnCloseSettings = document.getElementById("btnCloseSettings");
    const settingsPanel = document.getElementById("settingsPanel");

    // Elementos do switch
    const toggleOption1 = document.getElementById("toggleOption1");
    const toggleOption2 = document.getElementById("toggleOption2");

    // Abrir a aba lateral
    btnSettings.addEventListener("click", () => {
        settingsPanel.classList.add("open");
    });

    // Fechar a aba lateral
    btnCloseSettings.addEventListener("click", () => {
        settingsPanel.classList.remove("open");
    });


    renderizarAgentes.apply();
    renderizarGridArmas.call();
});

function renderizarAgentes() {
    const container = document.getElementById("AgenteGrid");
    if (!container) return;

    container.innerHTML = ""; // Limpa o container

    todosAgentes.forEach(agente => {
        // Criar o card (label)
        const label = document.createElement("label");
        label.className = "weapon-chip";
        label.title = agente;

        // Criar o input (checkbox)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = agente;
        checkbox.className = "Agente-checkbox";
        checkbox.checked = true; // Controla se inicia ativa ou desligada

        // Criar a imagem da arma
        const img = document.createElement("img");
        img.src = `Randomizer/icons/${agente}.webp`;
        img.alt = agente;

        // Montar a estrutura
        label.appendChild(checkbox);
        label.appendChild(img);
        container.appendChild(label);
    });
}

function renderizarGridArmas() {
    const container1 = document.getElementById("PistolGrid");
    if (!container1) return;

    container1.innerHTML = ""; // Limpa o container

    gun1.forEach(arma => {
        // Criar o card (label)
        const label = document.createElement("label");
        label.className = "weapon-chip";
        label.title = arma;

        // Criar o input (checkbox)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = arma;
        checkbox.className = "Pistol-checkbox";
        checkbox.checked = true; // Controla se inicia ativa ou desligada

        // Criar a imagem da arma
        const img = document.createElement("img");
        img.src = `Randomizer/guns/${arma}.webp`;
        img.alt = arma;

        // Montar a estrutura
        label.appendChild(checkbox);
        label.appendChild(img);
        container1.appendChild(label);
    });

    const container2 = document.getElementById("HalfGrid");
    if (!container2) return;
    container2.innerHTML = ""; // Limpa o container

    gun2.forEach(arma => {
        // Criar o card (label)
        const label = document.createElement("label");
        label.className = "weapon-chip";
        label.title = arma;

        // Criar o input (checkbox)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = arma;
        checkbox.className = "Half-checkbox";
        if (arma !== "Outlaw"){
            checkbox.checked = true; // Controla se inicia ativa ou desligada
        }
        else {
            checkbox.checked = false;
        }

        // Criar a imagem da arma
        const img = document.createElement("img");
        img.src = `Randomizer/guns/${arma}.webp`;
        img.alt = arma;

        // Montar a estrutura
        label.appendChild(checkbox);
        label.appendChild(img);
        container2.appendChild(label);
    });

    const container3 = document.getElementById("FullGrid");
    if (!container3) return;
    container3.innerHTML = ""; // Limpa o container

    gun3.forEach(arma => {
        // Criar o card (label)
        const label = document.createElement("label");
        label.className = "weapon-chip";
        label.title = arma;

        // Criar o input (checkbox)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = arma;
        checkbox.className = "Full-checkbox";

        if (arma !== "Odin" && arma !== "Operator"){
            checkbox.checked = true; // Controla se inicia ativa ou desligada
        }
        else {
            checkbox.checked = false;
        }

        // Criar a imagem da arma
        const img = document.createElement("img");
        img.src = `Randomizer/guns/${arma}.webp`;
        img.alt = arma;

        // Montar a estrutura
        label.appendChild(checkbox);
        label.appendChild(img);
        container3.appendChild(label);
    });

    const container4 = document.getElementById("Full2Grid");
    if (!container4) return;
    container4.innerHTML = ""; // Limpa o container

    gun4.forEach(arma => {
        // Criar o card (label)
        const label = document.createElement("label");
        label.className = "weapon-chip";
        label.title = arma;

        // Criar o input (checkbox)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = arma;
        checkbox.className = "Full2-checkbox";
        if (arma !== "Operator"){
            checkbox.checked = true; // Controla se inicia ativa ou desligada
        }
        else {
            checkbox.checked = false;
        }

        // Criar a imagem da arma
        const img = document.createElement("img");
        img.src = `Randomizer/guns/${arma}.webp`;
        img.alt = arma;

        // Montar a estrutura
        label.appendChild(checkbox);
        label.appendChild(img);
        container4.appendChild(label);
    });
}

// 3. Função para obter apenas as armas que o usuário deixou selecionadas
var pistolSelecionadas = [];
var halfSelecionadas = [];
var fullSelecionadas = [];
var full2Selecionadas = [];

function obterArmasAtivas() {
    pistolSelecionadas = Array.from(document.querySelectorAll(".Pistol-checkbox:checked")).map(cb => cb.value);
    console.log(pistolSelecionadas);
    halfSelecionadas = Array.from(document.querySelectorAll(".Half-checkbox:checked")).map(cb => cb.value);
    console.log(halfSelecionadas);
    fullSelecionadas = Array.from(document.querySelectorAll(".Full-checkbox:checked")).map(cb => cb.value);
    console.log(fullSelecionadas);
    full2Selecionadas = Array.from(document.querySelectorAll(".Full2-checkbox:checked")).map(cb => cb.value);
    console.log(full2Selecionadas);
    agenteFiltrado = Array.from(document.querySelectorAll(".Agente-checkbox:checked")).map(cb => cb.value);
    console.log(agenteFiltrado);
}


function randomizar() {
    obterArmasAtivas.call();
    // randomiza Agente
    const rnAgent = Math.floor(Math.random() * agenteFiltrado.length);
    const nomeSorteado = agenteFiltrado[rnAgent];

    //Pega os ids da html
    const agente_imgElement = document.getElementById("portraitImage");
    const nomeElement = document.getElementById("agente");



    // troca a foto pro agente certo e ja exibe o nome
    agente_imgElement.src = `Randomizer/agents/${nomeSorteado}.webp`;
    agente_imgElement.alt = `${nomeSorteado}`;
    nomeElement.textContent = nomeSorteado
	randomizarArma.call();

}

function randomizarArma() {
    obterArmasAtivas.call();
	// randomiza Round 1
    const rnGun1 = Math.floor(Math.random() * pistolSelecionadas.length);
    const armaSorteado_1 = pistolSelecionadas[rnGun1];

    // randomiza Round 2
    const rnGun2 = Math.floor(Math.random() * halfSelecionadas.length);
    const armaSorteado_2 = halfSelecionadas[rnGun2];

    // randomiza Round 3
    const rnGun3 = Math.floor(Math.random() * fullSelecionadas.length);
    const armaSorteado_3 = fullSelecionadas[rnGun3];

    // randomiza Round 4
    const rnGun4 = Math.floor(Math.random() * full2Selecionadas.length);
    const armaSorteado_4 = full2Selecionadas[rnGun4];

    const gun_imgElement1 = document.getElementById("gun1");
    const gun_nameElement1 = document.getElementById("Arma1");
    const gun_imgElement2 = document.getElementById("gun2");
    const gun_nameElement2 = document.getElementById("Arma2");
    const gun_imgElement3 = document.getElementById("gun3");
    const gun_nameElement3 = document.getElementById("Arma3");
    const gun_imgElement4 = document.getElementById("gun4");
    const gun_nameElement4 = document.getElementById("Arma4");


    gun_imgElement1.src = `Randomizer/guns/${armaSorteado_1}.webp`;
    gun_imgElement1.alt = `${armaSorteado_1}`;
    gun_nameElement1.textContent = armaSorteado_1;

    gun_imgElement2.src = `Randomizer/guns/${armaSorteado_2}.webp`;
    gun_imgElement2.alt = `${armaSorteado_2}`;
    gun_nameElement2.textContent = armaSorteado_2;

    gun_imgElement3.src = `Randomizer/guns/${armaSorteado_3}.webp`;
    gun_imgElement3.alt = `${armaSorteado_3}`;
    gun_nameElement3.textContent = armaSorteado_3;

    gun_imgElement4.src = `Randomizer/guns/${armaSorteado_4}.webp`;
    gun_imgElement4.alt = `${armaSorteado_4}`;
    gun_nameElement4.textContent = armaSorteado_4;
}
// gera 1 agente quando a pagina inicia
document.addEventListener("DOMContentLoaded", randomizar);
