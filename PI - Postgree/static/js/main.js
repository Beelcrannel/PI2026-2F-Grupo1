document.addEventListener("DOMContentLoaded", () => {
  const flashes = document.querySelectorAll(".flash");
  if (flashes.length) {
    setTimeout(() => {
      flashes.forEach((f) => {
        f.style.opacity = "0";
        f.style.transition = "opacity 0.4s ease";
        setTimeout(() => f.remove(), 500);
      });
    }, 3500);
  }

  // Exibir campo de CRMV apenas quando o usuário escolher "Veterinário"
  const roleSelect = document.querySelector('select[name="role"]');
  const vetOnlyFields = document.querySelectorAll(".vet-only");
  if (roleSelect && vetOnlyFields.length) {
    const toggleVetFields = () => {
      const isVet = roleSelect.value === "veterinario";
      vetOnlyFields.forEach((el) => {
        el.style.display = isVet ? "flex" : "none";
      });
    };
    roleSelect.addEventListener("change", toggleVetFields);
    toggleVetFields();
  }
});

