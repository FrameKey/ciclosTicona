

class Auto{
    constructor(marca,año,modelo,precio,iva){
        this.marca = marca
        this.año = año
        this.modelo = modelo
        this.precio = precio
        this.iva = iva
    }
    precioFinal(){
       return this.precio * this.iva
}
    seguro(){
        return parseInt(this.precio - (this.año * 3))
    }
}
const iva = 1.21
const ivaImportado = 2

const auto1 = new Auto  ("Fiat",2020,"500",10000,iva);
const auto2 = new Auto  ("Reanult",2020,"Megane",250000,iva);
const auto3 = new Auto  ("Volkswagen",2020,"Vento",35300,ivaImportado);
const auto4 = new Auto  ("Mercedes Benz",2020,"Clase A",76000,ivaImportado);


let marcaAuto = prompt ('¿Qué marca de auto queres? ') 
let operacion = prompt ('¿Qué queres calcular?')



if (marcaAuto.toLocaleLowerCase() == "fiat" && operacion.toLocaleLowerCase() == "seguro"){
    alert ("El seguro del " + auto1.marca +" "+ auto1.modelo + " sale $" + auto1.seguro() + " por mes.")
}  
 else if (marcaAuto.toLocaleLowerCase() == "fiat" && operacion.toLocaleLowerCase() == "precio"){
    alert ("El precio final del " + auto1.marca + " " + auto1.modelo + " es $" + auto1.precioFinal() + " (IVA incluido)")
}


 else if (marcaAuto.toLocaleLowerCase() == "renault" && operacion.toLocaleLowerCase() == "seguro"){
    alert ("El seguro del " + auto2.marca +" "+ auto2.modelo + " sale $" + auto2.seguro() + " por mes.")
}  
 else if (marcaAuto.toLocaleLowerCase() == "renault" && operacion.toLocaleLowerCase() == "precio"){
    alert ("El precio final del " + auto2.marca + " " + auto2.modelo + " es $" + auto2.precioFinal() + " (IVA incluido)")
}


else if (marcaAuto.toLocaleLowerCase() == "volkswagen" && operacion.toLocaleLowerCase() == "seguro"){
    alert ("El seguro del " + auto3.marca +" "+ auto3.modelo + " sale $" + auto3.seguro() + " por mes.")
}  
 else if (marcaAuto.toLocaleLowerCase() == "volkswagen" && operacion.toLocaleLowerCase() == "precio"){
    alert ("El precio final del " + auto3.marca + " " + auto3.modelo + " es $" + auto3.precioFinal() + " (IVA incluido)")
}


else if (marcaAuto.toLocaleLowerCase() == "mercedes benz" && operacion.toLocaleLowerCase() == "seguro"){
    alert ("El seguro del " + auto4.marca +" "+ auto4.modelo + " sale $" + auto4.seguro() + " por mes.")
}  
 else if (marcaAuto.toLocaleLowerCase() == "mercedes benz" && operacion.toLocaleLowerCase() == "precio"){
    alert ("El precio final del " + auto4.marca + " " + auto4.modelo + " es $" + auto4.precioFinal() + " (IVA incluido)")
}
else{
    alert("Sorry, no tenemos ese auto 🙁")
}



