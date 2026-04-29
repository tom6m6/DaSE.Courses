window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: "tex2jax_ignore",
    processHtmlClass: ".*"
  },
  startup: {
    typeset: true
  }
};

function typesetMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise().catch(function (err) {
      console.log("MathJax typeset failed: " + err.message);
    });
  }
}

window.addEventListener("load", typesetMath);

if (typeof document$ !== "undefined") {
  document$.subscribe(function () {
    typesetMath();
  });
}