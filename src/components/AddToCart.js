import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CardAmountToggle from "./CardAmountToggle";
import { NavLink } from "react-router-dom";
import {Button} from "../styles/Button"

const AddToCart = ({ product }) => {
    const [amount,setAmount] = useState(1);
    const { id, colors, stock } = product;
    const [activeCol,setActiveCol] = useState(colors[0]);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1):setAmount(1);
    }
    const setIncrease = () => {
        
        (amount < stock) ? setAmount(amount + 1) : setAmount(stock);
    }
    return (
    <Wrapper>
      <p className="colors">
        Colors:
        {colors.map((currCol) => {
          return (
            <button
              key={id}
              className={activeCol === currCol ? "btnStyle active" : "btnStyle"}
              style={{ backgroundColor: currCol }}
              onClick={()=>{setActiveCol(currCol)}}
            >{activeCol === currCol ? <FaCheck className="checkStyle"/>:null}</button>
          );
        })}
      </p>

      <CardAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />

      <NavLink to="/cart">
        <Button className="btn">Add to Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
