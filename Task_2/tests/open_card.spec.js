import { test, expect } from '@playwright/test';
import { MainPage, GamePage } from '../core';


  test('TC_1: Открытие карточки игры', async ({ page }) => {
    const mainPage = new MainPage(page);
    const pageGame = new GamePage(page);

    // Step 1: Перейти на главную страницу.
    await mainPage.goto();
    await mainPage.listCards.first().waitFor();
    await expect(mainPage.title).toHaveText('Main Page');

    // Step 2: Нажать на карточку игры.
    const firstCard = await mainPage.listCards.first();
    const nameCard = await firstCard.textContent();
    await firstCard.click();
    const nameGame = await pageGame.nameGame.textContent();
    expect(nameGame).toBe(nameCard);
  });

