import { newE2EPage } from '@stencil/core/testing';

describe('confirmation-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<confirmation-summary></confirmation-summary>');

    const element = await page.find('confirmation-summary');
    expect(element).toHaveClass('hydrated');
  });
});
