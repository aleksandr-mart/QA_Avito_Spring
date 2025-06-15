export class MainPage {
    constructor(page) {
        this.page = page;
        this.listCards = page.locator('.ant-card h1');
        this.title = page.getByRole('heading', { name: 'Main Page' });
        this.__topPagination = page.locator('.ant-list-pagination').first();
        this.pageSize = this.__topPagination.locator('.ant-pagination-options-size-changer');
        this.nextPage = this.__topPagination.locator('.ant-pagination-next');
        this.prevPage = this.__topPagination.locator('.ant-pagination-prev');
        this.pageNums = this.__topPagination.locator('li.ant-pagination-item');
        this.nextFivePage = this.__topPagination.locator('.ant-pagination-jump-next');
    };

    async goto() {
        await this.page.goto('');
    };

    async getCards() {
        return await this.listCards();
    };

    async changePageSize(select) {
        await this.pageSize.first().click();
        await this.page.locator('div.ant-select-item-option-content', { hasText: `${select} / page` }).click();
    };

    async gotoNextPage() {
        await this.nextPage.click();
    };

    async gotoPrevPage() {
        await this.prevPage.click();
    };

    async gotoLastPage() {
        await this.pageNums.last().click();
    };

    async gotoNextFivePage() {
        await this.nextFivePage.click();
    };

    async gotoPageNum(page) {
        await this.__topPagination.locator(`[title="${page}"]`).click();
    };
};
