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
                    
                    if (rta1 == true){
                        contador = contador + 1;
                    }else {contador = contador;
                        document.getElementById('salida').className += 'error';}

                    var rta2 = er1.test(destino)
                

                    if (rta2 == true){
                        contador = contador + 1;
                    }else {contador = contador;
                        document.getElementById('salida').className += 'error';}

                }
      
                var tres = function(){
        
                    if (partida.length == 3 ){
                        {contador = contador;}
                        
                    }else {contador = contador + 1;
                        document.getElementById('salida').className = 'error';}

                    if (destino.length == 3 ){
                        {contador = contador;}
                        
                    }else {contador = contador + 1;
                        document.getElementById('salida').className = 'error';}
                }

                var verFecha = function(){
        
                    if (salida <= fecha){
                        {contador = contador;}
                        
                    }else {contador = contador + 1;
                           document.getElementById('salida').className = 'error'; }

                    if (vuelta <= fecha){
                        {contador = contador;}
                        
                    }else {contador = contador + 1;
                        document.getElementById('vuelta').className = 'error';}

                    if (vuelta <= salida){
                        {contador = contador;}
                        
                    }else {contador = contador + 1;
                        document.getElementById('vuelta').className = 'error';
                        document.getElementById('salida').className = 'error';}
                }
        
                
                var partidaP = document.getElementById('partida');
                var partida = partidaP.value;
                var destinoP = document.getElementById('destino');
                var destino = destinoP.value;

                var resultados = document.getElementById('resultados');
                var result = ' ';

                tiene_numeros()
                tres()
                verFecha()
                
                

                if (contador == 0){
                    result = '<div class="texto">' + ' Tu lugar de partida es en '+ partida + ' el dia ' + fS.value  + ' vas hasta ' + destino + ' y vuelves el ' + fV.value +  '</div>';
                    resultados.innerHTML = result;

                }else{
                    contador = 0;
                }
                
                
            }

        }

    
    
    boton.addEventListener("click", search);
    

}())