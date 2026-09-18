import { InvertoryService } from "../../services/InventoryService";
import { Weapon } from "../Item/Weapon";

// Classe base para os personagens do jogo
export abstract class Character {

    // Informações básicas do personagem
    private name: string;
    private profession: string;

    // Atributos de combate
    private health: number;
    private attack: number;
    private defense: number;

    // Quantidade de ouro que o personagem possui
    private gold: number;

    // Inventário do personagem
    private InvertoryService: InvertoryService[];

    // Arma equipada pelo personagem
    private weapon: Weapon | null;

    // Construtor responsável por definir os dados iniciais
    constructor(
        name: string,
        profession: string,
        health: number,
        attack: number,
        defense: number,
        gold: number,
        InvertoryService: InvertoryService[]
    ) {
        this.name = name;
        this.profession = profession;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.gold = gold;
        this.InvertoryService = InvertoryService;

        // O personagem começa sem nenhuma arma equipada
        this.weapon = null;
    }

    // Retorna o nome do personagem
    public getName(): string {
        return this.name;
    }

    // Retorna a profissão/classe do personagem
    public getProfession(): string {
        return this.profession;
    }

    // Retorna a vida atual do personagem
    public getHealth(): number {
        return this.health;
    }

    // Retorna o valor de ataque do personagem
    public getAttack(): number {
        return this.attack;
    }

    // Retorna o valor de defesa do personagem
    public getDefense(): number {
        return this.defense;
    }

    // Retorna a quantidade de ouro do personagem
    public getGold(): number {
        return this.gold;
    }

    // Retorna o inventário do personagem
    public getInvertoryService(): InvertoryService[] {
        return this.InvertoryService;
    }

    // Retorna a arma atualmente equipada
    public getWeapon(): Weapon | null {
        return this.weapon;
    }

    // Altera o nome do personagem
    public setName(value: string): void {
        this.name = value;
    }

    // Altera a profissão do personagem
    public setProfession(value: string): void {
        this.profession = value;
    }

    // Altera a quantidade de vida
    public setHealth(value: number): void {
        this.health = value;
    }

    // Altera o valor de ataque
    public setAttack(value: number): void {
        this.attack = value;
    }

    // Altera o valor de defesa
    public setDefense(value: number): void {
        this.defense = value;
    }

    // Altera a quantidade de ouro
    public setGold(value: number): void {
        this.gold = value;
    }

    // Altera o inventário do personagem
    public setInvertoryService(value: InvertoryService[]): void {
        this.InvertoryService = value;
    }

    // Equipa ou remove uma arma do personagem
    public setWeapon(weapon: Weapon | null): void {
        this.weapon = weapon;
    }

    // Faz o personagem atacar outro personagem
    public attackEnemy(enemy: Character): void {

        // Calcula quanto dano será causado
        const damage = this.calculateDamage(enemy);

        // Aplica o dano ao inimigo
        this.applyDamage(enemy, damage);

        // Verifica se o inimigo morreu
        this.checkDeath(enemy);
    }

    // Calcula o dano usando o ataque e a defesa do inimigo
    private calculateDamage(enemy: Character): number {
        // Garante que o dano mínimo seja 1
        return Math.max(1, this.getAttack() - enemy.getDefense());
    }

    // Diminui a vida do inimigo e mostra o dano causado
    private applyDamage(enemy: Character, damage: number): void {
        enemy.setHealth(enemy.getHealth() - damage);

        console.log(`${this.getName()} caused ${damage} damage!`);
    }

    // Verifica se a vida chegou a zero
    private checkDeath(enemy: Character): void {

        // Se a vida for menor ou igual a zero, o personagem morreu
        if (enemy.getHealth() <= 0) {
            enemy.setHealth(0);

            console.log(`${enemy.getName()} died!`);
        }
    }

    // Mostra as informações do personagem no terminal
    public showInfo(): void {
        console.log(`
==================================================
                     CHARACTER
==================================================

Name: ${this.getName()}

Class: ${this.getProfession()}

Health: ${this.getHealth()}

Attack: ${this.getAttack()}

Defense: ${this.getDefense()}

Gold: ${this.getGold()}

Weapon: ${this.weapon ? this.weapon.getName() : "None"}

==================================================
        `);
    }
}