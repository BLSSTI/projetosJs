//ES8: object.values/object.entries

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhoria na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola() {
        return ' Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

//class

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())