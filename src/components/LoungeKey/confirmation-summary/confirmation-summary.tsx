import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'confirmation-summary',
  styleUrl: 'confirmation-summary.css',
  shadow: true,
})
export class ConfirmationSummary {
  @Prop() languageCode: string;
  @Prop() contentData: any;

  render() {
    const jsonObj = JSON.parse(this.contentData);
    const content = jsonObj && jsonObj[this.languageCode] ? jsonObj[this.languageCode] : {};

    return (
      <div class="confirmation">
        <h2>{content['Confirmation']}</h2>
        <p>
          {content['Language Code']}: {this.languageCode}
        </p>
        <div class="confirmation-details">
          <p>{content['Card Number: ************1234']}</p>
          <p>{content['Expiration Date: 12/24']}</p>
          <p>{content['First Name: John']}</p>
          <p>{content['Last Name: Doe']}</p>
          <p>{content['Email: johndoe@example.com']}</p>
        </div>
        <button class="submit-button">{content['Confirm']}</button>
      </div>
    );
  }
}
