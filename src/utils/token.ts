// export interface TokenResponse {
//   access_token: string;
//   // refresh_token: string;
//   environment: string;
// }

// export const token = {
//   getAccess: (): string | null =>
//     localStorage.getItem("access_token"),

//   set: (data: TokenResponse) => {
//     localStorage.setItem("access_token", data.access_token);
//     // localStorage.setItem("refresh_token", data.refresh_token);
//     localStorage.setItem("environment", data.environment);
//   },

//   clear: () => localStorage.clear(),
// };



export interface TokenResponse {
  access_token: string;
  environment: number;
}

export const token = {
  getAccess: (): string | null =>
    localStorage.getItem("access_token"),

  getEnvironment: (): number | null => {
    const env = localStorage.getItem("environment");
    return env ? Number(env) : null;
  },

  set: (data: TokenResponse) => {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("environment", data.environment.toString());
  },

  clear: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("environment");
  },
};
