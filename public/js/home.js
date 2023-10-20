// Dados simulados da API
const data1 = [
{ link: "pags?s=angry-birds-2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVBHUIdbSf8sseeRBcNsVub7X7yFWHqG1lj1YbbXws5S1DWA5rHsN5qa6&s=10", title: "Angry Birds 2: O Filme", lingua: "Dublado"},
];

// Função para criar elementos HTML e exibir dados na página
function displayData(data1) {
const content = document.getElementById('recentes');
            
// Limpar conteúdo existente
content.innerHTML = '';
data1.forEach(data => {
const div = document.createElement('div');
div.innerHTML = `
<!-- NEW ITEM -->
<div class="col-lg-2 col-md-2 col-sm-3 col-xs-6 col">
<div class="item">
<spam class="att">${data.lingua}</spam>
<a href="/${data.link}">
<div class="imagem"> <img original-src="${data.img}" alt="" title="" class="img-responsive" />
</div>
<h2 class="titulo">${data.title}</h2>
</a>
</div>
</div>
<!-- END ITEM -->
`;
content.appendChild(div);
});
}

// Chame a função para exibir os dados
displayData(data1);

// Dados simulados da API
const data2 = [
{ link: "pags?s=elementos", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdab6m1R38wYdsAjwcuGacJ80G27bD5oV0HlVR6aJoTS_3S3v", title: "Elementos", top: "TOP 1" },
{ link: "pags?s=angry-birds-2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVBHUIdbSf8sseeRBcNsVub7X7yFWHqG1lj1YbbXws5S1DWA5rHsN5qa6&s=10", title: "Angry Birds 2: O Filme", top: "TOP 2"},
];

// Função para criar elementos HTML e exibir dados na página
function top4(data2) {
const content = document.getElementById('top4');
            
// Limpar conteúdo existente
content.innerHTML = '';
data2.forEach(data => {
const div = document.createElement('div');
div.innerHTML = `
<!-- NEW ITEM -->
<div class="col-lg-2 col-md-2 col-sm-3 col-xs-6 col">
<div class="item">
<spam class="att">${data.top}</spam>
<a href="/${data.link}">
<div class="imagem"> <img original-src="${data.img}" alt="" title="" class="img-responsive" />
</div>
<h2 class="titulo">${data.title}</h2>
</a>
</div>
</div>
<!-- END ITEM -->
`;
content.appendChild(div);
});
}

// Chame a função para exibir os dados
top4(data2);