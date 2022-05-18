<script lang="ts">
    import errorGif from 'images/error.gif';

	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	main {
        color: #FFF;
        text-align: center;
    }

    img {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.5);
        z-index: -1;
        opacity: .1;
    }
</style>

<svelte:head>
	<title>{status} - Movie not found</title>
</svelte:head>

<main>
    <h1>{status}</h1>
    <p>{error.message}</p>

    {#if dev && error.stack}
        <pre>{error.stack}</pre>
    {/if}

    <img src={errorGif} alt="error" />
</main>
