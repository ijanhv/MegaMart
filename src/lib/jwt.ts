import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "24h",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, options);
  // set token to cookies
  console.log("this is token", token);

  return token;
}

export function verifyJwt(token: string) {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!);
    console.log("Hi", decoded);
    return decoded as JwtPayload;
  } catch (error) {
    console.log("Token Expired", error);
    return null;
  }
}
export async function validateAccessToken(
  request: Request
): Promise<number | null> {
  const accessToken = request.headers.get("authorization") || localStorage.getItem("accessToken");

  if (!accessToken || !verifyJwt(accessToken)) {
    console.log("No access token");
    return new Response(
      JSON.stringify({
        error: "unauthorized",
      }),
      {
        status: 401,
      }
    ).status;
  }
  const decodedToken = verifyJwt(accessToken);
  // console.log("decodedToken", decodedToken);

  return decodedToken?.id;
}
