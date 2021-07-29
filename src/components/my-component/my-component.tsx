import type { V4Options } from 'uuid';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() options: V4Options;

  render() {
    return <div>Hello, World! These are the options {JSON.stringify(this.options)}</div>;
  }
}
