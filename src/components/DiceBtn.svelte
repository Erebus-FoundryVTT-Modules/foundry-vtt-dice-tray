<script>
  import { dicePool } from "../store";
  export let die;

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
    <svg width="20" height="20">
      <use
        xlink:href="modules/dnd5e-simple-dice-tray/assets/dice-sprite.svg#d{die}"
      />
    </svg>
  {/if}
</button>

<style lang="scss">
  .dice-tray-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
