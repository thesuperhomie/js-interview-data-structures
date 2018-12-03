// An observer is just an object with three methods
// next - which takes a value
// error - which takes in an error message
// complete - no args

// a subscription object represents a disposable resource
// such as the execution of an Observable
// methods include: add, remove, unsubscribe

class Observer {
  constructor(handlers) {
    this.handlers = handlers;
    this.isUnsubscribed = false;
  }

  next(value) {
    if (this.handlers.next && !this.isUnsubscribed) {
      this.handlers.next(value);
    }
  }

  error(err) {
    if (!this.isUnsubscribed) {
      if (this.handlers.error) {
        this.handlers.error(err);
      }
      this.unsubscribe();
    }
  }

  complete() {
    if (!this.isUnsubscribed) {
      if (this.handlers.complete) {
        this.handlers.complete();
      }
      this.unsubscribe();
    }
  }

  unsubscribe() {
    this.isUnsubscribed = true;

    if (this._unsubscribe) {
      this._unsubscribe();
    }
  }
}

class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  subscribe(obs) {
    const obs = new Observer(obs);

    obs._unsubscribe = this._subscribe(obs);

    return {
      unsubscribe() {
        obs.unsubscribe();
      }
    };
  }
}

Observable.from = values => {
  return new Observable(observer => {
    values.forEach(value => observer.next(value));

    observer.complete();

    return () => {
      console.log('Observable.from: unsubscribed');
    };
  });
};
