window.addEventListener("load", function () {
  let body = document.querySelector("body"),
    universe = document.querySelector("#universe"),
    solarsys = document.querySelector("#solar-system");

  let init = function () {
    body.classList.remove("view-2D", "opening");
    body.classList.add("view-3D");
    setTimeout(function () {
      body.classList.remove("hide-UI");
      body.classList.add("set-speed");
    }, 2000);
  };

  let setView = function (view) {
    universe.className = view;
  };

  document
    .querySelector("#toggle-data")
    .addEventListener("click", function (e) {
      body.classList.toggle("data-open");
      body.classList.toggle("data-close");
      e.preventDefault();
    });

  document
    .querySelector("#toggle-controls")
    .addEventListener("click", function (e) {
      body.classList.toggle("controls-open");
      body.classList.toggle("controls-close");
      e.preventDefault();
    });

  let dataLinks = document.querySelectorAll("#data a");
  for (let i = 0; i < dataLinks.length; i++) {
    dataLinks[i].addEventListener("click", function (e) {
      let ref = this.className;
      solarsys.className = ref;
      let activeLinks = this.parentNode.querySelectorAll("a");
      for (let j = 0; j < activeLinks.length; j++) {
        activeLinks[j].classList.remove("active");
      }
      this.classList.add("active");
      e.preventDefault();
    });
  }

  document.querySelector(".set-view").addEventListener("click", function () {
    body.classList.toggle("view-3D");
    body.classList.toggle("view-2D");
  });
  document.querySelector(".set-zoom").addEventListener("click", function () {
    body.classList.toggle("zoom-large");
    body.classList.toggle("zoom-close");
  });
  document.querySelector(".set-speed").addEventListener("click", function () {
    setView("scale-stretched set-speed");
  });
  document.querySelector(".set-size").addEventListener("click", function () {
    setView("scale-s set-size");
  });
  document
    .querySelector(".set-distance")
    .addEventListener("click", function () {
      setView("scale-d set-distance");
    });

  init();
});
