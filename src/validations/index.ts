export const REGEX_EMAIL = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')

export const REGEX_EIGHT_CHARACTERS = new RegExp('^.{8,}$')
export const REGEX_ONE_LOWERCASE = new RegExp('^(.*[a-z].*)$')
export const REGEX_ONE_UPPERCASE = new RegExp('^(.*[A-Z].*)$')
export const REGEX_ONE_NUMBER = new RegExp('^(.*[0-9].*)$')
export const REGEX_ONE_SPECIAL = new RegExp('^(.*[#?!@$ %^&*-].*)$')

export const REGEX_CREDIT_CARD = new RegExp('(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)')
