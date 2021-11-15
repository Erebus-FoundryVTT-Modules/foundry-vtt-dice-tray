# Foundry VTT Simple Dice Tray

A Dice Tray for you Foundry Virtual Tabletop.

![dice tray](./assets/dice-tray.png)

---

## Settings

By default, the dice tray will be rendered expanded when a user loads the tabletop. If a user would prefer the dice tray to render collapsed, they can set this on an individual basis under `Configure Settings` &rarr; `Module Settings`.

---

## How to use

<image align="right" src="./assets/dice-tray-use.gif" style="padding-left: 1rem;" />

The dice tray contains a button representing each standard die used for tabletop gaming - a d4, d6, d8, d10, d12, d20, and d100. Left-clicking any of these buttons will add one of that die to the tray. Continual left-clicking will add another. To remove one of that die from the tray, each button can be right-clicked. Each button is also tab-focusable. Pressing enter or spacebar file focusing any of these buttons will do the same as left-clicking that button. Pressing backspace or delete will do the same as right-clicking.

The dice tray's **Clear** button will clear out any selected dice in your tray.

Pressing the **Adv** button will apply the `kh` modifier to all of the dice in your tray. Pressing the **dAdv** button will apply the `kl` modifier. Only one of either **Adv** or **dAdv** can be pressed at a time.

The number input to the left of Roll allows you to add a static modifier to your roll. That value can be anything from -99 to 99.

The **Roll** button will submit the dice in your tray and roll them to the chat log.

---

## Collapsing the tray

<image align="right" src="./assets/dice-tray-collapse.gif" style="padding-left: 1rem;" />

The dice tray can be collapsed at any time to free up space in your window. This is done by left-clicking on the `.chat-control-icon` - the d20 just above the chat message textarea.

---

## Dependencies

- Foundry VTT Feather Icons
  - manifest: https://raw.githubusercontent.com/Erebus-FoundryVTT-Modules/foundry-vtt-feather-icons/main/module.json
  - url: https://github.com/Erebus-FoundryVTT-Modules/foundry-vtt-feather-icons
