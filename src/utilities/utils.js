/* eslint-disable no-plusplus */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { categories } from "../pages/shop/data";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function addCommaSeparator(number) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(number) || number < 1000) {
    return number.toFixed(0);
  }

  const numberString = number.toString();
  let result = "";

  for (let i = numberString.length - 1, count = 0; i >= 0; i--, count++) {
    if (count === 3) {
      result = `,${  result}`;
      count = 0;
    }
    result = numberString[i] + result;
  }
  return result;
}

export function categoryColors(name) {
  const category = categories.find((item) => item.name === name.toLowerCase());
  return category
    ? { backgroundColor: category.bgColor, color: category.textColor }
    : { backgroundColor: "rgb(102, 51, 0, 0.2)", color: "rgb(102, 51, 0)" };
}
