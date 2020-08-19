import React, { useState } from "react";
import styled, { css } from "styled-components";
import { CardType, ImgProps, PriceType } from "../types";
import Card from "./Card";

const cards = [
  {
    title: "Basic",
    price: [199.99, 19.99],
    props: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    type: CardType.flat,
  },
  {
    title: "Professional",
    price: [249.99, 24.99],
    props: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    type: CardType.primary,
  },
  {
    title: "Master",
    price: [399.99, 39.99],
    props: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    type: CardType.flat,
  },
];

const App: React.FC = () => {
  const [pricing, setPricing] = useState<PriceType>(PriceType.monthly);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPricing(
      pricing === PriceType.annually ? PriceType.monthly : PriceType.annually
    );
  };

  return (
    <Body>
      <Img
        pos="top"
        src={require("../images/bg-top.svg")}
        alt="background-top"
      />
      <Img
        pos="bottom"
        src={require("../images/bg-bottom.svg")}
        alt="background-top"
      />
      <Container>
        <h1>Our Pricing</h1>
        <SwitchComponent>
          <div>Annually</div>
          <Switch>
            <input
              type="checkbox"
              checked={pricing === PriceType.monthly}
              onChange={handleChange}
            />
            <span className="slider round"></span>
          </Switch>
          <div>Monthly</div>
        </SwitchComponent>
        {cards.map((card) => (
          <Card pricing={pricing} {...card} />
        ))}
      </Container>
    </Body>
  );
};

export default App;

const SwitchComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem;
  margin-bottom: 4rem;
  color: #b7b7c3;
`;

const Body = styled.div``;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background: linear-gradient(
      to right,
      hsl(236, 72%, 79%),
      hsl(237, 63%, 64%)
    );
  }

  input:focus + .slider {
    box-shadow: 0 0 1px hsl(237, 63%, 64%);
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const Img = styled.img<ImgProps>`
  z-index: -1000;
  position: absolute;
  ${(props) =>
    props.pos === "top"
      ? css`
          top: 0;
          right: 0;
        `
      : css`
          bottom: 0;
          left: 0;
        `}
`;

const Container = styled.div`
  padding: 2rem;
`;
