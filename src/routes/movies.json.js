import movies from '../data/movies';

const movieList = movies.map(movie => ({
    title: movie.title,
    slug: movie.slug,
    image: movie.image,
    score: movie.score
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(movieList));
}