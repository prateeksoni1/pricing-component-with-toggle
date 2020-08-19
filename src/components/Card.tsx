import React from "react";
import styled, { css } from "styled-components";
import { CardContainerProps, CardProps, CardType, PriceType } from "../types";

const Card: React.FC<CardProps> = (props) => {
  const { pricing, price, props: features, title, type } = props;

  return (
    <OuterContainer>
      <Container type={type}>
        <div>{title}</div>
        <Price>{`$${
          pricing === PriceType.annually ? price[0] : price[1]
        }`}</Price>
        {features.map((feature) => (
          <Feature>{feature}</Feature>
        ))}
        <Button>Learn More</Button>
      </Container>
    </OuterContainer>
  );
};

export default Card;

const cardItem = css`
  padding: 1rem;
  border-bottom: 1px solid #a3a8fa;
`;

const OuterContainer = styled.div`
  margin-bottom: 2rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  letter-spacing: 1px;
  cursor: pointer;

  border: none;
  outline: none;
  border-radius: 5px;
  text-transform: uppercase;
`;

const Price = styled.div`
  ${cardItem}

  font-size: 4rem;
  color: #484a5e;
  padding: 2rem;
`;

const Feature = styled.div`
  ${cardItem}
`;

const Container = styled.div<CardContainerProps>`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 3px 3px 19px -5px hsl(234, 14%, 74%);

  ${(props) =>
    props.type === CardType.flat
      ? css`
          ${Feature} {
            border-color: #dcdcdc;
          }

          ${Price} {
            border-color: #dcdcdc;
          }

          ${Button} {
            color: #fff;
            background: linear-gradient(
              to right,
              hsl(236, 72%, 79%),
              hsl(237, 63%, 64%)
            );
          }
        `
      : css`
          @media only screen and (min-width: 768px) {
            padding: 3rem;
            z-index: 2;
          }

          color: #fff;
          background: linear-gradient(
            to right,
            hsl(236, 72%, 79%),
            hsl(237, 63%, 64%)
          );

          ${Price} {
            color: #fff;
          }

          ${Button} {
            background: #fff;
            color: hsl(237, 63%, 64%);
          }
        `}
`;
