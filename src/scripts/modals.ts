export function openModal() {
  const dialog = document.querySelectorAll("dialog");
  const button = document.querySelectorAll("button[type=button]");

  button.forEach((btn) => {
    btn.addEventListener("click", () => {
      dialog.forEach((d) => d.showModal());
    });
  });
}
