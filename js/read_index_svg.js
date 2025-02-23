// html可読性を考慮したsvg読み込み用の関数
function readSvg(url){
    fetch(url)
    .then(response => response.text())
    .then(data => {
      let div = document.createElement("div");
      div.innerHTML = data;
      let svg = div.querySelector("svg");
      if (svg) {
        svg.classList.add("custom-svg");
        const target = document.querySelectorAll(".container")[0]
        target.appendChild(svg);
      }
    });
}
readSvg("../groupwk01/img/undraw_hello_ccwj.svg")