import api from "./axios.lib";
const loginUser = async (email: string, password: string) => {
    console.log("====")
  const response = await api.post("/user/login-user", { email, password });
  console.log(response);

  return response.data;
};

export { loginUser };
