console.log("hello lab 62!");

// Hàm setTimeOut có 2 tham số chính là đầu tiên là param1:function, param2:delay tính bằng mili giây
// setTimeOut mặc định có tính async tức là tính bất đồng

const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2 with promise");
      resolve("complete");
    }, 2 * 1000);
  });
};
// Cố gắng đưa hàm bất đồng bộ thành đồng bộ nhờ promise
const test = myPromise();
console.log("promise state: ", test);
console.log("=========== promise appliance");
console.log("1");
myPromise().then((resolveMessage) => {
  console.log("resolveMessage: ", resolveMessage);
  console.log("3");
});
