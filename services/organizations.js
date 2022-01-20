import Axios from "axios";

const getOrganizations = async (skip, limit) => {
  try {
    const data = await Axios.get(
      `http://0.0.0.0:4557/api/v1/organizations/?skip=${skip}&limit=${limit}`
    );

    return data.data;
  } catch (error) {
    console.error("error-get-organizations", error);
  }
};

const getOrganization = async (id) => {
  try {
    const data = await Axios.get(
      `http://0.0.0.0:4557/api/v1/organizations/${id}`
    );

    return data.data;
  } catch (error) {
    console.error("error-get-organization", error);
  }
};
export { getOrganizations, getOrganization };
