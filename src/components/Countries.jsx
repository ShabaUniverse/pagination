import React from "react";

const Countries = ({ currentCountry , loading }) => {
  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <div className="countries">
      <div className="country-displayer">
        {currentCountry.map((country, i) => (
            <div className="element flex justify-start items-center mt-2 border border-gray-300 p-1">
                <p className="mr-2">{country.name.common}</p>
                <img src={country.flags.png} alt="flag" className=" w-8 h-6"/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
