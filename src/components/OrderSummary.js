import React from 'react'
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
      const navi = useNavigate();

    return (
      <>
        <div>Order Confirmed!</div>

        <button onClick={() => navi(-1)}>Go Back</button>
      </>
    );
}
