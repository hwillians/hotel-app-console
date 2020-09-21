export class Client {

    constructor(private _nom: string, private _prenoms: string) {
    }

    get nom() {
        return this._nom;
    }

    get prenoms() {
        return this._prenoms;
    }

    cap(chaine: string){
        return chaine.substr(0,1).toUpperCase()+	chaine.substr(1,chaine.length).toLowerCase()		}

    toString(): string {
        return `${this._nom.toUpperCase()} ${this.cap(this._prenoms)}`
    }
}



