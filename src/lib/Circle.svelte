<script> 
    import { createEventDispatcher } from "svelte";       
    import Star from "./Star.svelte";

    export let content;
    export let pointerStatus;
    export let selectedRatingValue;    

    const dispatch = createEventDispatcher();
    const clickSelected = () => {        
        dispatch('item', {
            option: content.option,
            selected: selectedRatingValue
        });        
    }
</script>

<div 
    class="w-10 h-10 grid p-1 place-items-center rounded-full bg-dark-blue-lighted text-sm text-light-grey transition-colors duration-300" 
    class:cursor-pointer={pointerStatus} class:hover:bg-primary={pointerStatus} class:hover:text-white={pointerStatus} class:selected={content.selected} class:bg-light-grey={content.selected} 
    on:click={clickSelected}      
>
    {#if content === 'star'}
    <Star />
    {:else}
    <!--If content is not a star, then dynamycally fill each circle with its correspondent number -->
    {content.option}
    {/if}
</div>