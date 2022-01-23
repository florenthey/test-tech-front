import Axios from "axios";

const login = async (body) => {
  try {
    const response = await Axios.post(
      `http://0.0.0.0:4557/api/v1/users/login`,
      body
    );

    return response;
  } catch (error) {
    console.error("error-login", error);
  }
};

export { login };
