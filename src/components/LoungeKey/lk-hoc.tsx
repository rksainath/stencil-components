import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'lk-hoc',
  shadow: true,
})
export class LkHoc {
  @Prop() selectedComponent: string;
  @Prop() languageCode: string;
  @State() contentData: any;

  async componentWillLoad() {
    try {
      let response = await fetch('http://localhost:3000/api/jsonData');
      this.contentData = await response.json();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    switch (this.selectedComponent) {
      case 'CreateAccount':
        return (
          <div>
            <validate-card language-code={this.languageCode} content-data={this.contentData}></validate-card>
            <personal-details language-code={this.languageCode} content-data={this.contentData}></personal-details>
          </div>
        );
      case 'MyDetails':
        return (
          <div>
            <my-details language-code={this.languageCode} content-data={this.contentData}></my-details>
          </div>
        );
      case 'Confirmation':
        return (
          <div>
            <confirmation-summary language-code={this.languageCode} content-data={this.contentData}></confirmation-summary>
          </div>
        );
      default:
        return <div>No component selected.</div>;
    }
  }
}
