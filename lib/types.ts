export interface TwitchAccesstokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: "bearer";
}
