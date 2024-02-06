//Polyfill for Promise

function myPromise(executor) {
  let isFullfilled = false,
    isCalled = false,
    onResolve,
    onReject,
    value,
    isRejected = false;

  this.then = function (callback) {
    onResolve = callback;

    if (isFullfilled && !isCalled) {
      // for sync
      console.log("inside then");
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onResolve === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    console.log(error);
  }
}

const res = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
});

res
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

// const res = new Promise((res, rej) => {
//   res("Hello");
// });

// res.then((res) => console.log(res)).catch((err) => console.log(err));
