/**
 * implement call
 */

function call(con, ...argumentsArray) {
  const context = con || window;
  context.fn = this;
  const result = context.fn(...argumentsArray);
  context.fn = undefined;
  return result;
}

Function.prototype.myCall = call;