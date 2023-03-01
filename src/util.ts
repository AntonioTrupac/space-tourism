export function changeAriaSelected(buttonId: string) {
  const buttons = document.querySelectorAll("[aria-selected]");

  buttons.forEach((button) => {
    if (button.id === buttonId) {
      button.setAttribute("aria-selected", "true");
    } else {
      button.setAttribute("aria-selected", "false");
    }
  });
}
