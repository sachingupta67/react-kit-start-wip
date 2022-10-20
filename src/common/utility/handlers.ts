const trimAndLowerCaseHandler = (str: string | number): string => {
  let convertedStr = '';
  if (str) {
    str = str.toString();
    convertedStr = str.toLowerCase().replaceAll(/\s/g, '');
  }
  return convertedStr;
};

const jwtDecoder = (token: string): { firstName: string; lastName: string } => {
  let data = { firstName: '', lastName: '' };
  if (token.length) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const dataJWT = JSON.parse(window.atob(base64));

      const { firstName = '', lastName = '' } = dataJWT;
      data = { firstName, lastName };
      // TODO: add expiration at check ...
    } catch (err) {
      //
    }
  }

  return data;
};

export { trimAndLowerCaseHandler, jwtDecoder };
