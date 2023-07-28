import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";
import ByLetter from "./components/ByLetter";

function App() {
  // states
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [letter, setLetter] = useState("");
  let countriesPerPage = 10;

  // API request
  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(res.data);
      setLoading(false);
      console.log(letter);
    };
    getCountries();
  }, [letter]);

  // declare first and last indexs of countries on page
  let lastIndex = currentPage * countriesPerPage;
  let firstIndex = lastIndex - countriesPerPage;

  // filter countries by letter
  let filteredCountries = countries.filter(
    (item) => item.name.common[0] === letter,
  );

  // set countries on page
  let currentCountries =
  letter === ""                    // if first letter is not declared
  ? countries.slice(firstIndex, lastIndex)   //then make slice on countries
  : filteredCountries.slice(firstIndex, lastIndex); // if first letter declared, then slice on filtered one

  
  // get quantity of pagination pages
  let quantityOfPages =
    letter === ""                 //if there is no letter setting    
      ? Math.ceil(countries.length / countriesPerPage) //then
      : Math.ceil(filteredCountries.length / countriesPerPage); //otherwise


  // logic for next and previous page click
  const nextPage = (num) => {
    setCurrentPage(num + 1);
  };

  const previousPage = (num) => {
    setCurrentPage(num - 1);
  };



  return (
    <div className="App">
      <div className="container w-4/5 mx-auto">
        <h1 className="mt-2 text-blue-500 font-semibold text-2xl">Countries</h1>
        <ByLetter setLetter={setLetter} />
        <Countries
          countries={currentCountries}
          loading={loading}
        />

        <Pagination
          quantityOfPages={quantityOfPages}
          setCurrentPage={setCurrentPage}
        />

        <div className="controls flex justify-center items-center">
          <button
            className=" text-3xl bg-blue-500 px-4 rounded-lg hover:bg-blue-300 mx-1"
            onClick={() => previousPage(currentPage)}>
            {" < "}
          </button>
          <button
            className=" text-3xl bg-blue-500 px-4 rounded-lg hover:bg-blue-300 mx-1"
            onClick={() => nextPage(currentPage)}>
            {" > "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
