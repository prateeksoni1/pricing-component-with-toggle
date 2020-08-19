export interface ImgProps {
  pos: string;
}

export enum CardType {
  flat,
  primary,
}

export interface CardProps {
  title: string;
  price: Array<Number>;
  props: Array<string>;
  type: CardType;
  pricing: PriceType;
}

export interface CardContainerProps {
  type: CardType;
}

export enum PriceType {
  annually,
  monthly,
}
