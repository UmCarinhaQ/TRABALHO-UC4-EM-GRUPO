import { Character } from "./Character";

export class Mage extends Character {

    constructor(name: string) {
        // Cria um mago com seus atributos iniciais
        super(name, "Mago", 80, 20, 5, 50);
    }
}
