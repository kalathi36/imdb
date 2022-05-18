<script context="module">
	export async function preload() {
        const res = await this.fetch('movies.json');
        const data = await res.json();

        return {
            movies: data
        };
	}
</script>

<script>
    import Card from '../components/Card.svelte';

    export let movies;
</script>

<style type="text/scss">
    ul {
        display: flex;

        li {
            margin: 0 5px;

            a {
                display: block;
                text-decoration: none;
            }
        }
    }
</style>

<svelte:head>
	<title>Top picks</title>
</svelte:head>

<ul>
    {#each movies as movie}
        <li>
            <a rel="prefetch" href="movie/{movie.slug}">
                <Card
                    title={movie.title}
                    image={movie.image}
                    score={movie.score} />
            </a>
        </li>
    {/each}
</ul>
