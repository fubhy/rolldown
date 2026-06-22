import { StateCode } from './state-codes.js';

// This component uses StateCode internally
export class MyComponent {
  constructor() {
    this.state = StateCode.WAITING;
  }
  setState(code) {
    this.state = code;
  }
}

// Re-export StateCode and getStateCodeFromHttpStatus for consumers of ./wrapper
export { StateCode, getStateCodeFromHttpStatus } from './state-codes.js';
