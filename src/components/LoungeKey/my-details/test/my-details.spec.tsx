import { newSpecPage } from '@stencil/core/testing';
import { MyDetails } from '../my-details';

describe('my-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyDetails],
      html: `<my-details></my-details>`,
    });
    expect(page.root).toEqualHtml(`
      <my-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-details>
    `);
  });
});
