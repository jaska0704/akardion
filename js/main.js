document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      accordionItem.classList.toggle("active");

      const accordionContent =
        accordionItem.querySelector(".accordion-content");
      if (accordionItem.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = 0;
      }

      const otherAccordionItems = document.querySelectorAll(
        ".accordion-item:not(.active)"
      );
      otherAccordionItems.forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".accordion-content").style.maxHeight = 0;
      });
    });
  });
});
