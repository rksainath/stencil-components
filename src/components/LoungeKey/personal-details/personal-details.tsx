import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'personal-details',
  styleUrl: 'personal-details.css',
  shadow: true,
})
export class PersonalDetails {
  @Prop() languageCode: string;
  @Prop() contentData: any;

  render() {
    const jsonObj = JSON.parse(this.contentData);
    const content = jsonObj && jsonObj[this.languageCode] ? jsonObj[this.languageCode] : {};

    return (
      <div class="personal-details">
        <h2>{content['Personal Details']}</h2>
        <div class="personal-form">
          <label htmlFor="first-name">{content['First Name']}:</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">{content['Last Name']}:</label>
          <input type="text" id="last-name" />

          <label htmlFor="email">{content['Email']}:</label>
          <input type="text" id="email" />
        </div>
        <button class="submit-button">{content['Next']}</button>
      </div>
    );
  }
}
