import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const resUploadPhoto = await uploadPhoto();
    const resCreateUser = await createUser();
    return {
      photo: resUploadPhoto,
      user: resCreateUser,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
