export enum ElementType {
  H1,
  H2,
  H3,
  P,
  A
}

export interface Content {
  elementType: ElementType;
  value: string;
}

export interface Node {
  content: Content[];
  children?: Node[];
  lastItem?: Boolean;
  branch?: number;
}
