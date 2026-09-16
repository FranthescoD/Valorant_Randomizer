// Lista fixa de nomes
const agentes = ["astra","breach","brimstone","chamber","clove","cypher","deadlock","fade","gekko","harbor","iso","jett","KAYO","killjoy","miks","neon","omen","phoenix","raze","reyna","sage","skye","sova","tejo","veto","viper","vyse","waylay","yoru"];

const gun1 = ["Classic","Shorty","Frenzy","Ghost","Bandit","Sheriff"]
const gun2 = ["Sheriff","Stinger","Spectre","Bucky","Judge","Bulldog","Guardian","Marshal", "Outlaw","Ares"]
const gun3 = ["Guardian","Phantom","Vandal", "Outlaw","Odin"]
const gun4 = ["Phantom","Vandal", "Operator","Odin"]



function randomizar() {
    // randomiza Agente
    const rnAgent = Math.floor(Math.random() * agentes.length);
    const nomeSorteado = agentes[rnAgent];

    // randomiza Round 1
    const rnGun1 = Math.floor(Math.random() * gun1.length);
    const armaSorteado_1 = gun1[rnGun1];

    // randomiza Round 2
    const rnGun2 = Math.floor(Math.random() * gun2.length);
    const armaSorteado_2 = gun2[rnGun2];

    // randomiza Round 3
    const rnGun3 = Math.floor(Math.random() * gun3.length);
    const armaSorteado_3 = gun3[rnGun3];

    // randomiza Round 4
    const rnGun4 = Math.floor(Math.random() * gun4.length);
    const armaSorteado_4 = gun4[rnGun4];

    //Pega os ids da html
    const agente_imgElement = document.getElementById("portraitImage");
    const nomeElement = document.getElementById("agente");

    const gun_imgElement1 = document.getElementById("gun1");
    const gun_nameElement1 = document.getElementById("Arma1");
    const gun_imgElement2 = document.getElementById("gun2");
    const gun_nameElement2 = document.getElementById("Arma2");
    const gun_imgElement3 = document.getElementById("gun3");
    const gun_nameElement3 = document.getElementById("Arma3");
    const gun_imgElement4 = document.getElementById("gun4");
    const gun_nameElement4 = document.getElementById("Arma4");

    // troca a foto pro agente certo e ja exibe o nome
    agente_imgElement.src = `Randomizer/agents/${nomeSorteado}.webp`;
    agente_imgElement.alt = `${nomeSorteado}`;
    nomeElement.textContent = nomeSorteado.toUpperCase();

    gun_imgElement1.src = `Randomizer/guns/${armaSorteado_1}.webp`;
    gun_imgElement1.alt = `${armaSorteado_1}`;
    gun_nameElement1.textContent = armaSorteado_1.toUpperCase();

    gun_imgElement2.src = `Randomizer/guns/${armaSorteado_2}.webp`;
    gun_imgElement2.alt = `${armaSorteado_2}`;
    gun_nameElement2.textContent = armaSorteado_2.toUpperCase();

    gun_imgElement3.src = `Randomizer/guns/${armaSorteado_3}.webp`;
    gun_imgElement3.alt = `${armaSorteado_3}`;
    gun_nameElement3.textContent = armaSorteado_3.toUpperCase();

    gun_imgElement4.src = `Randomizer/guns/${armaSorteado_4}.webp`;
    gun_imgElement4.alt = `${armaSorteado_4}`;
    gun_nameElement4.textContent = armaSorteado_4.toUpperCase();
}

// gera 1 agente quando a pagina inicia
document.addEventListener("DOMContentLoaded", randomizar);
// vincula no botão
document.getElementById("btnRandomize").addEventListener("click", randomizar);
