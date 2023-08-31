import { newSpecPage } from '@stencil/core/testing';
import { ConfirmationSummary } from '../confirmation-summary';

describe('confirmation-summary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ConfirmationSummary],
      html: `<confirmation-summary></confirmation-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <confirmation-summary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </confirmation-summary>
    `);
  });
});
