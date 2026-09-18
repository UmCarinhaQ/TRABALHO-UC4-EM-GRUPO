export abstract class Enemy {

    private name: string;
    private health: number;
    private attack: number;
    private defense: number;

    constructor(name: string, health: number, attack: number, defense: number) {
        // Define os atributos iniciais do inimigo
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }

    // Retorna o nome do inimigo
    public getName(): string {
        return this.name;
    }

    // Retorna a vida do inimigo
    public getHealth(): number {
        return this.health;
    }

    // Retorna o ataque do inimigo
    public getAttack(): number {
        return this.attack;
    }

    // Retorna a defesa do inimigo
    public getDefense(): number {
        return this.defense;
    }

    // Aplica dano ao inimigo
    public takeDamage(amount: number): void {
        this.health -= amount;

        // Impede que a vida fique negativa
        if (this.health < 0) {
            this.health = 0;
        }
    }

    // Verifica se o inimigo está vivo
    public isAlive(): boolean {
        return this.health > 0;
    }
}