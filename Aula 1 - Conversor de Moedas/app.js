var valorEmDolar = 64;
var cotacaoDolarDia = 5.32;
var valorEmReal = valorEmDolar * cotacaoDolarDia;
valorEmReal = valorEmReal.toFixed(2);

var nomeUsuario = "Tiago Domingos";
var mensagemInicio = "Olá, ";
var mensagemFinal = " o valor que vc pediu de ";

<<<<<<< Updated upstream
var quantosAnosLuz = 4000;
=======
var quantosAnosLuz = 220;
>>>>>>> Stashed changes
var velocidadeDaLuz = 299792458;
var segundosAnoJuliano = 31557600;
var anoLuzm = velocidadeDaLuz * segundosAnoJuliano;
anoLuzm = anoLuzm.toFixed(2);
alert(
  mensagemInicio +
    nomeUsuario +
    mensagemFinal +
    quantosAnosLuz +
    " ly" +
    " é de " +
    anoLuzm +
    " m."
);
