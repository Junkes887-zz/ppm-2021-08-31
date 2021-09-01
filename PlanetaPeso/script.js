function calcular() {
   var peso = document.querySelector("#peso");
   var pesoValor = parseFloat(peso.value);
   if (isNaN(pesoValor)) {
      alert('Peso inválido!');
      return;
   }
   
   var campoPlaneta = document.querySelector('#planeta');
   var planeta = parseInt(campoPlaneta.value);
   
   var resultado = document.querySelector('#resultado');
   var valor;

   switch (planeta) {
      case 0:
         alert('Selecione um planeta!');
         return;
      case 1: valor = (pesoValor / 10 ) * 3.7; break;
      case 2: valor = (pesoValor / 10 ) * 8.8; break;
      case 3: valor = (pesoValor / 10 ) * 3.8; break;
      case 4: valor = (pesoValor / 10 ) * 26.4; break;
      case 5: valor = (pesoValor / 10 ) * 11.5; break;
      case 6: valor = (pesoValor / 10 ) * 11.7; break;
      default: alert('Planeta inválido!'); return;
   }
   
   resultado.innerHTML = 'Seu peso: ' + valor.toFixed(2);

}

function cancelar() {
   var peso = document.querySelector("#peso");
   var resultado = document.querySelector('#resultado');
   var campoPlaneta = document.querySelector('#planeta');
   peso.value = '';
   resultado.innerHTML = '';
   campoPlaneta.value = 0;
}