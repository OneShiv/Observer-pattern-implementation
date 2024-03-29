import Subject from "./Subject";

class State extends Subject {
  constructor() {
    super();
    this.state = {};
  }

  update(data = {}) {
    this.state = Object.assign(this.state, data);
    this.notify(data);
  }
  get() {
    return this.state;
  }
}

export default State;
