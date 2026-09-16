// Lista fixa de nomes
const agentes = ["astra","breach","brimstone","chamber","clove","cypher","deadlock","fade","gekko","harbor","iso","jett","KAYO","killjoy","miks","neon","omen","phoenix","raze","reyna","sage","skye","sova","tejo","veto","viper","vyse","waylay","yoru"];

const gun1 = ["Classic","Shorty","Frenzy","Ghost","Bandit","Sheriff","Stinger","Spectre","Bucky","Judge","Bulldog","Guardian","Phantom","Vandal","Marshal", "Outlaw", "Operator","Ares","Odin"]

function randomizar() {
    // randomiza Agente
    const rnAgent = Math.floor(Math.random() * agentes.length);
    const nomeSorteado = agentes[rnAgent];

    // randomiza Round 1
    const rnGun1 = Math.floor(Math.random() * gun1.length);
    const armaSorteado_1 = gun1[rnGun1];

    // randomiza Round 2
    const rnGun2 = Math.floor(Math.random() * gun1.length);
    const armaSorteado_2 = gun1[rnGun1];

    // randomiza Round 3
    const rnGun3 = Math.floor(Math.random() * gun1.length);
    const armaSorteado_3 = gun1[rnGun1];

    // randomiza Round 4
    const rnGun4 = Math.floor(Math.random() * gun1.length);
    const armaSorteado_4 = gun1[rnGun1];

    //Pega os ids da html
    const agente_imgElement = document.getElementById("portraitImage");
    const gun_imgElement = document.getElementById("gun1");
    const gun_nameElement = document.getElementById("Arma1");
    const nomeElement = document.getElementById("agente");

    // troca a foto pro agente certo e ja exibe o nome
    agente_imgElement.src = `agents/${nomeSorteado}.webp`;
    agente_imgElement.alt = `${nomeSorteado}`;
    nomeElement.textContent = nomeSorteado.toUpperCase();

    gun_imgElement.src = `guns/${armaSorteado_1}.webp`;
    gun_imgElement.alt = `${armaSorteado_1}`;
    gun_nameElement.textContent = armaSorteado_1.toUpperCase();
}

// gera 1 agente quando a pagina inicia
document.addEventListener("DOMContentLoaded", randomizar);
// vincula no botão
document.getElementById("btnRandomize").addEventListener("click", randomizar);
