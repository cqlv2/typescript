console.log("meteo app");
class Meteo{
  constructor(private _ville:string, private _temperature:number){
  }
  toString(): string{
    return `${this._ville} - ${this._temperature}°C`
  }

}
let nanteCeMatin = new Meteo('Nantes', 12);
console.log(nanteCeMatin.toString());
