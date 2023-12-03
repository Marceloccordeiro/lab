function generateReference() {
    const autornome = document.getElementById('autornome').value;
    const autorsobrenome = document.getElementById('autorsobrenome').value;
    const titulolivro = document.getElementById('titulolivro').value;
    const edicao = document.getElementById('edicao').value;
    const cidadepublicacao = document.getElementById('cidadepublicacao').value;
    const editora = document.getElementById('editora').value;
    const anopublicacao = document.getElementById('anopublicacao').value;

    const reference = `${autorsobrenome}. ${autornome}. ${titulolivro}.${edicao}.${cidadepublicacao}:${editora},${anopublicacao}`;

    document.getElementById('output').innerText = reference;
}

function generateReference1() {
    const nomefilme = document.getElementById('nomefilme').value;
    const produtorfilme = document.getElementById('produtorfilme').value;
    const datapublicfilme = document.getElementById('datapublicfilme').value;
    const localpublicfilme = document.getElementById('localpublicfilme').value;
    const empresaprodfilme = document.getElementById('empresaprodfilme').value;

    const reference1 = `${nomefilme}. Produção: ${produtorfilme}. ${localpublicfilme}.${empresaprodfilme}.${datapublicfilme}`;

    document.getElementById('output1').innerText = reference1;
}

function generateReference2() {
    const autornome1 = document.getElementById('autornome1').value;
    const autorsobrenome1 = document.getElementById('autorsobrenome1').value;
    const titulosite = document.getElementById('titulosite').value;
    const subtitulosite = document.getElementById('subtitulosite').value;
    const datapublicsite = document.getElementById('datapublicsite').value;
    const linksite = document.getElementById('linksite').value;
    const acessosite = document.getElementById('acessosite').value;

    const reference2 = `${autornome1}, ${autorsobrenome1}. ${titulosite}:${subtitulosite},${datapublicsite} Disponivel em: ${linksite} Acesso em: ${acessosite}`;

    document.getElementById('output2').innerText = reference2;
}

function generateReference3() {
    const autornome2 = document.getElementById('autornome2').value;
    const autorsobrenome2 = document.getElementById('autorsobrenome2').value;
    const tituloartigo = document.getElementById('tituloartigo').value;
    const titulojornal = document.getElementById('titulojornal').value;
    const datapublicartigo = document.getElementById('datapublicartigo').value;
    const localpublicartigo = document.getElementById('localpublicartigo').value;
    const numedicaoartigo = document.getElementById('numedicaoartigo').value;
    const num_ano_artigo = document.getElementById('num_ano_artigo').value;
    const parteartigo = document.getElementById('parteartigo').value;
    const pag_artigo = document.getElementById('pag_artigo').value;


    const reference3 = `${autornome2}, ${autorsobrenome2}. ${tituloartigo}:${titulojornal},${localpublicartigo}. Ano ${num_ano_artigo}, n. ${numedicaoartigo},${datapublicartigo}.${parteartigo}, p.${pag_artigo}.`;

    document.getElementById('output3').innerText = reference3;
}

function generateReference4() {
    const jurisdicao = document.getElementById('jurisdicao').value;
    const tipo_lei_decreto = document.getElementById('tipo_lei_decreto').value;
    const epigrafe_ementa = document.getElementById('epigrafe_ementa').value;
    const numero_lei = document.getElementById('numero_lei').value;
    const data_lei = document.getElementById('data_lei').value;
    const titulo_lei = document.getElementById('titulo_lei').value;
    const subtitulo_lei = document.getElementById('subtitulo_lei').value;
    const datapubliclei = document.getElementById('datapubliclei').value;
    const localpubliclei = document.getElementById('localpubliclei').value;
    const num_ano_lei = document.getElementById('num_ano_lei').value;
    const numero_lei_1 = document.getElementById('numero_lei_1').value;
    const pag_lei = document.getElementById('pag_lei').value;



    const reference4 = `${jurisdicao}, ${tipo_lei_decreto} n. ${numero_lei}.${data_lei}.${epigrafe_ementa}.${titulo_lei}.${subtitulo_lei}.${localpubliclei} ano ${num_ano_lei} n.${numero_lei_1}p.${pag_lei}.${datapubliclei}.`;

    document.getElementById('output4').innerText = reference4;
}






function mostrarFormulario() {
    document.getElementById("FormularioLivro").style.display = "flex";
    document.getElementById("FormularioFilmes").style.display = "none";
    document.getElementById("FormularioSite").style.display = "none";
    document.getElementById("FormularioArtigo").style.display = "none";
    document.getElementById("FormularioLeis").style.display = "none";
}

function mostrarFormulario1() {
    document.getElementById("FormularioLivro").style.display = "none";
    document.getElementById("FormularioFilmes").style.display = "flex";
    document.getElementById("FormularioSite").style.display = "none";
    document.getElementById("FormularioArtigo").style.display = "none";
    document.getElementById("FormularioLeis").style.display = "none";
}

function mostrarFormulario2() {
    document.getElementById("FormularioLivro").style.display = "none";
    document.getElementById("FormularioFilmes").style.display = "none";
    document.getElementById("FormularioSite").style.display = "flex";
    document.getElementById("FormularioArtigo").style.display = "none";
    document.getElementById("FormularioLeis").style.display = "none";
}

function mostrarFormulario3() {
    document.getElementById("FormularioLivro").style.display = "none";
    document.getElementById("FormularioFilmes").style.display = "none";
    document.getElementById("FormularioSite").style.display = "none";
    document.getElementById("FormularioArtigo").style.display = "flex";
    document.getElementById("FormularioLeis").style.display = "none";
}

function mostrarFormulario4() {
    document.getElementById("FormularioLivro").style.display = "none";
    document.getElementById("FormularioFilmes").style.display = "none";
    document.getElementById("FormularioSite").style.display = "none";
    document.getElementById("FormularioArtigo").style.display = "none";
    document.getElementById("FormularioLeis").style.display = "flex";
}