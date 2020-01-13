// 观察者模式
// 观察者和被观察者 有关联的
// 观察者需要将自己放到观察者之上，当被观察者状态发生变化，需要通知所有观察者
class Subject {
  constructor(name) {
    this.name = name;
    this.state = 'happy';
    this.observers = [];
  }
  // 将观察者绑定被观察者
  attach(o) {// on
    this.observers.push(o);
  }
  setState(state) {// emit
    this.state = state;
    this.observers.forEach(o => {
      o.update(this);
    })
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  // 被观察者状态改变，调用这个方法
  update(s) {
    console.log(this.name + ':' + s.name + '当前状态' + s.state);
  }
}

let baby = new Subject('baby');
let father = new Observer('father');
let mother = new Observer('mother');
baby.attach(father); // 绑定
baby.attach(mother);
baby.setState('sad');