/**
 * implement bind
 */

function bind(con) {
  const context = con || window;
  context.fn = this;
  return context;
}

Function.prototype.myBind = bind;