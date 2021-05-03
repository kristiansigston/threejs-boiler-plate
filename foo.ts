type Quux = { // or type instead of interface
  quuz: string
  corge: number
}

function foo(bar: Quux) {
  return 'hello, ' + bar.quuz + ' ' + bar.corge
}

let barx = <Quux>{
  quuz: 'abc',
  corge: 5
}


class Grault {
  private garply: string

  constructor(quux: Quux, waldo: number[]) {
    this.garply = quux.quuz + ' ' + quux.corge + ' ' + waldo
  }

  public getGarply() {
    return this.garply
  }

}

let fred: Grault = new Grault(barx, [1, 2, 3])

console.log(fred.getGarply())


document.body.innerHTML = fred.getGarply()
// let baz: string = 'car'

// console.log(foo(barx))
