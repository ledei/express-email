import { findUser } from "../service/emailService.js";

async function login(req, res) {
  let user = req.body;
  const fetchUser = await findUser(user.email);
  if (fetchUser == null) {
    res.status(404);
    res.send("user not found");
  } else if (
    fetchUser.email == user.email &&
    fetchUser.password == user.password
  ) {
    req.session.email = fetchUser.email;
    console.log(req.session.email);
    console.log(req.session.id);
    res.status(200).json(fetchUser);
  } else {
    res.status(401);
    res.send("error 401");
  }
}

function logout(req, res) {
  req.session.email = undefined;

  res.send("logged out");
}

export default { login, logout };
