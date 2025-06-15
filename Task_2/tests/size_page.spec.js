import { test, expect } from '@playwright/test';
import { MainPage } from '../core';

test.describe('Тесты изменения количества карточек на странице', () => {
  test.beforeEach('Перейти на главную страницу', async ({ page }) => {
    // Перейти на главную страницу
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await mainPage.listCards.first().waitFor();
    await expect(mainPage.title).toHaveText('Main Page');
  });

  const dataTestPageSize = [
    {
      testID: 'TC_2',
      count: 10,
    },
    {
      testID: 'TC_3',
      count: 20,
    },
    {
      testID: 'TC_4',
      count: 50,
    },
    {
      testID: 'TC_5',
      count: 100,
    },
  ];

  for (const dataTest of dataTestPageSize) {
    test(`${dataTest.testID}: Изменение количества карточек на странице на ${dataTest.count}`, async ({ page }) => {
      const mainPage = new MainPage(page);
      await mainPage.changePageSize(dataTest.count);
      const countCards = await mainPage.listCards.count();
      expect(countCards).toEqual(dataTest.count);
    });
  };
});
