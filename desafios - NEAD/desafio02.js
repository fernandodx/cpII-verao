/*Desafio 02
Dado um ano, retorne o século em que ele se encontra. 
O primeiro século abrange do ano 1 até o ano 100 inclusive, o segundo - do ano 101 até o ano 200 inclusive, etc.*/

//Função de verificar século

function seculo(ano){

  var seculo = ano;
  
    if(seculo % 100 >= 1){
      
        seculo = seculo/100;
        seculo = seculo + 1;
        seculo = parseInt(seculo);
      
    return seculo
    
    }else{
  
        seculo = seculo/100;
        seculo = parseInt(seculo);
      
     return seculo
    }
  }
  
  //teste passando ano como parametro
  
  console.log(seculo(1969));