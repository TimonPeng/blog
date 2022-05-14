// https://hexo.io/docs/plugins.html

const fs = require("hexo-fs");
const path = require("path");

function loadSvg(filename) {
  const filepath = path.join(hexo.theme_dir, "source", "icon", `${filename}.svg`);
  if (!fs.existsSync(filepath)) {
    return;
  }
  return fs.readFileSync(filepath);
}

hexo.extend.helper.register("load_svg", loadSvg);
