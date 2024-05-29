import { request } from "./utils/request";
// import { validateDataByType } from "./utils/validate";
// 测试校验
// validateDataByType("UserInfoAlias", {
//   id: 123,
//   token: "dkhasdkjasdasdasdasdknlknasda",
// });

const fetchData = async () => {
  try {
    // 使用axios进行请求
    const axiosData = await request("http://localhost:8000/users");
    console.log("Axios Data:", axiosData);

    // 使用fetch进行请求
    const fetchData = await request("http://localhost:8000/labels");
    console.log("Fetch Data:", fetchData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
