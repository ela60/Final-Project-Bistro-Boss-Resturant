import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} />
              </figure>
              <p className="absolute right-0 bg-slate-800 mr-4 mt-4 px-4 text-white">$ {price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title  ">{name}</h2>
                  <p>{recipe}</p>
                 
          <div className="card-actions justify-end "> 
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-200  uppercase">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
