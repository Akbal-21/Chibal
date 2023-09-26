export const isValidEmail = (email: string): boolean => {
  const match = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

  return !!match;
};

export const isEmail = (email: string): string | undefined => {
  return isValidEmail(email) ? undefined : "El correo no parece ser válido";
};

// * Letras

export const isValidLineLetter = (text: string): boolean => {
  const match = String(text).match(/^([a-zA-ZñÑ] ?)((, ?[a-zA-ZñÑ] ?)*)$/);

  return !!match;
};

export const isTextLetter = (text: string): string | undefined => {
  return isValidLineLetter(text) ? undefined : "El texto no parece ser válido";
};

// *Number

export const isValidLineNumber = (text: string): boolean => {
  const match = String(text).match(/^([0-9] ?)((, ?[0-9] ?)*)$/);

  return !!match;
};

export const isTextNumber = (text: string): string | undefined => {
  return isValidLineLetter(text) ? undefined : "El texto no parece ser válido";
};

// *Number

export const isValidLineMix = (text: string): boolean => {
  const match = String(text).match(
    /^([a-zA-ZñÑ0-9] ?)((, ?[a-zA-ZñÑ0-9] ?)*)$/,
  );

  return !!match;
};

export const isTextMix = (text: string): string | undefined => {
  return isValidLineLetter(text) ? undefined : "El texto no parece ser válido";
};
