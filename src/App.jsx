import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(res.data);
      setLoading(false);
    };
    getCountries();
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((current) => current + 1);
  };

  const prevPage = () => {
    setCurrentPage((current) => current - 1);
  };

  return (
    <div className="App">
      <div className="container w-4/5 mx-auto">
        <h1 className=" text-blue-500 mt-4 font-bold text-2xl">Countries</h1>
        <Countries currentCountry={currentCountry} loading={loading} />
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
          paginate={paginate}
        />

        <div className="buttons flex justify-center items-center my-2">
          <button
            className="border-2 border-transparent bg-blue-500 p-1 mx-4 rounded-sm text-white hover:border-2 hover:border-blue-300"
            onClick={prevPage}>
            Prev Page
          </button>
          <button
            className="border-2 border-transparent bg-blue-500 p-1 mx-12 rounded-sm text-white hover:border-2 hover:border-blue-300"
            onClick={nextPage}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
