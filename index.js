module.exports = function create(opts) {
  if (!opts.ns) {
    throw new Error('opts.ns is needed!');
  }
  const ns = opts.ns;
  return function* (next) {
    const ctx = ns.createContext();
    ns.enter(ctx);
    try {
      yield* next;
    } finally {
      ns.exit(ctx);
    }
  };
};
