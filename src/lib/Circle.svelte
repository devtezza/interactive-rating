<script>
    import { fly, fade, slide } from 'svelte/transition';
    export let content;
    export let pointerStatus;
    export let selectedRatingValue;

    let elementID = content.number;

    import { createEventDispatcher } from "svelte";       
    import Star from "./Star.svelte";

    const dispatch = createEventDispatcher();
    const clickSelected = () => {        
        dispatch('item', {
            number: content.number,
            selected: selectedRatingValue
        });        
    }
</script>

<div 
    class="w-10 h-10 grid p-1 place-items-center rounded-full bg-dark-blue-lighted text-sm text-light-grey transition-colors duration-300" 
    class:cursor-pointer={pointerStatus} class:hover:bg-primary={pointerStatus} class:hover:text-white={pointerStatus} class:selected={content.selected} class:bg-light-grey={content.selected} 
    on:click={clickSelected} id={elementID}      
>
    {#if content === 'star'}
    <Star />
    {:else}
    {content.number}
    {/if}
</div>