
let listaDePets = ['nuno','glaucio', 'clemente'];

const setPet = (nome) => {
    listaDePets.push(nome);
    return "Pet Cadastrado com Sucesso!";
}

const getPets = () => {
    let petsFormatados = "";
    for (pet of listaDePets) {
        petsFormatados += `
            -----------------
            Nome do Pet: ${pet}
        `
    }
    return petsFormatados;
}

module.exports = {setPet, getPets};