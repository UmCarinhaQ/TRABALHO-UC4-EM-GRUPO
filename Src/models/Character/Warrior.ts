import { Character } from "./Character";

export class Warrior extends Character {

    constructor(name: string) {
        // Cria um guerreiro com seus atributos iniciais
        super(name, "Guerreiro", 120, 15, 10, 50);
    }
}