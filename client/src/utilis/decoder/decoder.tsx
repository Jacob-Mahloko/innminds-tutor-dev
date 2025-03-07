import { jwtDecode } from "jwt-decode";

export interface IDecodedToken {
  [AbpTokenProperies.claims]: string;
  sub: string;
  jti: string;
  iat: string;
  nbf: string;
  exp: string;
  iss: string;
  aud: string;
  [AbpTokenProperies.nameidentifier]: string;
  [AbpTokenProperies.name]: string;
  [AbpTokenProperies.emailaddress]: string;
  [AbpTokenProperies.securitystamp]: string;
  [AbpTokenProperies.role]: string;
}

export enum AbpTokenProperies {
  claims = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/",
  sub = "sub",
  jti = "jti",
  iat = "iat",
  nbf = "nbf",
  exp = "exp",
  iss = "iss",
  aud = "aud",
  nameidentifier = `${claims}nameidentifier`, // userId
  name = `${claims}name`,
  emailaddress = `${claims}emailaddress`,
  securitystamp = "AspNet.Identity.SecurityStamp",
  role = `http://schemas.microsoft.com/ws/2008/06/identity/claims/role`,
}

// this function will take in the token and use the function that jwt-token library provides to use for decode a jwt
export const decodeToken = (accessToken: string): IDecodedToken => {
  return jwtDecode(accessToken);
};

export const getRole = (loginObj: any): string => {
  if (loginObj) {
    const decoded = decodeToken(loginObj.accessToken);
    return `${decoded[AbpTokenProperies.role]}`.toLocaleLowerCase();
  }

  return "client";
};