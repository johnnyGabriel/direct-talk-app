import React from 'react'

const ListaCompraItem = ({ produto, onRemove }) => (

    <tr>
        <td> { produto.nome } </td>
        <td> { produto.quantidade } </td>
        <td> { produto.preco } </td>
        <td> { produto.preco * produto.quantidade } </td>
        <td>
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={ onRemove.bind( {}, produto ) }>
                    <span aria-hidden="true">&times;</span>
            </button>
        </td>
    </tr>

)

export default ListaCompraItem