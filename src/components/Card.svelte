<script>
    import Rating from './Rating.svelte';
    import BackButton from './BackButton.svelte';

    export let image;
    export let score;
    export let title;
    export let showBackButton;
</script>

<style type="text/scss">
    article {
        background: #1A1A1A;
        color: #FFF;
        border-radius: 5px;
        min-width: 180px;
        min-height: 300px;

        img {
            display: block;
            min-height: 265px;
        }

        div {
            padding: 10px;

            h3 {
                margin: 10px 0 0 0;
                font-weight: normal;
                font-size: 18px;
            }
        }
    }
</style>

<article>
    {#if showBackButton}
        <BackButton />
    {/if}
    <img src={image} alt={`${title} poster`} />
    <div>
        <Rating score={score} />
        <h3>{title}</h3>
    </div>
</article>