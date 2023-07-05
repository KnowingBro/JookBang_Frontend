import { instance } from "../instance"

export const postCode = async (code: string) => {
  return (await instance.get(`/login/google?code=${code}`)).data;
}