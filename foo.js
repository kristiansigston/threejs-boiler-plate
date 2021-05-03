function foo(bar) {
    return 'hello, ' + bar.quuz + ' ' + bar.corge;
}
var barx = {
    quuz: 'abc',
    corge: 5
};
var Grault = /** @class */ (function () {
    function Grault(quux, waldo) {
        this.garply = quux.quuz + ' ' + quux.corge + ' ' + waldo;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
var fred = new Grault(barx, [1, 2, 3]);
console.log(fred.getGarply());
document.body.innerHTML = fred.getGarply();
// let baz: string = 'car'
// console.log(foo(barx))
