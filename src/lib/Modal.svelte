<script> 
    import { fly, fade } from 'svelte/transition';
    import Circle from "./Circle.svelte";
    import Button from "./Button.svelte";
    import Illustration from "./Illustration.svelte";
    import Badge from './Badge.svelte';

    let star = 'star';    
    const options = [{option: 1, selected: false}, {option: 2, selected: false}, {option: 3, selected: false}, {option: 4, selected: false}, {option: 5, selected: false}];
    let pointerStatus = false;
    let voted = false;    
    let index;
    let selectedRating = false;
    let selectedRatingValue = 0;

    $: message = false;

    $: selectRating = (event) => {
        selectedRating = true;
        message = false;
        selectedRatingValue = event.detail.option;
        index = event.detail.option - 1;
        
        options.map(item => item.option === selectedRatingValue ? item.selected = true : item.selected = false);        
        options[index].selected = true;
        
    }

    const updateVoted = () => {
        if(selectedRatingValue > 0) // verifies if user has selected one of the rating values            
            voted = true;
        else message = true;     // if no value is selected, display a message to the user, ensuring they don't submit a rating without choosing a number   
    }
    
</script>

{#if ! voted} 
<div class="modal unvoted py-7 md:w-88">    
    <Circle content={star} {pointerStatus} {selectedRatingValue}/>
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    <div class="ratings flex justify-between mb-2">
        {#each options as option }
        <Circle content={option} pointerStatus={true} {selectedRatingValue} on:item={selectRating}/>
    {/each}
    </div>
    <Button on:vote={updateVoted}/>
    {#if message}
        <p class="text-center text-primary mb-0 mt-3" transition:fly>Choose a rating value between 1 and 5</p>
    {/if}
</div>
{:else}
<div class="modal voted pt-7 pb-8 md:w-88 origin-bottom" in:fade="{{duration: 500}}">
    <Illustration />
    <Badge {selectedRatingValue}/>
    <h1 class="text-center">Thank you!</h1>
    <p class="text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
</div>
{/if}