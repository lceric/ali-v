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
}

/**
 * 实现一个`Foo`方法，接受函数`func`和时间`wait`
 * 返回一个新函数，新函数即时连续多次执行，但也只限制在`wait`的时间执行一次
 */
function Foo(func, wait) {
  /* 代码实现 */
}

/**
 * 说明：给定一个编码字符，按编码规则进行解码，输出字符串
 *     编码规则是`count[letter]`，将letter的内容count次输出，
 count是0或正整数，letter是区分大小写的纯字母
 * 示例：
 * const s = '3[a]2[bc]'; decodeString(s); // 返回'aaabcbc'
 * const s = '3[a2[c]]'; decodeString(s); // 返回'accaccacc'
 * const s = '2[abc]3[cd]ef'; decodeString(s); // 返回'abcabccdcdcdef'
 */

function decodeString(str) {
  /* 功能实现 */  

};

/**
 * 平铺节点数组转嵌套树
 * 说明：将一个包含深度信息的节点数组转换成一棵树，要求只能遍历一次该数组
 * 输入值：TreeNode数组 TreeNode为包含title, depth(正整数，深度不限)字段的Object
 * 输出值：组装好的嵌套树，子节点挂载在对应父节点的children字段上
 */

/*
举例 (title字段仅为便于理解，实际无固定规则)
输入：[
  { title: '1', depth: 1 },
  { title: '1-1', depth: 2 },
  { title: '1-1-1', depth: 3 },
  { title: '1-1-2', depth: 3 },
  { title: '1-2', depth: 2 },
  { title: '2', depth: 1 },
  { title: '2-1', depth: 2 },
]
输出：[
  {
    "title": "1",
    "depth": 1,
    "children": [
      {
        "title": "1-1",
        "depth": 2,
        "children": [
          {
            "title": "1-1-1",
            "depth": 3
          },
          {
            "title": "1-1-2",
            "depth": 3
          }
        ]
      },
      {
        "title": "1-2",
        "depth": 2
      }
    ]
  },
  {
    "title": "2",
    "depth": 1,
    "children": [
      {
        "title": "2-1",
        "depth": 2
      }
    ]
  }
]
*/

function depthArray2Tree(depthArray) {
  /* code */
}