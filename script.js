// Personalize o número abaixo com DDI + DDD + telefone, somente números.
const WHATSAPP_NUMBER = "5511999999999";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuButton.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappFloat = document.getElementById("whatsapp-float");
whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para serviços elétricos.")}`;
whatsappFloat.target = "_blank";
whatsappFloat.rel = "noopener noreferrer";

document.getElementById("quote-form").addEventListener("submit", event => {
  event.preventDefault();

  if (WHATSAPP_NUMBER === "5511999999999") {
    alert("Antes de publicar, personalize o número de WhatsApp no arquivo script.js.");
    return;
  }

  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const phone = form.get("phone").trim() || "Não informado";
  const service = form.get("service");
  const message = form.get("message").trim() || "Sem detalhes adicionais.";

  const text = `Olá! Meu nome é ${name}.\nTelefone: ${phone}\nServiço: ${service}\nDetalhes: ${message}\n\nGostaria de solicitar um orçamento.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
