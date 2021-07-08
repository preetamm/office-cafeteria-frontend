import React from "react";
import { LOADING } from '../../constants/constant'
import { ReactComponent as GoogleLogo } from "../../icons/googleIcon.svg";
import { ReactComponent as PaypalLogo } from "../../icons/paypalIcon.svg";
import { ReactComponent as DebitLogo } from "../../icons/debitIcon.svg";
import { ReactComponent as PayOnCounterLogo } from "../../icons/payOnCounterIcon.svg";
import { Formik, Field, Form } from "formik";
import Button from "../../components/common/button.component";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../redux/cart/cart.slice";

const OrderForm = () => {
  var { cart, order } = useSelector((state) => state.cartSlice);
  var cartLength = Object.keys(cart).length;
  var dispatch = useDispatch();

  return (
    <div className="form">
      <Formik
        initialValues={{
          orderMode: null,
          paymentMode: null,
        }}
        onSubmit={async (values) => {
          if (values.orderMode && values.paymentMode && cartLength) {
            dispatch(
              placeOrder({
                cart: cart,
                orderMode: values.orderMode,
                paymentMode: values.paymentMode,
              })
            );
          } else {
            alert("select the order and payment mode firstor cart is empty");
          }
        }}
      >
        {({ values }) => (
          <Form>
            <div className="order-type rounded-lg max-w-400 w-full flex font-semibold text-sm bg-white mt-3 py-3">
              <div className="type-1 flex justify-center items-center  flex-grow-1">
                <label class="custom-radio-btn  rounded-full border-solid border-2  border-yellow-700">
                  <Field
                    type="radio"
                    className="radio"
                    name="orderMode"
                    value="DELIVER"
                  />
                  <span class="checkmark"></span>
                </label>
                <div className="ml-1">Deliver</div>
              </div>
              <div className="type-2 flex  justify-center items-center flex-grow-1">
                <label class="custom-radio-btn  rounded-full border-solid border-2  border-yellow-700">
                  <Field
                    type="radio"
                    className="radio"
                    name="orderMode"
                    value="TAKE_AWAY"
                  />
                  <span class="checkmark"></span>
                </label>
                <div className="ml-1">Take Away</div>
              </div>
            </div>
            <div className="payment-method-list max-w-400 rounded-lg font-bold bg-white mt-3 py-2 px-7">
              <div className="payment-item mt-2 text-sm items-center flex ">
                <div className="logo ">
                  <GoogleLogo width="25px" height="25px" />
                </div>
                <div className="name ml-5 mr-auto">Google Pay</div>
                <div className="radio-button  flex items-center justify-center">
                  <label class="custom-radio-btn  rounded-full border-solid border-2  border-yellow-700">
                    <Field
                      type="radio"
                      className="radio"
                      name="paymentMode"
                      value="GOOGLE_PAY"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="payment-item mt-2 text-sm items-center flex  ">
                <div className="logo ">
                  <PaypalLogo width="25px" height="25px" />
                </div>
                <div className="name ml-5 mr-auto">Paypal</div>
                <div className="radio-button">
                  <label class="custom-radio-btn  rounded-full border-solid border-2  border-yellow-700">
                    <Field
                      type="radio"
                      className="radio"
                      name="paymentMode"
                      value="PAYPAL"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="payment-item mt-2 text-sm items-center flex ">
                <div className="logo">
                  <DebitLogo width="25px" height="25px" />
                </div>
                <div className="name ml-5 mr-auto">Debit</div>
                <div className="radio-button w-auto h-auto">
                  <label class="custom-radio-btn  rounded-full border-solid border-2  border-yellow-700">
                    <Field
                      type="radio"
                      className="radio"
                      name="paymentMode"
                      value="DEBIT"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              {values.orderMode === "TAKE_AWAY" && (
                <div className="payment-item mt-2  text-sm items-center flex ">
                  <div className="logo">
                    <PayOnCounterLogo width="25px" height="25px" />
                  </div>
                  <div className="name ml-5 mr-auto">Pay On Counter</div>
                  <div className="radio-button w-6 h-6">
                    <label class="custom-radio-btn  rounded-full border-solid border-2  border-yellow-700">
                      <Field
                        type="radio"
                        className="radio"
                        name="paymentMode"
                        value="PAY_AT_COUNTER"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="button-container mt-5  px-8">
              <Button
                label={order === LOADING ? LOADING : 'CONFIRM'}
                className={` rounded-lg text-white shadow-inner  font-semibold  py-2 w-full max-w-400 `}
                type={"submit"}
                isDisabled={values.orderMode && values.paymentMode && cartLength
                  ? false
                  : true
                } 
              ></Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
