export const timePickerStyles = {
  control: (base, state) => ({
    ...base,
    minWidth: 70,
    height: 38,
    borderRadius: 8,
    borderColor: state.isFocused ? '#2684FF' : '#ccc',
    boxShadow: state.isFocused ? '0 0 0 1px #2684FF' : 'none',
    '&:hover': {
      borderColor: '#2684FF',
    },
  }),
  menu: base => ({
    ...base,
    borderRadius: 10,
    padding: 5,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? '#2684FF' : state.isFocused ? '#f0f0f0' : 'white',
    color: state.isSelected ? 'white' : 'black',
    padding: 10,
  }),
};
