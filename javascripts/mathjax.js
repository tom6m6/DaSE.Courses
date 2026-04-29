window.MathJax = {
  loader: {
    load: ['[tex]/boldsymbol']
  },
  tex: {
    packages: {
      '[+]': ['boldsymbol']
    },
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex|jp-RenderedHTMLCommon|jp-MarkdownOutput|jp-RenderedMarkdown|jp-Cell|jp-Notebook|nbinput|nboutput|notebook"
  }
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});