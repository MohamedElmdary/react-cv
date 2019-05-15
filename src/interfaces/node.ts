export interface Node {
  content: string;
  children: Node[];
  lastItem?: Boolean;
}
