import React from 'react';
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navi = useNavigate()
  return (
    <>
      <div>Home</div>
      <button onClick={()=>navi("order-summary")}>Place order</button>
    </>
  );
}
