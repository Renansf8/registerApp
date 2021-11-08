import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAddressInfo } from '../../redux/actions';
import PropTypes from 'prop-types';

import { ContinerInfo } from './styles';

const FormAddress = ({ takeContact }) => {
  const [cep, setCep] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  return (
    <ContinerInfo>
      <label htmlFor="input-name">
        CEP:
        <input
          id="input-name"
          type="text"
          name="name"
          value={cep}
          onChange={e => setCep(e.target.value)}
        />
      </label>
      <label htmlFor="input-lastName">
        Endereço 1:
        <input
          id="input-lastName"
          type="text"
          name="lastname"
          value={address1}
          onChange={e => setAddress1(e.target.value)}
        />
      </label>
      <label htmlFor="input-email">
        Endereço 2:
        <input
          id="input-email"
          type="text"
          name="email"
          value={address2}
          onChange={e => setAddress2(e.target.value)}
        />
      </label>
      <Link to="/formaddinfo">
        <button onClick={() => takeContact(cep, address1, address2)}>Próximo</button>
      </Link>
    </ContinerInfo>
  );
};

const mapDispatchToProps = dispatch => ({
  takeContact: (cep, address1, address2) =>
    dispatch(addAddressInfo(cep, address1, address2)),
});

FormAddress.propTypes = {
  takeContact: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormAddress);
