import ApiAxios from "./ApiAxios";

export const LogueRequest = async ({ usuario, password }) => {
  return ApiAxios.patch("/users", {
    usuario,
    password,
  });
};
