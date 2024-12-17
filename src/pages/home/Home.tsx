import MovieCard from "../../components/movie-card/MovieCard";
import Movie from "../../core/props/movie-card/MovieCardInterface";
const movies: Movie[] = [
  {
    title: "Inception",
    release_date: new Date("2010-07-16"),
    image_url: "https://example.com/inception.jpg",
    movie_description:
      "A thief who steals corporate secrets through the use of dream-sharing technology.",
  },
  {
    title: "The Matrix",
    release_date: new Date("1999-03-31"),
    image_url: "https://example.com/matrix.jpg",
    movie_description:
      "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    title: "Interstellar",
    release_date: new Date("2014-11-07"),
    image_url: "https://example.com/interstellar.jpg",
    movie_description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    title: "The Dark Knight",
    release_date: new Date("2008-07-18"),
    image_url: "https://example.com/dark-knight.jpg",
    movie_description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.",
  },
  {
    title: "Fight Club",
    release_date: new Date("1999-10-15"),
    image_url: "https://example.com/fight-club.jpg",
    movie_description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
  },
  {
    title: "Pulp Fiction",
    release_date: new Date("1994-10-14"),
    image_url: "https://example.com/pulp-fiction.jpg",
    movie_description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    title: "Forrest Gump",
    release_date: new Date("1994-07-06"),
    image_url: "https://example.com/forrest-gump.jpg",
    movie_description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
  },
  {
    title: "The Shawshank Redemption",
    release_date: new Date("1994-09-23"),
    image_url: "https://example.com/shawshank.jpg",
    movie_description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    title: "Gladiator",
    release_date: new Date("2000-05-05"),
    image_url: "https://example.com/gladiator.jpg",
    movie_description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
  },
  {
    title: "The Godfather",
    release_date: new Date("1972-03-24"),
    image_url: "https://example.com/godfather.jpg",
    movie_description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
];

const Home: React.FC = () => {
  return <div className="home">
    <div className="movies">
      {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
      ))}
    </div>
  </div>;
};

export default Home;
