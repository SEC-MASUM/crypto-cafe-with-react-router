import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CoinDetails = () => {
  const { id } = useParams();

  const [coinData, setCoinData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    axios.get(url).then((data) => {
      setCoinData(data.data);
      //   console.log(data.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center">
            <div className="order-2 md:order-1">
              <div>
                <h1 className="text-3xl">General Info: </h1>
                <hr />
                <p>Coin Name: {coinData.name}</p>
                <p>Market Cap Rank: {coinData.market_cap_rank}</p>
                <p>Origin: {coinData.origin || "Not Available"}</p>
                <p>Contract Address: {coinData.contract_address}</p>
                <p>Hashing Algorithm: {coinData.hashing_algorithm}</p>
                <p>Genesis Date: {coinData.genesis_date}</p>
                <p>Last Updated: {coinData.last_updated}</p>
              </div>

              <div>
                <h1 className="text-3xl mt-4">Scores:</h1>
                <hr />
                <p>Community Score: {coinData.community_score}</p>
                <p>Developer Score: {coinData.developer_score}</p>
                <p>Liquidity Score: {coinData.liquidity_score}</p>
                <p>Public Interest Score: {coinData.public_interest_score}</p>
              </div>
            </div>

            <div className="flex order-1 md:order-2 justify-center items-center">
              <img src={coinData?.image?.large} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
