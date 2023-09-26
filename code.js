var resultado;
var valor = "";
onEvent("button+", "click", function( ) {
  botao("+");
});

onEvent("button-", "click", function( ) {
  botao("-");
});

onEvent("buttonx", "click", function( ) {
  botao("x");
});

onEvent("button/", "click", function( ) {
  botao("/");
});

onEvent("buttonC", "click", function( ) {
  reseta();
});

onEvent("button07", "click", function( ) {
  botao("7");
});

onEvent("button08", "click", function( ) {
  botao("8");
});

onEvent("button09", "click", function( ) {
  botao("9");
});

onEvent("button04", "click", function( ) {
  botao("4");
});

onEvent("button05", "click", function( ) {
  botao("5");
});

onEvent("button06", "click", function( ) {
  botao("6");
});

onEvent("button01", "click", function( ) {
  botao("1");
});

onEvent("button02", "click", function( ) {
  botao("2");
});

onEvent("button03", "click", function( ) {
  botao("3");
});

onEvent("button.", "click", function( ) {
  botao(".");
});

onEvent("button0", "click", function( ) {
  botao("0");
});

onEvent("button=", "click", function( ) {
  resultado();
});


function botao(num) {
  valor = valor + num;
  setText("visor",valor)
}
function reseta() {
  valor = "";
  setText("visor", "");
}
function resultado() {
  valor = eval(valor);
  setText("visor", "");
  setText("visor", valor);
}
