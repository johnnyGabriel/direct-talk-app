import React, { Component } from 'react'
import ListaCompra from '../Components/ListaCompra'

class Compra extends Component {

    constructor(props) {
        super(props)
        // this.produtos = []
        this.state = {
            produtos: [
                { id: 0, nome: "Arroz", preco: 10, quantidade: 2 },
                { id: 1, nome: "Feijão", preco: 8.50, quantidade: 4 },
                { id: 2, nome: "Açucar", preco: 6.40, quantidade: 2 }
            ]
        }

        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove( removed ) {

        console.log(removed, this.state.produtos, this);

        let newProdutos = this.state.produtos.filter( produto =>
            produto.id != removed.id )

        console.log(newProdutos);

        this.setState( { produtos: newProdutos  } )

    }

    render() {

        return (
            <ListaCompra
                produtos={ this.state.produtos }
                onRemove={ this.handleRemove } />
        )

    }

}

export default Compra