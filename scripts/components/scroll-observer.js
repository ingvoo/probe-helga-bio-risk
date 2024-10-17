/*----------------------------------------*\
  Scroll Observer
\*----------------------------------------*/

const sections = Array.from(document.querySelectorAll(".section"));

const observerOptions = {
  rootMargin: "0px",
  threshold: 0.8,
};

const imagePath = "../../assets/images/";

function callback(entries, observer) {
  entries.forEach((entry) => {
    const colorProperty = entry.target.getAttribute("data-color");
    const imageSource = entry.target.getAttribute("data-image");
    document.documentElement.style.setProperty(
      "--color-background",
      `var(${colorProperty})`,
    );
    document.documentElement.style.setProperty(
      "--section-image",
      `url('${imagePath}${imageSource}')`,
    );
  });
}

let observer = new IntersectionObserver(callback, observerOptions);
sections.forEach((section) => observer.observe(section));
