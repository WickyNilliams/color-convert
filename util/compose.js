function compose(a, b) {
  return function(arg) {
    return a(b(arg));
  };
}

export default compose;
