class chair{
    constructor(color,altura,anguloReclinacion,subeBaja,soporteCabeza){
        this.color = color;
        this.altura = altura;
        this.anguloReclinacion = anguloReclinacion;
        this.subeBaja = subeBaja;
        this.soporteCabeza = soporteCabeza;
    }

    ajustarLaAltura(){};
    ajustarAnguloReclinacion(){};
    cambiarColor(){};
    
}
class officeChair extends chair{
    #preciocompra;
    #vendedorSilla;

    constructor(color,altura,anguloReclinacion,subeBaja,soporteCabeza){
        //Inicializo el constructor de Chair
        super();
        this.tipoDeSilla = "Officina";
        this.color = color;
        this.altura = altura;
        this.anguloReclinacion = anguloReclinacion;
        this.subeBaja = subeBaja;
        this.soporteCabeza = soporteCabeza;
        this.sePuedeMover = true;
        //propiedades privadas
        this.#preciocompra = 200;
        this.#vendedorSilla = "Juan Pablo Perez";

    }

    ajustarLaAltura(altura){
        if(altura>0){
            console.log(altura);
        }
    }
    ajustarAnguloReclinacion(angulo){
        console.log(`Se justo el angulo a ${angulo}`);
    }
    //Metodo Privado
    #calcularPrecioVenta(){
        return this.#preciocompra + this.#preciocompra*0.3;
    }
    generarfactura(){
        console.log(this.#calcularPrecioVenta(this.#preciocompra));
    }
}
//Instanciar
const nuevaSilla = new chair('Verde',5,50,true,false);
console.log(nuevaSilla);
const sillaOficina = new officeChair("Negro",5,30,false,false);
console.log(sillaOficina);
sillaOficina.ajustarLaAltura(7);
sillaOficina.ajustarAnguloReclinacion(50);
sillaOficina.generarfactura();

