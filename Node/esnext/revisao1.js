{
    var a = 2
    let b = 3
    console.log(b) //let possui contexto de bloco, logo não seria impressa do lado de fora.
}
console.log(a)
    //template String
const produto = 'ipad'
console.log(`${produto} é caro`)

//Destructuring
const [c, d, e, ...resto] = "Bruno"
console.log(c, d, e, resto)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Steffany', idade: 22 }
console.log(`nome: ${nome}\nidade: ${i}`)