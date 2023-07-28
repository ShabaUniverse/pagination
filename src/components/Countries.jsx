import React from "react";

const Countries = ({ countries, loading }) => {

  //if loading is true, then display this
  if (loading) {
    return (
      <div className="loading">
        <p>Loading..</p>
      </div>
    );
  }
  //otherwise, display this
  return (
    <div className="countries h-96">
      {countries.map((item, i) => (
        <div className="country flex justify-start items-center" key={i}>
          <p className="mr-3">{item.name.common}</p>
          <img src={item.flags.png} alt="flags" className="w-7 h-5" />
        </div>
      ))}
    </div>
  );
};

export default Countries;
