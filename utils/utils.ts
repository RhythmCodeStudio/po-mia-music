export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export function validateName(name: string) {
  const re = /^[a-zA-Z]+$/;
  return re.test(String(name));
}
export function validateMessage(message: string) {
  const trimmed = message.trim();
  // Must contain at least one alphanumeric character
  return trimmed.length > 0 && /[a-zA-Z0-9]/.test(trimmed);
}
export function validatePhone(phone: string) {
  if (!phone.trim()) {
    return false;
  }
  const re =
    /^(?:\+1\s?|001\s?)?(?:\(\d{3}\)\s?|\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
  return re.test(String(phone));
}
export function validateForm(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  return (
    validateName(name) &&
    validateEmail(email) &&
    validatePhone(phone) &&
    validateMessage(message)
  );
}

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export function delayPageLoad(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
