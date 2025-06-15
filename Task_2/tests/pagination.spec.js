import { test, expect } from '@playwright/test';
import { MainPage } from '../core';

test.describe('Тесты переходов по страницам результатов', () => {
  test.beforeEach('Перейти на главную страницу.', async ({ page }) => {
    // Перейти на страницу
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.listCards.first().waitFor();
    await expect(mainPage.title).toHaveText('Main Page');
  });

  test('Тест 6: Переход на следующую страницу результатов', async ({ page }) => {
    const mainPage = new MainPage(page);
    const namesCardsPage1 = await mainPage.listCards.allTextContents();
    // Нажать на кнопку "Следующая страница"
    await mainPage.gotoNextPage();
    const namesCardsPage2 = await mainPage.listCards.allTextContents();
    expect(namesCardsPage1.some(item => namesCardsPage2.includes(item))).toBeFalsy();
  });

  test('Тест 7: Переход на четвертую страницу результатов', async ({ page }) => {
    const mainPage = new MainPage(page);
    const namesCardsPage1 = await mainPage.listCards.allTextContents();
    // Нажать на кнопку пагинации "4"
    await mainPage.gotoPageNum('4');
    const namesCardsPage2 = await mainPage.listCards.allTextContents();
    expect(namesCardsPage1.some(item => namesCardsPage2.includes(item))).toBeFalsy();
  });

  test('Тест 8: переход на последнюю страницу результатов', async ({ page }) => {
    const mainPage = new MainPage(page);
    const namesCardsPage1 = await mainPage.listCards.allTextContents();
    // Нажать на кнопку пагинации последней страницы.
    await mainPage.gotoLastPage();
    const namesCardsPage2 = await mainPage.listCards.allTextContents();
    expect(namesCardsPage1.some(item => namesCardsPage2.includes(item))).toBeFalsy();
  });
});