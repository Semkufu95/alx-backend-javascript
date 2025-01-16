import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const create = createUser();
  const upload = uploadPhoto();
  return Promise.all([create, upload]).then((result) => {
    console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
  }).catch(() => {
    console.error('Signup system offline');
  });
}
