<script>
  import D4 from "./D4.svelte";
  import D6 from "./D6.svelte";
  import D8 from "./D8.svelte";
  import D10 from "./D10.svelte";
  import D12 from "./D12.svelte";
  import D20 from "./D20.svelte";
  import { dicePool } from "../store";
  export let die;

  const dieMap = {
    4: D4,
    6: D6,
    8: D8,
    10: D10,
    12: D12,
    20: D20,
  };

  function handleKeyup({ key }) {
    if ({ Delete: 1, Backspace: 1 }[key]) {
      dicePool.decrementDie(die);
    }
  }
  function handleWheelEvent({ deltaY }) {
    if (deltaY < 0) {
      dicePool.incrementDie(die);
      return;
    }
    dicePool.decrementDie(die);
  }
</script>

<button
  class="dice-tray-btn d{die}"
  on:click={() => dicePool.incrementDie(die)}
  on:contextmenu|preventDefault={() => dicePool.decrementDie(die)}
  on:keyup={handleKeyup}
  on:wheel={handleWheelEvent}
>
  {#if die == 100}
    100
  {:else}
    <svelte:component this={dieMap[die]} />
  {/if}
</button>

<style lang="scss">
  .dice-tray-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
