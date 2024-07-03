import { useState } from 'react';
import Table from './Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchData, setSearchData] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Amanda Waller Shirt Men', price: 333, category: 'Fashion' },
    { id: 2, name: 'Abercrombie Allen Brook Shirt', price: 70, category: 'Fashion' },
    { id: 3, name: 'Abercrombie Lake Arnold Shirt', price: 60, category: 'Fashion' },
    { id: 4, name: 'Bench Shirt', price: 29, category: 'Fashion' },
  ]);
  const handleChange = (event) => {
    setSearchData(event.target.value);
  };

  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(searchData.toLowerCase())
  );
  return (
    <>
      <div className="container mt-4">
        <h1>Search products: shirt</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchData}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <Table data={filterData} />
        <button className="btn btn-primary mt-3">+ Create Product</button>
      </div>

  
    </>
  );
}

export default App;
