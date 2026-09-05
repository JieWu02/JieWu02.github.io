/* Keep author lines within the actual rendered width of their paper title. */
(function () {
  "use strict";

  var items = Array.from(document.querySelectorAll(".publication-item"));
  if (!items.length) return;

  var pending = false;
  function alignAuthors() {
    pending = false;
    var measurements = items.map(function (item) {
      var title = item.querySelector(".publication-item__title a");
      var authors = item.querySelector(".publication-item__authors");
      if (!title || !authors) return null;

      var range = document.createRange();
      range.selectNodeContents(title);
      var width = Array.from(range.getClientRects()).reduce(function (longest, rect) {
        return Math.max(longest, rect.width);
      }, 0);
      return width > 0 ? { authors: authors, width: Math.ceil(width) + "px" } : null;
    });

    measurements.forEach(function (measurement) {
      if (measurement && measurement.authors.style.getPropertyValue("--publication-title-width") !== measurement.width) {
        measurement.authors.style.setProperty("--publication-title-width", measurement.width);
      }
    });
  }

  function scheduleAlignment() {
    if (pending) return;
    pending = true;
    window.requestAnimationFrame(alignAuthors);
  }

  alignAuthors();
  window.addEventListener("resize", scheduleAlignment);
  if (document.fonts) {
    document.fonts.ready.then(scheduleAlignment);
    document.fonts.addEventListener("loadingdone", scheduleAlignment);
  }
  if ("ResizeObserver" in window) {
    var observer = new ResizeObserver(scheduleAlignment);
    items.forEach(function (item) { observer.observe(item); });
  }
})();
