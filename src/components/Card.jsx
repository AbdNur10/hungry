import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import ItemCard from "./ItemCard";
import ShoppingBag from "../assets/empty-cart.png";
import { useSelector } from "react-redux";




const Card = () => {
  const [showCard, setShowCard] = useState(false);
  const cartItems = useSelector((state) => {
    console.log(state); // Check the structure of the state object
    return state.cart.cart;
  });

  const totalQuantity = cartItems.reduce((quantity, item) => {
    return quantity + item.quantity;
  }, 0);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full lg:w-[25vw] h-full bg-white transition-transform duration-300 ${
          showCard ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-black font-bold">My Orders</span>
          <IoCloseCircle
            onClick={() => setShowCard(!showCard)}
            className="font-bold hover:text-red-500 cursor-pointer w-8 h-8"
          />
        </div>
        <div className="overflow-y-auto">
          { cartItems.length >0 ? (
             cartItems.map((food) => (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                quantity={food.quantity}
              />
            ))
          ):
          (
            <h1 className="text-center text-black font-bold">No items in cart</h1>
          )
         }
        </div>
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="text-black font-bold">Items : {totalQuantity}</h3>
          <h3 className="text-green-600 font-bold">Total Amount : $ {totalAmount}</h3>
          <hr className="my-2" />
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
            Check Out
          </button>
        </div>
      </div>

      
      {  !showCard && (
        <img
          src={ShoppingBag}
          onClick={() => setShowCard(!showCard)}
          className={`lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] 
           object-cover fixed bottom-10 lg:right-10  right-2 cursor-pointer
            ${totalQuantity > 0 && "animate-bounce delay-500 transition-all"}`}
          alt="Shopping Bag"
        />
      )}
    </>
  );
};

export default Card;
