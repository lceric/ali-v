/**
 * 简单实现一个事件订阅机制，具有监听on和触发emit方法。
 * 要求：
 * const event = new EventEmitter();
 * event.on('some_event', (...args) => {
 *     console.log('some_event triggered', ...args);
 * });
 * emitter.emit('someEvent', 'arg1', 'arg2');
 */

class EventEmitter {
  /* 功能实现 */
  constructor() {
    this.fns = {}
  }
  /**
   * 监听事件
   * @param {String} type 事件名
   * @param {Function} cb 事件回调
   * @memberof EventEmitter
   */
  on(type, cb) {
    const fns = this.fns
    if (!(cb instanceof Function)) {
      console.error('callback is not a function!')
      return
    }
    // 如果重复绑定，后面的冲掉前面绑定的，就直接赋值
    // fns[type] = cb
    // 如果多次订阅 数组批执行
    if (fns[type]) {
      fns[type].push(cb)
      return
    }
    fns[type] = [cb]
  }
  /**
   * 触发事件
   * @param {String} type 事件名
   * @param {*} args 回调参数
   * @memberof EventEmitter
   */
  emit(type, ...args) {
    const fns = this.fns[type]
    if (!fns) {
      console.error(`${type} has not callback function!`)
      return
    }
    for (let i = 0; i < fns.length; i++) {
      fns[i](...args)
    }
  }
}

const event = new EventEmitter()

// callback is not function
event.on('some-event', 'type error')

// some-event
event.on('some-event', (...args) => {
  console.log('some-event triggered', ...args)
})

// some-event
event.on('some-event', (...args) => {
  console.log('some-event2 triggered', ...args)
})

event.emit('some-event', 'lichao', 'eric')
// 触发不存在事件
event.emit('some-event-undefined', 'lichao', 'eric')
