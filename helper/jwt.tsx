let jwt = require("jsonwebtoken");
export const makeToken = (data = "", secret = "mytoken", expireTime = "1h") => {
  let token = jwt.sign(
    {
      data,
    },
    secret,
    { expiresIn: expireTime }
  );
  return token;
};
export const decodeToken = (token:String,secret = "mytoken") => {
  let decoded=jwt.verify(token,secret);

  return decoded?.data?? {};
};
