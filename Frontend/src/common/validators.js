const checked = (value, options) => {
  if (value !== true) {
    return options.message || 'tienen que ser aceptadas';
  }
};

export default {
  checked
};
