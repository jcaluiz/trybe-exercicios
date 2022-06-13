import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pokemon extends Component {
    render() {
        const { pokemons } = this.props
        const { name, type, averageWeight, image } = pokemons
        const { value, measurementUnit } = averageWeight
        return (
            <section key={name} className="pokemon">
                <p>{name}</p>
                <p>{type}</p>
                <p>{value} {measurementUnit}</p>
                <div className='image'>
                <img src={image} alt={`Imagem do pokemon ${name}`} ></img>
                </div>
            </section>
        )
    }
}

Pokemon.propTypes = {
    pokemons: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string
        }),
        image: PropTypes.string
    })
}

export default Pokemon
