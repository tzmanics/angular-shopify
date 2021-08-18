export interface Product {
  id: string;
  handle: string;
  description: string;
  title: string;
  image: string;
  variants: { edges: any[] };
}
