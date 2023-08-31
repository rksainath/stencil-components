import { newSpecPage } from '@stencil/core/testing';
import { ValidateCard } from '../validate-card';

describe('validate-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ValidateCard],
      html: `<validate-card></validate-card>`,
    });
    expect(page.root).toEqualHtml(`
      <validate-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </validate-card>
    `);
  });
});
