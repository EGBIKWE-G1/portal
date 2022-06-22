export const constant = {
  tokenName: "WOO-WEB",
  expiryName: "WOO-EXP",
  profileName: "WOO-PRF",
  baseUrl: "https://apis.woozeee.com/api/v1",
  csbaseUrl: "https://csapis.woozeee.com/api/v1",
  smbaseUrl: "https://smoneymattersapis.woozeee.com/api/v1",
};

export function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}
