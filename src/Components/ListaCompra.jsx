import React from 'react'
import ListaCompraItem from './ListaCompraItem.jsx'

const { array, func } = React.PropTypes

const ListaCompras = ({ produtos, onRemove }) => {

    const emptyList = (list) => {

        if (list.length == 0)
            return (
                <tr>
                    <td colSpan="6"
                        className="text-center">
                        Nenhum produto na lista
                    </td>
                </tr>
            )

    }

    const totalCompra = (produtos) => {

        return produtos.reduce( (acc, produto) => {
            return acc + (produto.preco * produto.quantidade)
        }, 0 )

    }

    const transformProdutos = (produtos) => {

        return produtos.map( produto =>
            <ListaCompraItem
                key={ produto.id }
                produto={ produto }
                onRemove={ onRemove } /> )

    }

    return (

        <table className="table table-hover">

            <thead>
                <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Valor Unitário</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>

                { emptyList( produtos ) }

                { transformProdutos(produtos) }        

                <tr>
                    <td colSpan="4" className="text-right">Valor Total</td>
                    <td colSpan="2">
                        R$ { totalCompra(produtos) }
                    </td>
                </tr>

            </tbody>

        </table>

    )

}

ListaCompras.propTypes = {
    produtos: array.isRequired,
    onRemove: func
}

export default ListaCompras