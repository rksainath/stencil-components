import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'validate-card',
  styleUrl: 'validate-card.css',
  shadow: true,
})
export class ValidateCard {
  @Prop() languageCode: string;
  @Prop() contentData: any;

  render() {
    const jsonObj = JSON.parse(this.contentData);
    const content = jsonObj && jsonObj[this.languageCode] ? jsonObj[this.languageCode] : {};
    // console.log(`validate-card: ${JSON.stringify(content)}`);

    return (
      <div class="validate-card">
        <h2>{content['Validate Card']}</h2>
        <div class="card-form">
          <label htmlFor="card-number">{content['Card Number']}:</label>
          <input type="text" id="card-number" />

          <label htmlFor="expiration-date">{content['Expiration Date']}:</label>
          <input type="text" id="expiration-date" />

          <label htmlFor="cvv">{content['CVV']}:</label>
          <input type="text" id="cvv" />
        </div>
        <button class="submit-button">{content['Submit']}</button>
      </div>
    );
  }
}
