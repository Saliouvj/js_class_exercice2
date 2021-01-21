// EXO 1

class Lieu {
    constructor (nom, personnes) {
        this.nom = nom
        this.personnes = [personnes]
    }
}

let molengeek = new Lieu ('molengeek')
let snack = new Lieu ('snack')
let maison = new Lieu ('maison')

class Personne {
    constructor (nom, prenom, argent) {
        this.nom = nom
        this.prenom = prenom
        this.argent = argent
        seDeplacer = () => {

        }
    }
}

let maxence = new Personne ('lemaire', 'maxence', 20)

class Bus {
    constructor (personnes, caisse) {
        this.personnes = [personnes]
        this.caisse = caisse
        embarquer = () => {
            if (Personne.argent > 2.8) {
                return (Personne.argent - 2.8)
            } else {
                return "Pas de bus"
            }
        }
    }
}

let bus = new Bus

// EXO 2

