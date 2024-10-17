/*----------------------------------------*\
  Section Visualiser
\*----------------------------------------*/

// TODO: [CSS] Snap sections
// TODO: Change image on scroll

const sections = Array.from(document.querySelectorAll(".section"));

const observerOptions = {
  rootMargin: "0px",
  threshold: 0.8,
};

function callback(entries, observer) {
  entries.forEach((entry) => {
    const colorProperty = entry.target.getAttribute("data-color");
    document.documentElement.style.setProperty(
      "--color-background",
      `var(${colorProperty})`,
    );
  });
}

let observer = new IntersectionObserver(callback, observerOptions);
sections.forEach((section) => observer.observe(section));
