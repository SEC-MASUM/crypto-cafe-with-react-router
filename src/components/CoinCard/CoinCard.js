import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  const { name, image, symbol, id } = coin;
  return (
    <div className="p-4 w-[250px] bg-white rounded-2xl shadow-lg ">
      <Link to={`/coin-details/${id}`}>
        <div className="gap-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <img
              className="mx-auto object-cover w-16 h-16 rounded-full"
              src={image}
              alt="profile"
            />
          </div>

          <div className="flex flex-col justify-end ">
            <h1 className="text-gray-600 font-medium">{name}</h1>
            <p className="text-gray-400 text-sm">
              <small>{symbol}</small>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
