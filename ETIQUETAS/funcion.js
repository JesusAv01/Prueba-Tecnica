
let array = []

let valor =  document.getElementsByClassName('.entrada')

array.push(valor)

let conteo = 0

for(let valor of array){
    conteo = conteo + valor
    
}

    
if( conteo > 22){
    alert('Es etiqueta')
}

if(conteo  > 0){
    alert('No es etiqueta')
}



