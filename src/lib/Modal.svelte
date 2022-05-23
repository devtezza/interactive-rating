<script> 
    import { fly, fade, slide } from 'svelte/transition';
    import Circle from "./Circle.svelte";
    import Button from "./Button.svelte";
    import Illustration from "./Illustration.svelte";
    import Badge from './Badge.svelte';

    let star = 'star';
    let other ='other';
    const numbers = [{number: 1, selected: false}, {number: 2, selected: false}, {number: 3, selected: false}, {number: 4, selected: false}, {number: 5, selected: false}];
    let pointerStatus = false;
    let voted = false;
    $: message = false;
    let index;
    let selectedRating = false;
    let selectedRatingValue = 0;

    $: selectRating = (event) => {
        selectedRating = true;
        message = false;
        selectedRatingValue = event.detail.number;
        index = event.detail.number - 1;
        // console.log(`selected = ${selectedRatingValue}`);
        numbers.map(item => item.number === selectedRatingValue ? item.selected = true : item.selected = false);
        // console.log(numbers);
        numbers[index].selected = true;
        // console.log(`number = ${numbers[index].number}`);
    }

    const updateVoted = () => {
        if(selectedRatingValue > 0) {
            
            voted = true;
        } else message = true;
        console.log('voted', voted);
    }
    
</script>

{#if ! voted} 
<div class="modal unvoted py-7 md:w-88">    
    <Circle content={star} {pointerStatus} {selectedRatingValue}/>
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    <div class="ratings flex justify-between mb-2">
        {#each numbers as number }
        <Circle content={number} pointerStatus={true} {selectedRatingValue} on:item={selectRating}/>
    {/each}
    </div>
    <Button on:vote={updateVoted}/>
    {#if message}
        <p class="text-center text-primary mb-0 mt-3" transition:slide>Choose a rating value between 1 and 5</p>
    {/if}
</div>
{:else}
<div class="modal voted pt-7 pb-8 md:w-88">
    <Illustration />
    <Badge {selectedRatingValue}/>
    <h1 class="text-center">Thank you!</h1>
    <p class="text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
</div>
{/if}