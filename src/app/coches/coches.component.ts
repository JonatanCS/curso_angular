import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html'
})

export class CochesComponent{
    public coche: Coche;
    public coches: Array<Coche>;

    constructor(){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche("Seat","52","azul"),
            new Coche("Citroen","100","gris")
        ];
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
}