import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4 p-4" style={{ backgroundColor: 'orange' }}>
      <h1 className="mb-4 text-center bg-primary">Show List</h1>
      <div className="row">
        {shows.map((show) => (
          <div key={show.show.id} className="col-md-3 mb-3">
            <Link to={`/show/${show.show.id}`} className="text-decoration-none text-black">
              <div className="card show-card border border-dark">
                <img
                  src={show.show.image?.medium}
                  alt={show.show.name}
                  className="card-img-top"
                />
                <div className="card-body bg-secondary">
                  <h5 className="card-title bg-warning border border-solid text-center">
                    {show.show.name}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
