export function generateRedirect(): string {
  const clientId = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

  console.log(clientId, redirectUri);

  if (!clientId || !redirectUri) {
    throw new Error(
      "Please populate NEXT_PUBLIC_TWITCH_CLIENT_ID and NEXT_PUBLIC_REDIRECT_URI at build"
    );
  }

  return "https://id.twitch.tv/oauth2/authorize?response_type=code&client_id={CLIENT_ID}&redirect_uri={REDIRECT_URL}&force_verify=true"
    .replace("{CLIENT_ID}", clientId)
    .replace("{REDIRECT_URL}", redirectUri);
}
