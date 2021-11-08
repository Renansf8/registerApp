export const ADD_FORM_INFO = 'ADD_FORM_INFO';
export const ADD_ADDRESS_INFO = 'ADD_ADDRESS_INFO';
export const ADD_ADITIONAL_INFO = 'ADD_ADITIONAL_INFO';
export const SWITCH_LIST = 'SWITCH_LIST';
export const ADD_INFO = 'ADD_INFO';

export const addFormInfo = (name, lastName, email, phone) => ({
  type: ADD_FORM_INFO,
  payload: {
    name,
    lastName,
    email,
    phone,
  },
});

export const addAddressInfo = (cep, address1, address2) => ({
  type: ADD_ADDRESS_INFO,
  payload: {
    cep,
    address1,
    address2,
  },
});

export const addAditionalInfo = (birth, cpf, income) => ({
  type: ADD_ADITIONAL_INFO,
  payload: {
    birth,
    cpf,
    income,
  },
});

export const switchList = () => ({
  type: SWITCH_LIST,
});

export const addInfo = value => ({
  type: ADD_INFO,
  payload: value,
});
