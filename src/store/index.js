import { writable, derived } from "svelte/store";

function DicePool() {
  const { subscribe, update } = writable({ dice: {}, mod: 0 });
  return {
    subscribe,
    incrementDie: (die) =>
      update((pool) => {
        const dice = pool.dice;
        if (dice[die]) {
          dice[die]++;
          return pool;
        }
        dice[die] = 1;
        return pool;
      }),
    decrementDie: (die) =>
      update((pool) => {
        const dice = pool.dice;
        const count = dice[die];
        if (!count || count === 1) {
          delete dice[die];
          return pool;
        }
        dice[die]--;
        return pool;
      }),
    incrementMod: () =>
      update((pool) => {
        pool.mod++;
        return pool;
      }),
    decrementMod: () =>
      update((pool) => {
        pool.mod--;
        return pool;
      }),
    setMod: (newValue) =>
      update((pool) => {
        pool.mod = newValue ? Number.parseInt(newValue, 10) : 0;
        return pool;
      }),
    clear: () =>
      update(() => {
        return { dice: {}, mod: 0 };
      }),
  };
}
export const dicePool = DicePool();

export const khl = writable("");

export const chatString = derived([dicePool, khl], ([$dicePool, $khl]) => {
  const dice = Object.entries($dicePool.dice);
  let isFirst = true;
  let plusSign = "";
  if (dice.length) {
    let str = "/r";
    for (const [die, count] of dice) {
      str += ` ${plusSign}${count}d${die}${$khl}`;
      if (isFirst) {
        plusSign = "+ ";
        isFirst = false;
      }
    }
    if ($dicePool.mod) {
      if ($dicePool.mod < 0) {
        const modStr = $dicePool.mod.toString();
        str += ` - ${modStr.slice(1)}`;
      } else {
        str += ` + ${$dicePool.mod}`;
      }
    }
    return str;
  }
  return "";
});
