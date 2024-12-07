import { Page } from "playwright";
/**
 * Normalize the text by removing extra spaces and newlines.
 * It trims the string and replaces multiple spaces and newlines with a single space.
 *
 * @param {string} text - The text that needs to be normalized.
 * @returns {string} The normalized string with trimmed whitespace and no extra spaces or newlines.
 */
export const normalizeText = (text: string): string => {
  return text.trim().replace(/\s+/g, " ");
};

/**
 * The baseUrl tha will be used during the tests
 */
export const baseUrl = "https://pt.anotepad.com/";

/**
 * Fill an input field with the provided value and return the filled value.
 * @param {Page} page - The Playwright page instance.
 * @param {string} locator - The locator for the input element.
 * @param {string} value - The value to fill in the input field.
 * @returns {Promise<string>} The value that was filled into the input.
 */
export const fillAndReturnInputValue = async (
  page: Page,
  locator: string,
  value: string
): Promise<string> => {
  const input = page.locator(locator);
  await input.fill(value);
  return input.inputValue();
};
