import { Enemy } from "./Enemy";

export class Goblin extends Enemy {

    constructor() {
        // Cria um Goblin com seus atributos
        super("Goblin", 30, 7, 2);
    }
}