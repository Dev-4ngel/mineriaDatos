export function openModal() {
  const dialogs = document.querySelectorAll("dialog");
  const buttons = document.querySelectorAll("button[id=open]");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const dialog = dialogs[index];
      if (dialog) {
        dialog.showModal();
      }
    });
  });

  dialogs.forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName === "DIALOG") {
        dialog.close();
      }
    });
  });
}
