import { Node } from "../interfaces/node";

export function markLastItem(tree: Node[]): Node[] {
  const result = [...tree];
  function markLast(item: Node): void {
    item.lastItem = true;
    if (item.children && item.children.length > 0)
      markLast(item.children[item.children.length - 1]);
  }
  markLast(result[result.length - 1]);
  return result;
}
