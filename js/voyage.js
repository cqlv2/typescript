"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
return this._nom;
get;
prix();
return this._prix;
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour("aze", 123));
        this._sejours.push(new Sejour("qsd", 234));
        this._sejours.push(new Sejour("wxc", 345));
        this._sejours.push(new Sejour("rty", 456));
        this._sejours.push(new Sejour("fgh", 567));
        this._sejours.push(new Sejour("vbn", 678));
    }
    SejourService.prototype.findByName = function (name) {
        this._sejours.forEach(function (sejour) {
            if (sejour.nom === name) {
                console.log(sejour);
                return sejour;
            }
        });
    };
    return SejourService;
}());
var sejourServ = new SejourService();
console.log(sejourServ.findByName("qsd"));
