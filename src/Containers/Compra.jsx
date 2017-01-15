import React, { Component } from 'react'
import ListaCompra from '../Components/ListaCompra'
import FormularioCompra from '../Components/FormularioCompra'

class Compra extends Component {

    constructor(props) {
        
        super(props)

        this.state = {
            produtos: [
                { id: 0, nome: "Arroz", preco: 10, quantidade: 2 },
                { id: 1, nome: "Feijão", preco: 8.50, quantidade: 4 },
                { id: 2, nome: "Açucar", preco: 6.40, quantidade: 2 }
            ]
        }

        this.handleRemove = this.handleRemove.bind(this)
        this.handleInsert = this.handleInsert.bind(this)
    }

    handleRemove( removed ) {

        let newProdutos = this.state.produtos.filter( produto =>
            produto.id != removed.id )

        this.setState( { produtos: newProdutos  } )

    }

    handleInsert( produto ) {

        let newProdutos = this.state.produtos.slice()
        newProdutos.push( produto )
        this.setState( { produtos: newProdutos } )

    }

    render() {

        return (

            <div>

                <h1 className="text-center">Aplicativo de Compras</h1>
                <br />

                <h2 className="text-center">Insira os produtos</h2>
                <FormularioCompra onInsert={ this.handleInsert } />
                <br />

                <h2 className="text-center">Lista de produtos</h2>
                <ListaCompra
                    produtos={ this.state.produtos }
                    onRemove={ this.handleRemove } />

            </div>
        )

    }

}

export default Compra