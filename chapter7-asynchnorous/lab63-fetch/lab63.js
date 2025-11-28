console.log("hello lab 63");

const respose = fetch("http://localhost:8000/users");
console.log(respose);
respose.then((data) => {
  console.log("Data from resolve: ", data);
});

// Cấu trúc để chuyển đổi từ repsonse:Promise sang data dạng sử dụng được
respose.then((data) => data.json()).then((data) => console.log(data));
