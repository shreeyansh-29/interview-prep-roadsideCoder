let person = {name: "Shreeyansh"};

// Polyfill for call()
function printName(age) {
  console.log(`Hello ` + this.name + " has age: " + age);
}

Function.prototype.myCall = function (ctx = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not a callable");
  }

  ctx.fn = this;
  ctx.fn(...args);
};

// Polyfill for apply()
Function.prototype.myApply = function (ctx = {}, args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not a callable");
  }
  if (!Array.isArray(args)) throw new Error("Invalid arguments");
  ctx.fn = this;
  ctx.fn(...args);
};


// Polyfill for bind()
Function.prototype.myBind = function (ctx = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it is not a callable");
  }
  ctx.fn = this;
  return function (...newArgs) {
    return ctx.fn(...args, ...newArgs);
  };
};

// printName.myCall(person, 15);
// printName.myApply(person, [15]);
const res = printName.myBind(person, 15);
res();
