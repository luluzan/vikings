const Soldier = require("../soldier/Soldier.js");

class Saxon extends Soldier {
    constructor(health, strength) {
    super(health, strength);
    }
    attack(){
        return(this.strength);
    }
    receiveDamage(damage){
        this.health -=damage;
        if(health >0){
            return 'A Saxon has received ${damage} points of damage';
        }else{
            return 'A Saxon has dies in combat' ;
        }
    }

}

module.exports = Saxon;
