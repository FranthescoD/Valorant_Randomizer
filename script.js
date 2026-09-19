// Lista fixa de nomes
const todosAgentes = ["astra","breach","brimstone","chamber","clove","cypher","deadlock","fade","gekko","harbor","iso","jett","KAYO","killjoy","miks","neon","omen","phoenix","raze","reyna","sage","skye","sova","tejo","veto","viper","vyse","waylay","yoru"];
var agenteFiltrado = []
const gun1 = ["Classic","Shorty","Frenzy","Ghost","Bandit","Sheriff"]
const gun2 = ["Sheriff","Stinger","Spectre","Bucky","Judge","Bulldog","Guardian","Marshal","Outlaw","Ares"]
const gun3 = ["Judge","Guardian","Phantom","Vandal","Warden", "Outlaw", "Operator", "Odin"]
const gun4 = ["Phantom", "Vandal", "Odin", "Operator","Warden"]

var lock1 = false;
var lock2 = false;
var lock3 = false;
var lock4 = false;

var agenteRolado = [];

// vincula no botão
document.getElementById("btnRandomize").addEventListener("click", randomizar);
document.getElementById("btnGun1").addEventListener("click", () => {lock1 = !lock1; lockar();});
document.getElementById("btnGun2").addEventListener("click", () => {lock2 = !lock2; lockar();});
document.getElementById("btnGun3").addEventListener("click", () => {lock3 = !lock3; lockar();});
document.getElementById("btnGun4").addEventListener("click", () => {lock4 = !lock4; lockar();});

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

function lockar() {
    const botao1 = document.getElementById("btnGun1");
    const botao2 = document.getElementById("btnGun2");
    const botao3 = document.getElementById("btnGun3");
    const botao4 = document.getElementById("btnGun4");
    botao1.classList.toggle("travado", lock1);
    botao2.classList.toggle("travado", lock2);
    botao3.classList.toggle("travado", lock3);
    botao4.classList.toggle("travado", lock4);
}

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
    //console.log(pistolSelecionadas);
    halfSelecionadas = Array.from(document.querySelectorAll(".Half-checkbox:checked")).map(cb => cb.value);
    //console.log(halfSelecionadas);
    fullSelecionadas = Array.from(document.querySelectorAll(".Full-checkbox:checked")).map(cb => cb.value);
    //console.log(fullSelecionadas);
    full2Selecionadas = Array.from(document.querySelectorAll(".Full2-checkbox:checked")).map(cb => cb.value);
    //console.log(full2Selecionadas);
    agenteFiltrado = Array.from(document.querySelectorAll(".Agente-checkbox:checked")).map(cb => cb.value);
    //console.log(agenteFiltrado.filter(agenteFiltrado => !agenteRolado.includes(agenteFiltrado)));
}


function randomizar() {

    // Sorteia as armas normalmente
    randomizarArma.call();

    // Obtém as armas ativas
    obterArmasAtivas.call();

    // Verifica se existe algum agente selecionado
    if (agenteFiltrado.length == 0) {
        window.alert("Choose at least one agent!");
        return;
    }

    const botao = document.getElementById("btnRandomize");
    const imagem = document.getElementById("portraitImage");
    const nome = document.getElementById("agente");

    // Impede outro clique durante a animação
    botao.classList.add("randomizing");

    let tempo = 0;
    const duracao = 600;

    function girar() {

        // Escolhe um agente temporário para a animação
        const indice = Math.floor(Math.random() * agenteFiltrado.length);
        const agenteTemp = agenteFiltrado[indice];

        imagem.src = `Randomizer/agents/${agenteTemp}.webp`;
        imagem.alt = agenteTemp;
        nome.textContent = agenteTemp;

        // Reinicia a animação CSS
        imagem.classList.replace("roulette-final", "roulette-active");
        nome.classList.replace("roulette-name-final", "roulette-name");
        void imagem.offsetWidth;
        void nome.offsetWidth;


        tempo += 40;

        if (tempo < duracao) {

            // Progresso da roleta: 0 → 1
            const progresso = tempo / duracao;

            // Intervalo inicial e final
            const intervaloInicial = 30;
            const intervaloFinal = 180;

            // Desaceleração progressiva
            const intervalo =
                intervaloInicial +
                (intervaloFinal - intervaloInicial) * Math.pow(progresso, 3);

            setTimeout(girar, intervalo);
        } else {

            // ==========================
            // RESULTADO FINAL
            // ==========================

            const rnAgent = Math.floor(Math.random() * agenteFiltrado.length);
            const nomeSorteado = agenteFiltrado[rnAgent];
            agenteRolado.push(nomeSorteado);

            if (agenteRolado.length == 4) {
                agenteRolado.shift();
            }
            agenteFiltrado = agenteFiltrado.filter(agenteFiltrado => !agenteRolado.includes(agenteFiltrado));
            console.log(agenteFiltrado);

            imagem.src = `Randomizer/agents/${nomeSorteado}.webp`;
            imagem.alt = nomeSorteado;
            nome.textContent = nomeSorteado;

            imagem.classList.replace("roulette-active", "roulette-final");
            nome.classList.replace("roulette-name", "roulette-name-final");

            // Libera o botão
            setTimeout(() => {
                botao.classList.remove("randomizing");
            }, 150);
        }
    }

        girar();
    }

