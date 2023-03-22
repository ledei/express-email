export default async function FetchEmail() {
  let result = await fetch("http://127.0.0.1:3030/email/user", {
    credentials: "same-origin",
  });
  let users = await result.json();

  console.log(users);

  return users;
}
