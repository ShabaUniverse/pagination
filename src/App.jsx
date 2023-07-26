import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await(axios.get(''))
    }
  })

  return (
    <div className='App'>
      Pagination
    </div>
  )
}

export default App
