export default {
  SET_CONFIG(state, data) {
    var config = {};
    for (var i = 0; i < data.length; i ++) {
      config[data[i].key] = data[i].value;
    }
    state.config = config;
  }
}
