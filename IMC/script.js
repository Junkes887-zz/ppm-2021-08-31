function calcular() {
   var altura = document.querySelector("#altura");
   var peso = document.querySelector("#peso");
   var alturaValor = parseFloat(altura.value);
   var pesoValor = parseFloat(peso.value);
   if (isNaN(alturaValor)) {
      alert('Altura inválido!');
      return;
   }
   if (isNaN(pesoValor)) {
      alert('Peso inválido!');
      return;
   }
   
   var valor = (pesoValor / (alturaValor * alturaValor))
   
   var resultado = document.querySelector('#resultado');
   resultado.innerHTML = 'IMC: ' + valor.toFixed(2);
   
   var classificacao = document.querySelector('#classificacao');

   switch (true) {
      case (valor < 16):
         classificacao.innerHTML = 'Magreza grave';
         classificacao.style.color = 'red';
         break;
      case (valor < 17):
         classificacao.innerHTML = 'Magreza moderada';
         classificacao.style.color = 'orange';
         break;
      case (valor < 18.5):
         classificacao.innerHTML = 'Magreza leve';
         classificacao.style.color = 'blue';
         break;
      case (valor < 25):
         classificacao.innerHTML = 'Saudável';
         classificacao.style.color = 'green';
         break;
      case (valor < 30):
         classificacao.innerHTML = 'Sobrepeso';
         classificacao.style.color = 'blue';
         break;
      case (valor < 35):
         classificacao.innerHTML = 'Obesidade Grau I';
         classificacao.style.color = 'orange';
         break;
      case (valor < 40):
         classificacao.innerHTML = 'Obesidade Grau II (severa)';
         classificacao.style.color = 'red';
         break;
      default:
         classificacao.innerHTML = 'Obesidade Grau III (mórbida)';
         classificacao.style.color = 'red';
         break;
   }
   document.getElementById("about").style.color = 'blue';

}

function limpar() {
   var altura = document.querySelector("#altura");
   var peso = document.querySelector("#peso");
   var resultado = document.querySelector('#resultado');
   var classificacao = document.querySelector('#classificacao');
   altura.value = '';
   peso.value = '';
   resultado.innerHTML = '';
   classificacao.innerHTML = '';
}