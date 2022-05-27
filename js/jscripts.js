debugger
let pelicula = prompt('¿que pelicula desea ver')
console.log(pelicula);
const ticket = 'aqui esta su ticket'

while(pelicula != '') {

    switch (pelicula) {
        case 'DURO DE MATAR':
            const edad = prompt('cuantos años tienes')
            if(edad > 17){
                alert(ticket)
                pelicula = ""
            }else{
                const bambi= prompt('no queres ver Bambi?')
                if(bambi != 'SI'){
                    alert('lo sentimos, no hay pelicula apropiada')
                    pelicula= ""
                }
            }
            break;

        case 'BAMBI':
            alert(ticket)
            pelicula= ""
            break;

        default:
            alert(' esa pelicula no esta en cartelera')
            pelicula= prompt('¿que pelicula desea ver')
            break;
    }
}