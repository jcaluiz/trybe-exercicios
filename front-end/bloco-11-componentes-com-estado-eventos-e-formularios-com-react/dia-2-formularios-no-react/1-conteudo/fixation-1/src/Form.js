import React, { Component } from "react";

class Form extends Component {
    
    state = {
        fullName: '',
        juice: '',
        check: false,
        observations: ''
    }

    handleChange = ({target}) => {
        const { name, value } = target;
        this.setState({
            [name]: (target.type === 'checkbox') ? target.checked : value,
        })
    }
    
    render() {
        return(
            <form>
                <fieldset>
                  <h3>Nome Completo</h3>
                  <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange}></input>
                  <h3>Suco</h3>
                  <select name="juice" value={this.state.juice} onChange={this.handleChange}>
                      <option>Laranja</option>
                      <option>Uva</option>
                      <option>Morango</option>
                  </select>
                  <h3>Comparecimento</h3>
                  <input type="checkbox" id="input-checkbox"name="check" value={this.state.check} onChange={this.handleChange}></input>
                  <label for="input-checkbox">Deseja participar da convenção?</label>
                  <h3>Deixe suas observações</h3>
                  <textarea cols="30" rows="10" name="observations" value={this.state.observations} onChange={this.handleChange}></textarea>
                </fieldset>
            </form>
        )
    }
}

export default Form;
