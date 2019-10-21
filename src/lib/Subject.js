class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    let self = this;
    this.observers = self.map(obs => !(obs === observer));
  }
  notify(data) {
    this.observers.map(observer => {
      debugger;
      return observer.update(data);
    });
  }
}

export default Subject;
