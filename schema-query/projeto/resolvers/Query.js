const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Boa tarde!'
    },
    horaAtual() {
        const hora = new Date().getHours().toString()
        const min = new Date().getMinutes().toString()
        const seg = new Date().getSeconds().toString()

        return `${hora}:${min}:${seg}`
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Mariana Lemos',
            email: 'mariana.lemos@fariasbrito.com.br',
            idade: 28,
            salario_real: 2500,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Notebook Acer Nitro 5 52BW',
            preco: 3199.99,
            desconto: 0.15
        }
    },
    numerosMegaSena() {
        const asc = (a, b) => a - b

        return Array(6).fill(0)
            .map(() => parseInt(Math.random() * 60 + 1))
            .sort(asc)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const usuario = usuarios.filter(usuario => usuario.id === id)
        return usuario ? usuario[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const perfil = perfis.filter(perfil => perfil.id === id)
        return perfil ? perfil[0] : null
    }
}