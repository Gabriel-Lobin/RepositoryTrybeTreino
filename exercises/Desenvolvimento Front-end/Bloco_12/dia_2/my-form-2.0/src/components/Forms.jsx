import React from 'react';

export default class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
    }
  }

  handleChange = (event) => {
    const nome = event.target.name;
    this.setState(() => {
      return {
        [nome]: event.target.value,
      }
    })
  }

  UpperCase = (event) => {  
    this.setState(() => {
      const valor = event.target.value;
      const convert = valor.toUpperCase();
      return { name: convert, }
    })
  }
  render() {
    const { name, email, cpf, adress } = this.state;
    return (
      <form className="forms" >
        <h1>Formulário bullet</h1>
          Nome
        <label htmlFor="name">
          <input
            type="text"
            value={ name }
            name="name"
            id="name"
            maxlength="40"
            onChange={ this.UpperCase }
            required
          />
        </label>
          Email
        <label htmlFor="email">
          <input
            type="email"
            value={ email }
            name="email"
            id="email"
            maxlength="50"
            required
            onChange={ this.handleChange }
          />
        </label>
          CPF
        <label htmlFor="cpf">
          <input
            type="text"
            value={cpf}
            name="cpf"
            id="cpf"
            maxLength="11"
            required 
            onChange={this.handleChange}
            />
        </label>
          Endereço
        <label htmlFor="adress">
          <input
            type="text"
            value={adress}
            name="adress"
            id="adress"
            maxLength="200"
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
