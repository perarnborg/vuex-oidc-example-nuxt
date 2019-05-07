export const oidcSettings = {
  authority: 'https://accounts.google.com',
  clientId: '459300396575-3ruj8l8jn69pcgst8rgkqnk6g43gbc78.apps.googleusercontent.com',
  redirectUri: 'http://localhost:3000/oidc-callback',
  responseType: 'id_token token',
  scope: 'openid email',
  automaticSilentRenew: true,
  silentRedirectUri: 'http://localhost:3000/silent-renew-oidc.html'
}
