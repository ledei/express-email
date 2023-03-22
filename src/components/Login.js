import { SendJson } from "./SendJson";

export default async function Login(email, password, setUser) {
  const data = {
    email: email,
    password: password,
  };

  const user = await SendJson(
    `http://127.0.0.1:3030/email/login`,
    "POST",
    data
  );
  console.log(user);
}
