var listaFilmes = [
    "https://images-na.ssl-images-amazon.com/images/I/51EQKN25Q2L.jpg",
    "https://www.themoviedb.org/t/p/original/hNCqkXbWd40eftqSdjq8TmV7Mqr.jpg",
    "https://boraassistir.com.br/media/images/banners/1591712564201080-b-small.jpg",
    "https://th.bing.com/th/id/R.e12a11a1c6217e635c28b99e44455f5a?rik=si29RjJGuJiO4g&riu=http%3a%2f%2fwww.impawards.com%2f2023%2fposters%2fcreator_ver2.jpg&ehk=yhvdrZ2iYril6WxHng%2buN0ZvaxhcX%2fihbjixGb02LD8%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.zRdYq_rSYK9jUU63znIANwHaKj?rs=1&pid=ImgDetMain",
];


for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}



/*
COMENTÁRIOS FUNÇÕES APRENDIDAS

2 - document.write 
3 - for (var i = 0; i < listaFilmes.length; i++) {}  - CRIA UMA LISTA, UTILIZA 3 VARIAVEIS ("i" INDICE QUANDO COMEÇA; TAMANHO DA LISTA; INCREMENTO)



DESAFIOS 

Desafio 1 = utilizar o while para fazer a lista, pesquisar o push
Desafio 2 = garantir que o final do link seja .jpg no final, fazer estrutura condicional (true or false) 
Desafio 3 = crie uma segunda lista para colocar o nome dos filmes

*/
