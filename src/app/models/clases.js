'use strict'

export class Character {
    constructor(name, img){
        this.name = name;
        this.img = img;
    }
    getCharactersImg() {
        return this.img;
      }
    getCharactersName() {
        return this.name;
      }
}

export class DetailCharacter extends Character{
    constructor(name, img, id, role, specie, origin, status){
        super(name, img);
            this.id = id;
            this.origin = origin;
            this.specie = specie;
            this.role = role;
            this.status = status;
    } 
    getCharactersId(){
        return this.id;
    }      
    getCharactersRole(){
        return this.role;
    }    
    getCharactersSpecie(){
        return this.specie;
    }    
    getCharactersOrigin(){
        return this.origin;
    }    
    getCharactersStatus(){
        return this.status;
    } 
}


export class Error {
    static showError(error){
        alert ('El personaje que buscas no existe');
    }
} 
