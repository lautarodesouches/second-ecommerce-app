export const EMAIL_REGEX        = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+')

export const EIGHT_CHARACTERS   = new RegExp('^.{8,}$')
export const ONE_LOWERCASE      = new RegExp('^(.*[a-z].*)$')
export const ONE_UPPERCASE      = new RegExp('^(.*[A-Z].*)$')
export const ONE_NUMBER         = new RegExp('^(.*[0-9].*)$')
export const ONE_SPECIAL        = new RegExp('^(.*[#?!@$ %^&*-].*)$')