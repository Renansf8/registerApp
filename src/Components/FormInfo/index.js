import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFormInfo } from '../../redux/actions';
import PropTypes from 'prop-types';

import { ContinerInfo } from './styles';

const FormInfo = ({ takeName }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <ContinerInfo>
      <label htmlFor="input-name">
        Nome:
        <input
          id="input-name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label htmlFor="input-lastName">
        Sobrenome:
        <input
          id="input-lastName"
          type="text"
          name="lastname"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <label htmlFor="input-email">
        E-mail:
        <input
          id="input-email"
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="input-phone">
        Telefone:
        <input
          id="input-phone"
          type="text"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </label>
      <Link to="/formaddress">
        <button onClick={() => takeName(name, lastName, email, phone)}>Próximo</button>
      </Link>
    </ContinerInfo>
  );
};

const mapDispatchToProps = dispatch => ({
  takeName: (name, lastName, email, phone) =>
    dispatch(addFormInfo(name, lastName, email, phone)),
});

FormInfo.propTypes = {
  takeName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormInfo);
