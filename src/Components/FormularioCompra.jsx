import React from 'react'

const { func } = React.PropTypes

const FormularioCompra = ({ onInsert }) => {

    let name, qtt, price

    const handleSubmit = event => {

        event.preventDefault()
        
        onInsert({
            id: Date.now(),
            nome: name.value,
            preco: price.value,
            quantidade: qtt.value
        })

        name.value =
        qtt.value =
        price.value = ""

    }

    return (

        <form className="form-inline clearfix" onSubmit={ handleSubmit }>

            <div className="col-md-5">
                <label htmlFor="name">Nome do produto</label>
                <br />
                <input
                    type="text"
                    name="name"
                    className="form-control w100"
                    ref={ el => name = el } />
            </div>
            
            <div className="col-md-3">
                <label htmlFor="price">Preço</label>
                <br />
                <input
                    type="text"
                    name="price"
                    className="form-control w100"
                    ref={ el => price = el } />
            </div>

            <div className="col-md-2">
                <label htmlFor="qtt">Quantidade</label>
                <br />
                <input
                    type="number"
                    name="qtt"
                    className="form-control w100"
                    ref={ el => qtt = el } />
            </div>
        
            <div className="col-md-2">
                <label>&nbsp;</label>
                <br />
                <button
                    type="submit"
                    className="btn">
                    ADICIONAR</button>
            </div>

        </form>

    )

}

FormularioCompra.propTypes = {
    onInsert: func
}

export default FormularioCompra