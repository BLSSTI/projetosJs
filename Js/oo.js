const carro = {
    Marca: 'Ford',
    funcao1() {
        console.log(Marca + 'Teste');
    }

}
carro.funcao1 = (carro.Marca);
console.log(funcao1);