import React from 'react'

const FormularioCompra = ({ onInsert }) => {

    let name, qtt

    const handleSubmit = event => {

        event.preventDefault()
        
        onInsert({
            id: Date.now(),
            nome: name.value,
            quantidade: qtt.value
        })

    }

    return (

        <form className="form-inline" onSubmit={ handleSubmit }>

            <div className="form-group">

                <label htmlFor="name">Nome do produto</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    ref={ el => name = el } />
            
                <label htmlFor="qtt">Quantidade</label>
                <input
                    type="number"
                    name="qtt"
                    className="form-control"
                    ref={ el => qtt = el } />

                <button
                    type="submit"
                    className="btn">
                    ADICIONAR</button>

            </div>

        </form>

    )

}

FormularioCompra.propTypes = {
    onInsert: React.PropTypes.func
}

export default FormularioCompra