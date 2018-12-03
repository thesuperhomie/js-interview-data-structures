class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  emit(event) {
    const listeners = this.events.get(event);
    if (listeners) {
      listeners.forEach(l => l(...arguments));
    }
  }

  on(event, listener) {
    const listeners = this.events.get(event) || [];
    listeners.push(listener);
    this.events.set(event, listeners);
  }

  addListener(event, listener) {
    this.events.set(event, [listener]);
  }

  removeListener(event, listener) {
    const listeners = this.events.get(event);
    if (!listeners) {
      throw new Error('Not a valid event');
    }
    listeners.splice(listeners.indexOf(listener), 1);
    this.events.set(event, listeners);
  }
}
