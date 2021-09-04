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
    {die}
  {/if}
</button>

<style lang="scss">
  .dice-tray-btn {
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;

    &.d4 {
      background-image: url("../icons/d4.svg");
    }

    &.d6 {
      background-image: url("../icons/d6.svg");
    }

    &.d8 {
      background-image: url("../icons/d8.svg");
    }

    &.d10 {
      background-image: url("../icons/d10.svg");
    }

    &.d12 {
      background-image: url("../icons/d12.svg");
    }

    &.d20 {
      background-image: url("../icons/d20.svg");
    }

    // &.d100 {
    //   background-image: url("/icons/d6.svg");
    // }
  }
</style>
