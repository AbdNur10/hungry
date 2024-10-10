import React from "react";  
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";  
import { RiDeleteBinFill } from "react-icons/ri"; 
import { useDispatch } from "react-redux";
import { removeCart,increament,decrement } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

 

const ItemCard = ({ id, name, price, img, quantity }) => {  
  const dispatch = useDispatch();
  
  return (  
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">  
      <RiDeleteBinFill    
        className="absolute right-7 mx-[-2] cursor-pointer hover:text-red-600"  
        onClick={() => {
          dispatch(removeCart({ id,name,img,price,quantity }))
        toast.error(`${name} removed from cart`)
        }}

      />  
      <img src={img} alt={name} className="w-[50px] h-[50px] object-contain rounded-full" />  
      <div className="leading-5">  
        <h2 className="font-bold text-gray-800">{name}</h2>  
        <div className="flex justify-between mt-2 ">  
          <span className="text-green-500 font-bold">${price}</span>  
          <div className="flex justify-center items-center gap-2 absolute right-7">  
            <AiFillPlusCircle 
            onClick={() =>  {
              dispatch(increament({ id,name,img,price,quantity }))
            toast.success("Thanks For Increasing The Quantity")
            }}
            className="hover:text-green-600 transition-all ease-in-out cursor-pointer" />  
            <span>{quantity}</span>  
            <AiFillMinusCircle
            onClick={() => quantity > 1 ?
               dispatch(decrement({ id,name,img,price,quantity }))
               :
              dispatch(removeCart({ id,name,img,price,quantity }))
            }
            className="hover:text-green-600 transition-all ease-in-out cursor-pointer" />  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ItemCard;