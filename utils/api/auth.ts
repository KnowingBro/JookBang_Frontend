import { instance } from "../instance"

export const postCode = async (code: string) => {
  return (await instance.get(`/login/google?code=${code}`)).data;
}

export const getUserInfo = async () => {
  return (await instance.get('/user', {headers: {Authorization: localStorage.accessToken}})).data
}

export const getImages = async () => {
  return (await instance.get('/image', {headers: {Authorization: localStorage.accessToken}})).data
}