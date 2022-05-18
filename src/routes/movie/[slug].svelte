<script context="module">
	export async function preload({ params }) {
		const result = await this.fetch(`movie/${params.slug}.json`);
        const data = await result.json();
        
        return result.status === 200
            ? { movie: data }
            : this.error(result.status, data.message);
	}
</script>

<script>
    import Card from '../../components/Card.svelte';

	export let movie;
</script>

<style type="text/scss">
    main {
        display: flex;
        color: #FFF;

        > div {
            padding: 20px;
            text-align: justify;
            background: #1a1a1a;
            margin-left: 10px;
            border-radius: 5px;
        }

        .list {
            margin: 10px 0;
        }
    }
</style>

<svelte:head>
	<title>{movie.title}</title>
</svelte:head>

<main>
    <Card
        showBackButton={true}
        title={movie.title}
        image={movie.image}
        score={movie.score} />
    <div>
        {movie.description}

        <div class="list">
            <b>Creators:</b> {movie.creators}
        </div>

        <div class="list">
            <b>Stars:</b> {movie.stars}
        </div>
    </div>
</main>