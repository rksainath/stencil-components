import { newE2EPage } from '@stencil/core/testing';

describe('validate-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<validate-card></validate-card>');

    const element = await page.find('validate-card');
    expect(element).toHaveClass('hydrated');
  });
});
