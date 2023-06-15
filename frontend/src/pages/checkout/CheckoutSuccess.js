import React,{useEffect} from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch  } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { clearCart } from '../../actions/cartActions';
// import { clearCart } from '../../'';

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  top: 70px;
  `;

const SuccessIcon = styled.i`
  font-size: 5rem;
  color: green;
  `;

const SuccessMessage = styled.p`
  font-size: 2rem;
  color: green;
  text-align: center;
  margin-top: 1rem;
  `;












// useEffect(() => {
//   const cart = cartItems.length ? cartItems.length : 0 ;
//   setincart(cart);
//   return () => {
//       setincart(0)
//   }
// },[cart])





const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const location = useLocation();


  useEffect(() => {
    if (location.pathname === '/checkout-success') {
      dispatch(clearCart());
    }
  }, [dispatch, location.pathname]);

  
  return (
    <>
    <SuccessContainer>
      <SuccessIcon className="fa fa-check-circle" />
      <SuccessMessage>Payment Successful!</SuccessMessage>
    </SuccessContainer>
    </>
  )
}

export default CheckoutSuccess
