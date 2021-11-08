import { ADD_FORM_INFO, ADD_ADDRESS_INFO, ADD_ADITIONAL_INFO } from '../actions';

const INITIAL_STATE = {
  formInfo: {
    name: '',
    lastName: '',
    email: '',
    phone: '',
  },
  addressInfo: {
    cep: '',
    address1: '',
    address2: '',
  },
  additionalInfo: {
    birth: '',
    cpf: '',
    income: '',
  },
};

const infoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FORM_INFO:
      return {
        ...state,
        formInfo: {
          name: action.payload.name,
          lastName: action.payload.lastName,
          email: action.payload.email,
          phone: action.payload.phone,
        },
      };
    case ADD_ADDRESS_INFO:
      return {
        ...state,
        addressInfo: {
          cep: action.payload.cep,
          address1: action.payload.address1,
          address2: action.payload.address2,
        },
      };
    case ADD_ADITIONAL_INFO:
      return {
        ...state,
        additionalInfo: {
          birth: action.payload.birth,
          cpf: action.payload.cpf,
          income: action.payload.income,
        },
      };
    default: {
      return state;
    }
  }
};

export default infoReducer;
