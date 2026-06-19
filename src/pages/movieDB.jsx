import { useEffect, useState } from 'react'
import './App.css'

const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const API_BASE = 'https://www.omdbapi.com/'

function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('Search movies by title, actor, or year.')
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('movieFavorites') ?? '[]')
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites))
  }, [favorites])

  const hasApiKey = typeof API_KEY === 'string' && API_KEY.trim().length > 0

  const fetchMovies = async (searchTerm) => {
    if (!hasApiKey) {
      setStatus('error')
      setMessage('Missing OMDb API key. Add VITE_OMDB_API_KEY to .env.local.')
      return
    }

    setStatus('loading')
    setMessage('Searching movies...')
    setSelectedMovie(null)

    const url = `${API_BASE}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&type=movie`

    try {
      const response = await fetch(url)
      const result = await response.json()

      if (result.Response === 'False') {
        setMovies([])
        setStatus('empty')
        setMessage(result.Error ?? 'No movies found.')
        return
      }

      setMovies(result.Search)
      setStatus('success')
      setMessage(`${result.totalResults} movie${result.totalResults !== '1' ? 's' : ''} found.`)
    } catch (error) {
      setMovies([])
      setStatus('error')
      setMessage('Unable to fetch movies. Check your connection.')
    }
  }

  const fetchMovieDetails = async (imdbID) => {
    if (!hasApiKey || !imdbID) return

    setStatus('loading')
    setMessage('Loading movie details...')

    try {
      const response = await fetch(`${API_BASE}?apikey=${API_KEY}&i=${imdbID}&plot=full`)
      const result = await response.json()

      if (result.Response === 'False') {
        setStatus('error')
        setMessage(result.Error ?? 'Could not load movie details.')
        return
      }

      setSelectedMovie(result)
      setStatus('success')
      setMessage('Movie details loaded successfully.')
    } catch (error) {
      setStatus('error')
      setMessage('Unable to load movie details.')
    }
  }

  const handleSearch = (event) => {
    event.preventDefault()
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      setStatus('idle')
      setMessage('Type a movie title first.')
      return
    }

    fetchMovies(trimmedQuery)
  }

  const toggleFavorite = (movie) => {
    const exists = favorites.some((item) => item.imdbID === movie.imdbID)

    if (exists) {
      setFavorites(favorites.filter((item) => item.imdbID !== movie.imdbID))
      return
    }

    setFavorites([{ imdbID: movie.imdbID, Title: movie.Title, Year: movie.Year, Poster: movie.Poster }, ...favorites])
  }

  const isFavorite = (movie) => favorites.some((item) => item.imdbID === movie.imdbID)

  return (
    <div className="app-shell">
      <header className="hero-panel">
        <div>
          <span className="eyebrow">Movie Database</span>
          <h1>Discover films, build favorites, and explore details.</h1>
          <p>
            Search the OMDb catalog for movies, view posters, plot summaries,
            cast, ratings, and save the titles you want to revisit.
          </p>
        </div>
        <div className="hero-actions">
          <div className="badge">OMDb Powered</div>
          <div className="feature-list">
            <span>Search by title</span>
            <span>Detail panel</span>
            <span>Favorites</span>
          </div>
        </div>
      </header>

      <section className="search-panel">
        <form className="search-form" onSubmit={handleSearch}>
          <label htmlFor="movie-search">Search movies</label>
          <div className="search-input-row">
            <input
              id="movie-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter a movie title, actor or year..."
            />
            <button type="submit">Search</button>
          </div>
        </form>

        <div className="status-bar">
          <p>{message}</p>
          {status === 'loading' && <span className="pulse" />}
        </div>
      </section>

      <main className="content-grid">
        <section className="results-panel">
          <div className="panel-heading">
            <h2>Search results</h2>
            <p>{movies.length ? `${movies.length} movies ready to explore.` : 'Start a search to see results.'}</p>
          </div>

          {movies.length > 0 ? (
            <div className="movie-grid">
              {movies.map((movie) => (
                <article key={movie.imdbID} className="movie-card">
                  <button
                    type="button"
                    className="movie-card-button"
                    onClick={() => fetchMovieDetails(movie.imdbID)}
                  >
                    <div className="poster-frame">
                      {movie.Poster && movie.Poster !== 'N/A' ? (
                        <img src={movie.Poster} alt={`${movie.Title} poster`} />
                      ) : (
                        <div className="poster-placeholder">No image</div>
                      )}
                    </div>
                    <div className="movie-meta">
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className={`favorite-toggle ${isFavorite(movie) ? 'favorite-active' : ''}`}
                    onClick={() => toggleFavorite(movie)}
                  >
                    {isFavorite(movie) ? '★ Saved' : '☆ Save'}
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>Use the search bar to discover movies from the OMDb catalog.</p>
            </div>
          )}
        </section>

        <aside className="sidebar-panel">
          <div className="panel-heading">
            <h2>Movie details</h2>
            <p>Pick a result to view richer information.</p>
          </div>

          {selectedMovie ? (
            <article className="detail-card">
              <div className="detail-header">
                <div>
                  <h3>{selectedMovie.Title}</h3>
                  <p>{selectedMovie.Year} • {selectedMovie.Runtime} • {selectedMovie.Genre}</p>
                </div>
                <button
                  type="button"
                  className={`favorite-toggle ${isFavorite(selectedMovie) ? 'favorite-active' : ''}`}
                  onClick={() => toggleFavorite(selectedMovie)}
                >
                  {isFavorite(selectedMovie) ? '★ Saved' : '☆ Save'}
                </button>
              </div>

              <div className="detail-body">
                <div className="detail-poster">
                  {selectedMovie.Poster && selectedMovie.Poster !== 'N/A' ? (
                    <img src={selectedMovie.Poster} alt={`${selectedMovie.Title} poster`} />
                  ) : (
                    <div className="poster-placeholder">No image</div>
                  )}
                </div>
                <div className="detail-copy">
                  <p className="detail-tag">{selectedMovie.Rated} • {selectedMovie.Director}</p>
                  <p>{selectedMovie.Plot}</p>
                  <div className="detail-grid">
                    <span><strong>Cast</strong><br />{selectedMovie.Actors}</span>
                    <span><strong>Awards</strong><br />{selectedMovie.Awards}</span>
                    <span><strong>IMDB</strong><br />{selectedMovie.imdbRating}</span>
                    <span><strong>Language</strong><br />{selectedMovie.Language}</span>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <div className="empty-state">
              <p>Select a movie card to inspect plot, cast, ratings, and more.</p>
            </div>
          )}

          <div className="panel-heading">
            <h2>Favorites</h2>
            <p>Movies you saved for later.</p>
          </div>

          {favorites.length > 0 ? (
            <div className="favorite-list">
              {favorites.map((movie) => (
                <div key={movie.imdbID} className="favorite-item">
                  <div>
                    <strong>{movie.Title}</strong>
                    <p>{movie.Year}</p>
                  </div>
                  <button type="button" onClick={() => toggleFavorite(movie)}>Remove</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>Your favorite list is empty. Save a movie from the search results.</p>
            </div>
          )}
        </aside>
      </main>
    </div>
  )
}

export default App
