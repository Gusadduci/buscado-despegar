(function () {
    var boton = document.getElementById('buscar');

    var cero = function(){
        result = ' ';
        resultados.innerHTML = result;
    }
    

        
        var fechaI = new Date(),
        dia = fechaI.getDate(),
        mes = fechaI.getMonth(),
        year = fechaI.getFullYear();
        var fecha = year/mes/dia;

 
        var contador = 0

        var search = function(){
            for (var i = 0; i < 1; i++){
                var fS = document.getElementById('salida');
                var salidaI = new Date(fS.value),
                    dia = salidaI.getDate(),
                    mes = salidaI.getMonth(),
                    year = salidaI.getFullYear();
                var salida = year/mes/(dia+1);
              
        
                var fV = document.getElementById('vuelta');
                var vueltaI = new Date(fV.value),
                    dia = vueltaI.getDate(),
                    mes = vueltaI.getMonth(),
                    year = vueltaI.getFullYear();
                var vuelta = year/mes/(dia+1);
                
                
                
                var tiene_numeros = function(){

                    var er1 = new RegExp('[0123456789]')
                    var rta1 = er1.test(partida)
                    var rta2 = er1.test(destino)

                    if (rta1 == true){
                        contador = contador + 1;
                        partidaP.className = 'error';
                        cartelMod1 = '<div class="cartel-error1">Ingrese letras.</div><div class="tri1"></div>';
                        }
                    else if (partida.length == 3 ){
                        contador = contador;
                        partidaP.className = 'input-text';
                        cartelMod1 = '';
                        }else {contador = contador + 1;
                        partidaP.className = 'error'
                        cartelMod1 = '<div class="cartel-error1">Ingrese origen.</div><div class="tri1"></div>';
                        }

                    if (rta2 == true){
                        contador = contador + 1;
                        destinoP.className = 'error'
                        cartelMod2 = '<div class="cartel-error2">Ingrese letras.</div><div class="tri2"></div>';;
                    }else if (destino.length == 3 ){
                        contador = contador;
                        destinoP.className = 'input-text';
                        cartelMod2 = '';
                        }else {contador = contador + 1;
                        destinoP.className = 'error';
                        cartelMod2 = '<div class="cartel-error2">Ingrese destino.</div><div class="tri2"></div>';}

                }
      
                

                var verFecha = function(){
        
                    if (salida <= fecha){
                        contador = contador;
                        fS.className = 'input-text';
                        cartelMod3 = '';
                    }else {contador = contador + 1;
                           fS.className = 'error'; 
                           cartelMod3 = '<div class="cartel-error3">Ingrese una fecha de salida.</div><div class="tri3"></div>';}

                    if (vuelta <= fecha){
                        contador = contador;
                        fV.className = 'input-text';
                        cartelMod4 = '';
                    }else {contador = contador + 1;
                        fV.className = 'error';
                        cartelMod4 = '<div class="cartel-error4">Ingrese una fecha de llegada.</div><div class="tri4"></div>';}

                    if (vuelta <= salida){
                        contador = contador;
                        fS.className = 'input-text';
                        fV.className = 'input-text';
                        cartelMod4 = '';
                        
                    }else {contador = contador + 1;
                        fS.className = 'error';
                        fV.className = 'error';
                        cartelMod4 = '<div class="cartel-error4">Deve ser menor a salida.</div><div class="tri4"></div>';}
                }
        
                
                var partidaP = document.getElementById('partida');
                var partida = partidaP.value;
                var destinoP = document.getElementById('destino');
                var destino = destinoP.value;

                var resultados = document.getElementById('resultados');
                var result = ' ';
               
                var cartel1 = document.getElementById('cartel1')
                var cartel2 = document.getElementById('cartel2')
                var cartel3 = document.getElementById('cartel3')
                var cartel4 = document.getElementById('cartel4')
                var cartelMod1 = '';
                var cartelMod2 = '';
                var cartelMod3 = '';
                var cartelMod4 = '';
                
                tiene_numeros();
                verFecha();
           
                
                cartel1.innerHTML = cartelMod1
                cartel2.innerHTML = cartelMod2
                cartel3.innerHTML = cartelMod3
                cartel4.innerHTML = cartelMod4

                if (contador == 0){
                    result = '<div class="texto">' + ' Tu lugar de partida es en '+ partida + ' el dia ' + fS.value  + ' vas hasta ' + destino + ' y vuelves el ' + fV.value +  '</div>';
                    resultados.innerHTML = result;

                }else{
                    contador = 0;
                    cero();
                    
                    
                }
                
                
            }

        }

    
    
    boton.addEventListener("click", search);
    

}())