import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleBookTicket = () => {
    const movieDetails = {
      name: show.name,
     
    };

    localStorage.setItem('movieDetails', JSON.stringify(movieDetails));
    navigate('/booking');
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4 bg-success text-white" style={{ border: '2px solid white', padding: '20px', justifyContent: 'center', fontFamily: 'Roboto, sans-serif' }}>
      <h1>Show Details</h1>
      <div className="row">
        <div className="col-md-8">
          <h2>{show.name}</h2>
          <img src={show.image?.medium} alt={show.name} className="img-fluid" />
          <p>{show.summary}</p>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Book Tickets</h5>
              <button
                onClick={handleBookTicket}
                className="btn btn-primary"
              >
                Book Movie Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="btn btn-secondary mt-3">Back to Show List</Link>
    </div>
  );
};

export default ShowDetails;
