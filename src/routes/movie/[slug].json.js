import movies from '../../data/movies';

export function get(request, response, next) {
    const { slug } = request.params;
    const movie = movies.find(movie => movie.slug === slug);

	if (movie) {
		response.writeHead(200, {
			'Content-Type': 'application/json'
		});

		response.end(JSON.stringify(movie));
	} else {
		response.writeHead(404, {
			'Content-Type': 'application/json'
		});

		response.end(JSON.stringify({
            message: 'Movie not found',
		}));
	}
}
