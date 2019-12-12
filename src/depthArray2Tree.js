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
  const treeArray = [] // 总线
  let stack = [] // 单线缓存，只记录当前节点的上下文
  let preDepth = 0

  for (let i = 0; i < depthArray.length; i++) {
    let { depth, ...rest } = depthArray[i]
    stack[depth - 1] = {
      ...rest,
      depth,
      children: []
    }
    // 保持缓存数组的长度，弹出大于当前深度的所有节点
    stack.splice(depth, depthArray2Tree.length)
    // 每一次都把最后一个push到上一层
    if (depth > 1) {
      // depth >= preDepth一层，就需要在上一层push当前元素
      if (preDepth >= depth - 1) {
        preDepth = depth - 2
      }
      stack[preDepth].children.push(stack[stack.length - 1])
    } else {
      stack.push(stack[stack.length - 1])
      // 只在深度为1的时候，追加到treeArray
      treeArray.push(stack[0])
    }
    preDepth = depth - 1
  }
  return treeArray
}

const treeNode = [
  { title: '1', depth: 1 },
  { title: '1-1', depth: 2 },
  { title: '1-1-1', depth: 3 },
  { title: '1-1-2', depth: 3 },
  { title: '1-2', depth: 2 },
  { title: '2', depth: 1 },
  { title: '2-1', depth: 2 },
  { title: '3', depth: 1 },
  { title: '4', depth: 1 }
]

let treeArray = depthArray2Tree(treeNode)
console.log(JSON.stringify(treeArray))
