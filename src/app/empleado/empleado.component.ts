import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = 'Título del componente de empleado';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo: boolean;
    public color: string;

    constructor(){
        this.empleado = new Empleado('Javier González', 45, 'Cocinero', true);
        this.trabajadores = [
            new Empleado('Manuela Sixfingers', 61, 'Consultora', false),
            new Empleado('James Kakarotto', 27, 'Jurista', true),
            new Empleado('Marisol Sampaoli', 19, 'Secretaria', true)
        ];
        this.trabajador_externo = false;
        this.color = 'red';
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }
   
   cambiarExterno(valor){
       this.trabajador_externo = valor;
   }
}
   
    /*public nombre: string;
    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos:Array<any> = ['Carpientero', 44, 'Fontanero'];
    comodin:any;

    constructor(){*/ /* Constructor de la clase */
       /* this.nombre = 'Javier Gutiérrez';
        this.edad = 44;
        this.mayorDeEdad = true;
        this.comodin = 'Sí';
    } 

    ngOnInit(){*/ /* Esta función se establece para ejecutar métodos fuera del constructor */
       /* this.cambiarNombre();
        this.cambiarEdad(45);
        console.log(this.nombre+" "+this.edad);*/

        /* Variables y alcance */
       /* var uno = 8;
        var dos = 15;

        if (uno === 8){
            let uno = 3;
            var dos = 20;

            console.log("Dentro del if: uno = "+uno+" - dos = "+dos);
        }

        console.log("Fuera del if: uno = "+uno+" - dos = "+dos);*/

        /* Si declaramos una variable con 'var' el valor de ésta cambiará 
        globalmente. En cambio si utilizamos 'let' el valor de ésta sólo cambia
        dentro del condicional. Por tanto su diferencia es el alcance de la declaración */
  /*  }

    cambiarNombre(){
        this.nombre = "Gonzalo javanillas";
    }

    cambiarEdad(edad){
        this.edad = edad;
    }
}*/

