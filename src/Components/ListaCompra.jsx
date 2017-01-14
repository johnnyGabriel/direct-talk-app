import React from 'react'
import ListaCompraItem from './ListaCompraItem.jsx'

const ListaCompras = ({ produtos, onRemove }) => {

    const emptyList = (list) => {

        if (list.length == 0)
            return (
                <tr>
                    <td colSpan="5" className="text-center">Nenhum produto na lista</td>
                </tr>
            )

    }

    return (

        <table className="table table-hover">

            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Valor Unitário</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>

                { emptyList( produtos ) }

                { produtos.map( produto =>
                    <ListaCompraItem
                        key={ produto.id }
                        produto={ produto }
                        onRemove={ onRemove } /> )}        

                <tr>
                    <td colSpan="3"></td>
                    <td colSpan="2">
                        { produtos.reduce( (acc, produto) => {
                            return acc + produto.preco * produto.quantidade
                        }, 0 ) }
                    </td>
                </tr>

            </tbody>

        </table>

    )

}

ListaCompras.propTypes = {
    produtos: React.PropTypes.array.isRequired,
    onRemove: React.PropTypes.func
}

export default ListaCompras