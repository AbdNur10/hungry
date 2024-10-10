import React, { useEffect, useState } from "react";
import O1 from "../assets/restaurant.png";
import O2 from "../assets/restaurant (1).png";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../redux/slices/CategorySlice";

const Category = () => {
  const [categories, setcategories] = useState([]);
  const dispatch=useDispatch();

  const getUniqueCategory = () => {
    const uniqueCategory = [...new Set(FoodData.map((food) => food.category))];
    setcategories(uniqueCategory);
    console.log(uniqueCategory)
  };

  useEffect(() => {
    getUniqueCategory();
  }, []);


  const choiceCat=useSelector((state)=>{
     state.category.category

  })  

  return (
    <div className="m-8  ">
      <h2 className="text-2xl font-bold text-center py-4">
        Find the best f
        <span>
          <img
            src={O1}
            alt=""
            className="w-4 h-4 object-contain inline-block"
          />
        </span>
        <span>
          <img
            src={O2}
            alt=""
            className="w-4 h-4 object-contain inline-block"
          />
        </span>
        ds
      </h2>
     
       <div className="lg:ml-[14%]">
       <button 
        className={`bg-gray-400 hover:bg-green-600
         hover:text-white text-black
          py-2 px-4 rounded-sm ml-[41%] my-2 ${choiceCat==="All" && "bg-red-600 text-white"} ` }
        onClick={()=>{
          dispatch(selectCategory("All"));
          
        }}
        >
          <h1 className="font-bold">All</h1>
        </button>
       </div>


<div className="flex flex-wrap gap-4 items-center justify-center py-2">
{
  categories.map((category,index)=>{
    return (
      <button
      onClick={()=>{
        dispatch(selectCategory(category));
        
        
      }}
      key={index} className={`bg-gray-400 hover:bg-green-600 hover:text-white
       text-black py-2 px-4 rounded-sm ${choiceCat=== category  && "bg-blue-600 text-white" } `}>
      <h1 className="font-bold">{category}</h1>
    </button>
    )
  })
}
</div>

       {/* <button className="bg-gray-400 hover:bg-green-600 hover:text-white text-black py-2 px-4  rounded-sm">
          <h1 className="font-bold">Breakfast</h1>
        </button>
        <button className="bg-gray-400 hover:bg-green-600 hover:text-white text-black py-2 px-4  rounded-sm">
          <h1 className="font-bold">Lunch</h1>
        </button>
        <button className="bg-gray-400 hover:bg-green-600 hover:text-white text-black py-2 px-4  rounded-sm">
          <h1 className="font-bold">Dinner</h1>
        </button>
        <button className="bg-gray-400 hover:bg-green-600 hover:text-white text-black py-2 px-4  rounded-sm">
          <h1 className="font-bold">Snacks</h1>
        </button>*/}
      </div>
    
  );
};

export default Category;
