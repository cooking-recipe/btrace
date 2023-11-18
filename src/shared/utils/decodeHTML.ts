export const decodeHTML = (str: string) => str.replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export const decodeNbsp = (str: string) => str.replaceAll('&nbsp;', ' ');