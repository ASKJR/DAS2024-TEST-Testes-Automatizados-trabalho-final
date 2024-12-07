import { test, expect } from "@playwright/test";

const baseUrl = "https://pt.anotepad.com/";

test(`Test if user can write a note with a title in ${baseUrl}`, async ({
  page,
}) => {
  //Arrange
  //Title
  await page.goto(baseUrl);
  const expectedTitle = "Entrega trabalho test DAS 2024";
  const titleInputLocatorId = "#edit_title";
  const titleInput = page.locator(titleInputLocatorId);
  //Note
  const expectedNote = "ALBERTO KATO / 202400184588";
  const noteTextAreaLocatorId = "#edit_textarea";
  const noteTextArea = page.locator(noteTextAreaLocatorId);

  //Act
  //Title
  await titleInput.click();
  await titleInput.fill(expectedTitle);
  const actualTitle = await titleInput.inputValue();
  //Note
  await noteTextArea.click();
  await noteTextArea.fill(expectedNote);
  const actualNote = await noteTextArea.inputValue();

  //Assert
  //Title
  expect(
    actualTitle,
    "The title typed by the user differs from the one that is expected."
  ).toBe(expectedTitle);
  //Note
  expect(
    actualNote,
    "The note typed by the user differs from the one that is expected."
  ).toBe(expectedNote);
});
