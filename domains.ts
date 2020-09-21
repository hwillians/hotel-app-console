export class Client {

    constructor(private _nom: string, private _prenoms: string) {

    }

    get nom() {
        return this._nom;
    }
    
    get prenoms() {
        return this._prenoms;
    }
}



