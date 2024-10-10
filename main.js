import { KeynoteSpace, KeynoteSlide } from "./lib/keynotes";

const root = document.querySelector("#app");

const space = new KeynoteSpace(root);
const slide2 = new KeynoteSlide(
  `// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);`,
  "js",
);
const slide3 = new KeynoteSlide(
  `// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// Then register the languages you need
hljs.register('javascript', javascript);`,
  "js",
);

const slide4 = new KeynoteSlide(
  `<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>
`,
  "html",
);
space.add_timeline_slide(slide2);
space.add_timeline_slide(slide3);
space.add_timeline_slide(slide4);

space.init();
