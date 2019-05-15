import { Node } from "../interfaces/node";

function markOnlyLastOne(item: Node, children = 1): void {
  if (item.children && item.children.length > 0) {
    return markOnlyLastOne(
      item.children[item.children.length - 1],
      item.children.length
    );
  }
  item.branch = children;
}

export function markLastItem(tree: Node[]): Node[] {
  const result = [...tree];
  function markLast(item: Node): void {
    item.lastItem = true;
    if (item.children && item.children.length > 0)
      markLast(item.children[item.children.length - 1]);
  }
  for (let i = 0, max = result.length; i < max; i++) {
    if (i === max - 1) {
      markLast(result[i]);
      break;
    }
    markOnlyLastOne(result[i]);
  }
  console.log(result);

  return result;
}
