function auth(req, res, next) {
  console.log(req.session.email);
  console.log(req.session.id);
  if (req.session.email == undefined) {
    res.status(401);
    res.send("Unauthorized acces");
  } else {
    next();
  }
}

export default { auth };
