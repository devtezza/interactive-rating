<script> 
    import Circle from "./Circle.svelte";
    import Button from "./Button.svelte";

    let star = 'star';
    let other ='other';
    let numbers = [1, 2, 3, 4, 5];
    let pointerStatus = false;
    let voted = false;
    let selectedRating = false;

    const selectRating = (event) => {
        selectedRating = true;
        console.log(event.detail.number);
    }

    const updateVoted = () => {
        voted = true;
    }
    
</script>

<div class="modal container grid content-between w-80 h-88 px-5 py-7 bg-dark-blue rounded-2xl">
    <Circle content={star} {pointerStatus}/>
    <h1 class="text-white font-semibold text-2xl">How did we do?</h1>
    <p class="text-sm text-light-grey mb-3">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
    <div class="ratings flex justify-between mb-2">
        {#each numbers as number }
        <Circle content={number} pointerStatus={true} on:item={selectRating}/>
    {/each}
    </div>
    <Button />
   
</div>

<style>


/* h1 {
   
    border: 1px solid red;
  } */
</style>