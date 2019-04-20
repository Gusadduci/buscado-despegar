(function () {

var datos = [
{
    lugar : 'Cancun',
    fS : new Date(2019,3,19),
    fV : new Date(2019,3,25),
    salida : 'Lan',
    imagen : 'Cancun-43.jpg'
},
{
    lugar : 'Tucuman',
    fS : new Date(2019,3,19),
    fV : new Date(2019,8,13),
    salida : 'Lan',
    imagen : 'Cancun-43.jpg'
},
{
    lugar : 'Mendoza',
    fS : new Date(2019,3,19),
    fV : new Date(2019,8,13),
    salida : 'Ban',
    imagen : 'Cancun-43.jpg'
},
{
    lugar : 'Brazil',
    fS : new Date(2019,3,19),
    fV : new Date(2019,8,13),
    salida :'Eze',
    imagen : 'Cancun-43.jpg'
}
]
    var resultados = document.getElementById('resultados');
    var boton = document.getElementById('buscar');
    var result = '';
    var numDatos = datos.length;

    var cero = function(){
        result = ' ';
        resultados.innerHTML = result;
    }
    

    
    var search = function(){
        var fechaI = new Date(),
        dia = fechaI.getDate(),
        mes = fechaI.getMonth(),
        year = fechaI.getFullYear();
        var fecha = year/mes/dia;
     

        var partidaP = document.getElementById('partida');
        var partida = partidaP.value;

        var destinoP = document.getElementById('destino');
        var destino = destinoP.value;

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
     
        
       
        for (var i = 0 ; i < numDatos; i++){

            var fechaSalida = datos[i].fS,
            dia = fechaSalida.getDate(),
            mes = fechaSalida.getMonth(),
            year = fechaSalida.getFullYear();
            var fechaS = year/mes/dia;
            console.log(fechaS)
            var fechaVuelta = datos[i].fV,
            dia = fechaVuelta.getDate(),
            mes = fechaVuelta.getMonth(),
            year = fechaVuelta.getFullYear();
            var fechaV = year/mes/dia;
            
         
             if (partida.length >= 3) {
                if (destino.length >= 3){
                    if (partida == datos[i].salida){
                        if (destino == datos[i].lugar){
                            if (salida <= fecha){
                                if (vuelta <= fecha){
                                    if(salida <= fechaS){
                                        if (salida >= fechaV){
                                            if(vuelta >= fechaV){
                                                if(vuelta <= fechaS)
                                                result = '<div id="lugares"><div class="image"></div><div class="info"><img src=" Cancun-43.jpg" >' + datos[i].lugar + '<div class="fechas" id="fechas">'+ datos[i].fS + ' ' + datos[i].fV + '</div></div></div>';
                                                resultados.innerHTML = result;
                                            }else { cero()}  
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } 
                }
            }
        }

    boton.addEventListener("click", search);

}())