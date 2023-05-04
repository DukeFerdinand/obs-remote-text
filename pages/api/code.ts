import { createJWT } from "@/lib/jwt";
import { TwitchAccesstokenResponse } from "@/lib/types";
import Cookies from "cookies";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const redirectCode = req.query.code;

  if (!redirectCode) {
    res.redirect("/hmm");
    return;
  }

  const cookies = new Cookies(req, res);

  const twitchResponse: TwitchAccesstokenResponse = await fetch(
    "https://id.twitch.tv/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code: redirectCode as string,
        client_id: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!,
        client_secret: process.env.TWITCH_CLIENT_SECRET!,
        grant_type: "authorization_code",
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
      }),
    }
  ).then((res) => res.json());

  const accessJwt = createJWT(twitchResponse);

  const _24hours = 24 * 60 * 60 * 1_000; // 24 hours * 60 minutes * 60 seconds * 1,000 ms

  cookies.set("ort-token", accessJwt, {
    httpOnly: true,
    expires: new Date(
      new Date().getTime() + twitchResponse.expires_in + _24hours
    ),
  });

  res.redirect(302, "/dashboard");
  return;
};

export default handler;
