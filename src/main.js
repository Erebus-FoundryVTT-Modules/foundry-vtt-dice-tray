import App from "./App.svelte";

Hooks.once("init", () => {
  game.settings.register("foundry-vtt-dice-tray", "startVisible", {
    name: "Render page with dice tray visible",
    hint: "Choose whether to start with dice tray visible",
    scope: "client", // This specifies a client-stored setting
    config: true, // This specifies that the setting appears in the configuration view
    type: Boolean,
    choices: {
      // If choices are defined, the resulting setting will be a select menu
      true: "Yes",
      false: "No",
    },
    default: true, // The default value for the setting
  });

  Hooks.once("renderChatLog", (app, html, data) => {
    html.find("#chat-form").after(`<div id="foundry-vtt-dice-tray"></div>`);
    const target = html.find("#foundry-vtt-dice-tray")[0];
    new App({
      target,
      props: {
        isVisible: game.settings.get("foundry-vtt-dice-tray", "startVisible"),
      },
    });
  });
});
