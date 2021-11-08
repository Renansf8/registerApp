import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchList } from '../../redux/actions';
import PropTypes from 'prop-types';

import { Container, ButtonsContianer } from './styles';

const Sidebar = ({ listToggle }) => {
  return (
    <Container>
      <ButtonsContianer>
        <Link to="/forminfo">
          <button>+ Cadastrar</button>
        </Link>
        <button onClick={listToggle}>Clientes</button>
      </ButtonsContianer>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  listToggle: () => dispatch(switchList()),
});

Sidebar.propTypes = {
  listToggle: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Sidebar);
