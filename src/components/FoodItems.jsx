import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const handleToast = () => {
    toast.success("Added to cart", {
      style: {
        background: "#363636",
        color: "#fff",
      },
    });
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-8 justify-center mt-4 mb-6">
        {FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              rating={food.rating}
              img={food.img}
              desc={food.desc}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
