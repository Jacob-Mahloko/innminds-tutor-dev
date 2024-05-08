export const validatePhoneNumber = (
    _: any,
    value: string,
    callback: (error?: string) => void
  ) => {
    if (!value || /^((\+27)|0)(\d{9})$/.test(value)) {
      callback();
    } else {
      callback('Please enter a valid South African phone number start with +27 or 0)');
    }
  };

  export const validateEscapeScequence = (
    _: any,
    value: string,
    callback: (error?: string) => void
  ) => {if (!/[\\]/.test(value)) { // Check for escape sequences
    callback();
  } else {
    callback('Value should not contain escape sequences');
  }
};


