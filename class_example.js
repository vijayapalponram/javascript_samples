class Example {
    constructor() {
      const proto = Object.getPrototypeOf(this);
      console.log(Object.getOwnPropertyNames(proto));
    }
    first(){}
    second(){}
    static third(){}
  }
  