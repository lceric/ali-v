
/**
 * 实现一个`Foo`方法，接受函数`func`和时间`wait`
 * 返回一个新函数，新函数即使？连续多次执行，但也只限制在`wait`的时间执行一次
 */
// function Foo(func, wait) {
//   var timer = null
//   return function() {
//     if(timer) {
//       clearTimeout(timer)
//       timer = null
//     }
//     timer = setTimeout(()  => {
//       func()
//     }, wait)
//   }
// }
function Foo(func, wait) {
  let last = null
  return function() {
    if (+new Date - last >= wait || !last) {
      func.call()
      last = +new Date
    }
  }
}
setInterval(Foo(function () {
  console.log('run-------------')
}, 2000), 200)
