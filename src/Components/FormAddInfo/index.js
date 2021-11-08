import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addAditionalInfo } from '../../redux/actions';
import PropTypes from 'prop-types';

import { ContinerInfo } from './styles';

const registerSuccess = () => {
  alert('Registro feito com sucesso!');
};

const FormAddInfo = ({
  takeAdditional,
  name,
  lastName,
  email,
  phone,
  cep,
  address1,
  address2,
}) => {
  const [birth, setBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [income, setIncome] = useState('');

  const setRegister = () => {
    const newRegister = {
      name,
      lastName,
      email,
      phone,
      cep,
      address1,
      address2,
      birth,
      cpf,
      income,
    };

    const register = JSON.parse(localStorage.getItem('register'));

    if (register) {
      localStorage.setItem('register', JSON.stringify([...register, newRegister]));
    } else {
      localStorage.setItem('register', JSON.stringify([newRegister]));
    }
  };

  return (
    <ContinerInfo>
      <label htmlFor="input-name">
        Data Nascimento:
        <input
          id="input-name"
          type="text"
          name="name"
          value={birth}
          onChange={e => setBirth(e.target.value)}
        />
      </label>
      <label htmlFor="input-lastName">
        CPF:
        <input
          id="input-lastName"
          type="text"
          name="lastname"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
      </label>
      <label htmlFor="input-email">
        Renda Mensal:
        <input
          id="input-email"
          type="text"
          name="email"
          value={income}
          onChange={e => setIncome(e.target.value)}
        />
      </label>
      <Link to="/">
        <button
          onClick={() => {
            registerSuccess(), takeAdditional(birth, cpf, income), setRegister();
          }}
        >
          Salvar
        </button>
      </Link>
    </ContinerInfo>
  );
};

const mapDispatchToProps = dispatch => ({
  takeAdditional: (birth, cpf, income) => dispatch(addAditionalInfo(birth, cpf, income)),
});

const mapStateToProps = state => ({
  name: state.info.formInfo.name,
  lastName: state.info.formInfo.lastName,
  email: state.info.formInfo.email,
  phone: state.info.formInfo.phone,
  cep: state.info.addressInfo.cep,
  address1: state.info.addressInfo.address1,
  address2: state.info.addressInfo.address2,
});

FormAddInfo.propTypes = {
  takeAdditional: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  income: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddInfo);
