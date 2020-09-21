class Sejour{
  constructor(private _nom:string , private _prix: number){
  }
  get nom() return this._nom;
  get prix() return this._prix;

}

class SejourService{
  private _sejours:Sejour[] = [];
  constructor(){
    this._sejours.push(new Sejour("aze",123));
    this._sejours.push(new Sejour("qsd",234));
    this._sejours.push(new Sejour("wxc",345));
    this._sejours.push(new Sejour("rty",456));
    this._sejours.push(new Sejour("fgh",567));
    this._sejours.push(new Sejour("vbn",678));
  }

  findByName(name:string):Sejour{
    this._sejours.forEach(sejour => {
      if (sejour.nom===name) {
        console.log(sejour);
        return sejour;
      }
    });
  }
}

const sejourServ:SejourService=new SejourService();

console.log(sejourServ.findByName("qsd"));
