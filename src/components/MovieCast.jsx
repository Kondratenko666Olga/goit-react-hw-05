import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../api';
import PropTypes from 'prop-types';


const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(member => (
          <li key={member.cast_id}>{member.name} as {member.character}</li>
        ))}
      </ul>
    </div>
  );
};

MovieCast.propTypes = {
    movieId: PropTypes.string.isRequired,
  };

export default MovieCast;