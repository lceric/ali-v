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
  // 转每一个单元，完了组成新的str, 递归调用
  // 转最里面的，往外转化
  // 匹配不到单元的时候，就返回str
  let reg = /(\d+)(\[[a-zA-Z]+\])/
  // console.log(str.match(reg))
  let arr = str.match(reg)
  if (!arr) {
    return str
  }
  let strRange = ''
  // let strPart = arr[2].replace('[', '').replace(']', '')
  let strPart = arr[2].replace(/\[|\]/g, '')
  for (let i = 0; i < Number(arr[1]); i++) {
    strRange += strPart
  }
  // console.log(strRange, str.replace(arr[0], strRange))
  return decodeString(str.replace(arr[0], strRange))
}

// const s = '3[a]2[bc]'
// const s = '3[a2[c]]'
const s = '2[abc]3[cd]ef'
console.log(decodeString(s))
