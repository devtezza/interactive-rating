<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    const handleSubmit = () => {
        dispatch('vote');
    }
</script>

<button class="uppercase align-middle h-11 bg-primary rounded-3xl text-white text-sm tracking-widest hover:bg-white hover:text-primary transition-colors duration-500" on:click={handleSubmit}>
    Submit
</button>