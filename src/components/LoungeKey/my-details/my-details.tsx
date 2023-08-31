import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-details',
  styleUrl: 'my-details.css',
  shadow: true,
})
export class MyDetails {
  @Prop() languageCode: string;
  @Prop() contentData: any;

  render() {
    const jsonObj = JSON.parse(this.contentData);
    const content = jsonObj && jsonObj[this.languageCode] ? jsonObj[this.languageCode] : {};

    return (
      <div class="my-details">
        <h2>{content['My Details']}</h2>
        <p>
          {content['Language Code']}: {this.languageCode}
        </p>
        <div class="user-details">
          <p>{content['First Name: John']}</p>
          <p>{content['Last Name: Doe']}</p>
          <p>{content['Email: johndoe@example.com']}</p>
        </div>
      </div>
    );
  }
}
