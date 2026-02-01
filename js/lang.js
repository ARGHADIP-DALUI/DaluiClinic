const buttons = document.querySelectorAll(".lang-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");

    if (lang === "en") {
      window.location.href = "html/page1-en.html";
    } else if (lang === "bn") {
      window.location.href = "html/page1-bn.html";
    } else if (lang === "hi") {
      window.location.href = "html/page1-hi.html";
    }
  });
});