function randomizarArma() {
    obterArmasAtivas.call();
    if (pistolSelecionadas.length == 0 || halfSelecionadas.length ==0 || fullSelecionadas.length == 0 || full2Selecionadas.length == 0) {
        window.alert("Choose at least one Gun!");
        return;
    }

    const gun_imgElement1 = document.getElementById("gun1");
    const gun_nameElement1 = document.getElementById("Arma1");
    const gun_imgElement2 = document.getElementById("gun2");
    const gun_nameElement2 = document.getElementById("Arma2");
    const gun_imgElement3 = document.getElementById("gun3");
    const gun_nameElement3 = document.getElementById("Arma3");
    const gun_imgElement4 = document.getElementById("gun4");
    const gun_nameElement4 = document.getElementById("Arma4");

    let tempo = 0;
    const duracao = 600;

    function girar2() {

        if (lock1 == false) {
            // Escolhe um agente temporário para a animação
            const indice1 = Math.floor(Math.random() * pistolSelecionadas.length);
            const gun1Temp = pistolSelecionadas[indice1];
            gun_imgElement1.src = `Randomizer/guns/${gun1Temp}.webp`;
            gun_nameElement1.textContent = gun1Temp;
            gun_imgElement1.classList.replace("roulette-final", "roulette-active");
            gun_nameElement1.classList.replace("roulette-name-final", "roulette-name");
        }

        if (lock2 == false) {
            const indice2 = Math.floor(Math.random() * halfSelecionadas.length);
            const gun2Temp = halfSelecionadas[indice2];
            gun_imgElement2.src = `Randomizer/guns/${gun2Temp}.webp`;
            gun_nameElement2.textContent = gun2Temp;
            gun_imgElement2.classList.replace("roulette-final", "roulette-active");
            gun_nameElement2.classList.replace("roulette-name-final", "roulette-name");
        }

        if (lock3 == false) {
            const indice3 = Math.floor(Math.random() * fullSelecionadas.length);
            const gun3Temp = fullSelecionadas[indice3];
            gun_imgElement3.src = `Randomizer/guns/${gun3Temp}.webp`;
            gun_nameElement3.textContent = gun3Temp;
            gun_imgElement3.classList.replace("roulette-final", "roulette-active");
            gun_nameElement3.classList.replace("roulette-name-final", "roulette-name");
        }

        if (lock4 == false) {
            const indice4 = Math.floor(Math.random() * full2Selecionadas.length);
            const gun4Temp = full2Selecionadas[indice4];
            gun_imgElement4.src = `Randomizer/guns/${gun4Temp}.webp`;
            gun_nameElement4.textContent = gun4Temp;
            gun_imgElement4.classList.replace("roulette-final", "roulette-active");
            gun_nameElement4.classList.replace("roulette-name-final", "roulette-name");
        }
        tempo += 40;

        if (tempo < duracao) {

            // Progresso da roleta: 0 → 1
            const progresso = tempo / duracao;

            // Intervalo inicial e final
            const intervaloInicial = 30;
            const intervaloFinal = 180;

            // Desaceleração progressiva
            const intervalo =
                intervaloInicial +
                (intervaloFinal - intervaloInicial) * Math.pow(progresso, 3);

            setTimeout(girar2, intervalo);
        } else {

            // randomiza Round 1
            if (lock1 == false){
                const rnGun1 = Math.floor(Math.random() * pistolSelecionadas.length);
                const armaSorteado_1 = pistolSelecionadas[rnGun1];
                gun_imgElement1.src = `Randomizer/guns/${armaSorteado_1}.webp`;
                gun_imgElement1.alt = `${armaSorteado_1}`;
                gun_nameElement1.textContent = armaSorteado_1;

                gun_imgElement1.classList.replace("roulette-active", "roulette-final");
                gun_nameElement1.classList.replace("roulette-name", "roulette-name-final");
            }

            // randomiza Round 2
            if (lock2 == false){
                const rnGun2 = Math.floor(Math.random() * halfSelecionadas.length);
                const armaSorteado_2 = halfSelecionadas[rnGun2];
                gun_imgElement2.src = `Randomizer/guns/${armaSorteado_2}.webp`;
                gun_imgElement2.alt = `${armaSorteado_2}`;
                gun_nameElement2.textContent = armaSorteado_2;

                gun_imgElement2.classList.replace("roulette-active", "roulette-final");
                gun_nameElement2.classList.replace("roulette-name", "roulette-name-final");
            }

            // randomiza Round 3
            if (lock3 == false){
                const rnGun3 = Math.floor(Math.random() * fullSelecionadas.length);
                const armaSorteado_3 = fullSelecionadas[rnGun3];
                gun_imgElement3.src = `Randomizer/guns/${armaSorteado_3}.webp`;
                gun_imgElement3.alt = `${armaSorteado_3}`;
                gun_nameElement3.textContent = armaSorteado_3;

                gun_imgElement3.classList.replace("roulette-active", "roulette-final");
                gun_nameElement3.classList.replace("roulette-name", "roulette-name-final");
            }

            // randomiza Round 4
            if (lock4 == false){
                const rnGun4 = Math.floor(Math.random() * full2Selecionadas.length);
                const armaSorteado_4 = full2Selecionadas[rnGun4];
                gun_imgElement4.src = `Randomizer/guns/${armaSorteado_4}.webp`;
                gun_imgElement4.alt = `${armaSorteado_4}`;
                gun_nameElement4.textContent = armaSorteado_4;

                gun_imgElement4.classList.replace("roulette-active", "roulette-final");
                gun_nameElement4.classList.replace("roulette-name", "roulette-name-final");
            }
        }
    }
    girar2.call();
}
// gera 1 agente quando a pagina inicia
document.addEventListener("DOMContentLoaded", randomizar);
