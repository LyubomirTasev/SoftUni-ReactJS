import MovieList from './components/movieList'
import Timer from './components/Timer'
import Counter from './components/Counter'
import './App.css'

const movies = [
  {
    title: 'Beautiful Creatures',
    year: '2013',
    cast: "Alden Ehrenreich, Alice Englert, Jeremy Irons"
  },
  {
    title: 'Twilight',
    year: '2008',
    cast: "Kristen Stewart, Robert Pattinson"

  },{
    title: 'Scooby Doo',
    year: '2002',
    cast: "Freddie Prinze Jr., Sarah Michelle Gellar, Matthew Lillard, Linda Cardellini"

  }
]
function App() {

  return (
    <div>
      <h1>My First Dynamic React Application</h1>

      <Counter />

      <Timer startTime = {5}/>

      <MovieList movies = {movies} headingText='Best movies for Halloween' />
    </div>
  )
}

export default App
