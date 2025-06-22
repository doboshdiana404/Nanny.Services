export function arrayToSentence(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return '';
  }
  return array
    .map(item => {
      if (typeof item !== 'string') return '';
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join(', ');
}
