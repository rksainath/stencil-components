import { newE2EPage } from '@stencil/core/testing';

describe('my-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-details></my-details>');

    const element = await page.find('my-details');
    expect(element).toHaveClass('hydrated');
  });
});
