export const reactSelectInputStyles = {
  control: provided => ({
    ...provided,
    border: '1px solid rgba(17, 16, 28, 0.1)',
    borderRadius: '12px',
    fontSize: '16px',
    lineHeight: '1.25',
    color: '#11101c',
    width: '232px',
    boxShadow: 'none',
  }),
  input: provided => ({
    ...provided,
    padding: '14px 18px',
    margin: 0,
  }),
  singleValue: provided => ({
    ...provided,
    color: '#11101c',
  }),
  menu: provided => ({
    ...provided,
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#f0f0f0' : 'white',
    color: '#11101c',
    padding: '12px 18px',
    fontSize: '16px',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#999',
  }),
};
