// common method about Object

/**
 * create an object by prototype
 * if prototype === null , new object's propotype is nulll
 */
Object.create(prototype);

// simple implement -- polyfill
// Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。
// 比如说 polyfill 可以让 IE7 使用 Silverlight 插件来模拟 HTML Canvas 元素的功能，或模拟 CSS 实现 rem 单位的支持，或 text-shadow，或其他任何你想要的功能。
if (typeof Object.create !== "function") {
  Object.create = function (proto, propertiesObject) {
    // if (typeof proto !== 'object' && typeof proto !== 'function') {
    //     throw new TypeError('Object prototype may only be an Object: ' + proto);
    // } else if (proto === null) {
    //     throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    // }

    // if (typeof propertiesObject != 'undefined') {
    //     throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
    // }

    function F() { }
    F.prototype = proto;

    return new F();
  };
}

/**
 * clone source property value to target, can not deep clone
 * return result and change traget
 * can not clone prototype chain's value
 */
Object.assign(target, ...source);


/**
 * ------- about Object property --------
 * 双向绑定,监听函数某个属性的变化
 */
Object.defineProperties(obj, prop);
Object.defineProperty(obj, property, descriptor);
// Porxy
var obj = {
  a: 1,
  b: 2
}
Object.defineProperty(obj, 'a', {
  // value: 1,
  // writable: true,
  set: function (val) {
    console.log('set obj a to ' + val);
  },
  get: function () {
    console.log('get obj val ', this.a);
    // console.log('get obj val ' + this);
  }
})


/**
 * -------- about prototype --------
 */
Object.setPrototypeOf();
Object.getPrototypeOf();
Object.isPrototypeOf();