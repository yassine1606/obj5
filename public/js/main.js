class Lieux {
    constructor(nom,contenu){
        this.nom = nom;
        this.contenu = contenu;
    }
}
let maison = new Lieux('maison',['contenu'])

class Epicerie extends Lieux{
    constructor(nom,contenu,ingredient){
        super(nom,contenu)
        this.ingredient = ingredient;
    }
}
let epicerie = new Epicerie('epicerie','ingredient',[])

class Cuisine extends Epicerie{
    constructor(nom,contenu,ingredient){
        super(nom,contenu,ingredient)
    }
}
let cuisine = new Cuisine('cuisine',['yoyo'],['iyooooo'])



class Ingredients{
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
let poivron = new  Ingredients('poivron','entier',1)
let oignon = new  Ingredients('oignon','entier',2)
let oeuf = new Ingredients('oeuf','entier',4)
let epice = new Ingredients('epice','moulu',3.25)
let paprika = new Ingredients('paprika','moulu',1.5)
let fromage = new Ingredients('fromage','coupé',1.6)

class Personne {
    constructor(nom,lieu,argent,panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
    }
    se_deplacer(x){

    }
    payer(x){

    }
    couper(x,y){
        
    }
}


