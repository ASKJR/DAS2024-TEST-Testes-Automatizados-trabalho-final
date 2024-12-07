import { test, expect } from "@playwright/test";
import { normalizeText, fillAndReturnInputValue, baseUrl } from "util/Util";
/*
 * UFPR – Universidade Federal do Paraná
 * Setor de Educação Profissional e Tecnológica
 * Especialização em Desenvolvimento Agil de Software
 * DAS2024 - TEST - Testes Automatizados
 *
 * Prof. Ms. Daniel Francisco Wandarti
 * Aluno: Alberto Sussumu Kato Junior
 */

/*
 * Trabalho da Disciplina - TEST
 * ENUNCIADO:
 * Esccreva um código que escreve seu nome e matrícula no anotepad. Se o trabalho for em
 * grupo deve escrever o nome e matrícula de todos.
 * O título deve ser "Entrega trabalho TEST DAS 2024", e nome/matrícula no corpo da nota.
 * https://pt.anotepad.com
 */
test(`Test if user can write a note with a title and save it in ${baseUrl}`, async ({
  page,
}) => {
  // Arrange
  const expectedTitle = "Entrega trabalho TEST DAS 2024";
  const groupMembers = [{ name: "ALBERTO KATO", id: "202400184588" }];
  const expectedNoteSavedWithSuccessMessage = `
    Você salvou sua nota como Usuário Convidado. 
    Você pode voltar e continuar editando suas notas desde que não exclua os cookies do navegador.
    Para acessar suas notas de qualquer lugar e nunca perdê-las, Crie uma Conta Gratuita. 
    Suas notas existentes serão salvas na sua conta.
  `;
  const expectedNote = groupMembers
    .map((member) => `${member.name} / ${member.id}`)
    .join("\n");
  const titleInputLocator = "#edit_title";
  const noteTextAreaLocator = "#edit_textarea";
  const btnSaveNoteLocator = "#btnSaveNote";
  const paragraphNoteSavedWithSuccesLocator = page.getByText(
    "Você salvou sua nota como Usuário Convidado"
  );

  // Act
  await page.goto(baseUrl);
  const actualTitle = await fillAndReturnInputValue(
    page,
    titleInputLocator,
    expectedTitle
  );
  const actualNote = await fillAndReturnInputValue(
    page,
    noteTextAreaLocator,
    expectedNote
  );
  await page.locator(btnSaveNoteLocator).click();
  const actualNoteSavedWithSuccessMessage =
    (await paragraphNoteSavedWithSuccesLocator.textContent()) ?? "";

  // Assert
  expect(
    actualTitle,
    "The title typed by the user differs from the one that is expected."
  ).toBe(expectedTitle);

  expect(
    actualNote,
    "The note typed by the user differs from the one that is expected."
  ).toBe(expectedNote);

  await expect(
    paragraphNoteSavedWithSuccesLocator,
    "The message for note saved with success is not visible."
  ).toBeVisible();

  expect(
    normalizeText(actualNoteSavedWithSuccessMessage),
    "The message for note saved with success is not correct."
  ).toBe(normalizeText(expectedNoteSavedWithSuccessMessage));
});
