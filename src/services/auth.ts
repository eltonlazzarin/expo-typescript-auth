interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token:
          '3U9sl2ds00fJaSHd2a9d9r8y3h0d9wNfSJgsHhhQsf3YdfXgGs3dKgDsJrUh7gS',
        user: {
          name: 'Elton Lazzarin',
          email: 'eltonlazzarin@uol.com.br',
        },
      });
    }, 2000);
  });
}
