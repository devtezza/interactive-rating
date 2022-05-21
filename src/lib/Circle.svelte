<script>
    export let content;
    export let pointerStatus;
    
    import { createEventDispatcher } from "svelte";       
    import Star from "./Star.svelte";

    const dispatch = createEventDispatcher();
    const clickSelected = () => {
        dispatch('item', {
            number: content
        });        
    }
</script>

<div class="w-10 h-10 grid p-1 place-items-center rounded-full bg-dark-blue-lighted  text-sm text-light-grey" class:cursor-pointer={pointerStatus} class:hover:bg-primary={pointerStatus} class:hover:text-white={pointerStatus} on:click={clickSelected}>
    {#if content === 'star'}
    <Star />
    {:else}
    {content}
    {/if}
</div>