import { useDispatch, useSelector } from 'react-redux';
import PhotoCard from './components/PhotoCard';
import { setError, setLoading, setPhotos, setQuery } from './search.slice';
import { fetchPhotos } from './unsplash.api';

const App = () => {

  const { query, photos, loading, error } = useSelector((store) => store.search);

  const dispatch = useDispatch();


  const handleSearch = async () => {
    try {
      dispatch(setLoading());
      dispatch(setPhotos(await fetchPhotos(query)));
    } catch (err) {
      console.error("Error fetching photos:", err);
      dispatch(setError(err));
    }
  }

  return (
    <main>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for photos..."
          value={query}
          onChange={(e) => {
            dispatch(setQuery(e.target.value));
          }}
        />
        <button
          className='search-btn'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {loading ? (
        <div className='loading'>
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <div className='error'>
          {error.message || error}
        </div>
      ) : photos && photos.length > 0 ? (
        <div className="show-photos">
          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      ) : (
        <div className='empty'>No photos yet. Try searching!</div>
      )}
    </main>
  )
}

export default App
