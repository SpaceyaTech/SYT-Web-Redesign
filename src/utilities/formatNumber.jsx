export default function formatNumber(number) {
  if (number < 1000) {
    return number;
  }
  const divisor = 1000;
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixIndex = Math.floor(Math.log(number) / Math.log(divisor));
  const roundedNumber = (number / divisor ** suffixIndex).toFixed(1);
  return `${roundedNumber}${suffixes[suffixIndex]}+`;
}
