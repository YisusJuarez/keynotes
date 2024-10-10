import hljs from "highlight.js";
import "highlight.js/styles/default.css";

/**
 * A class representing the Keynote presentation space.
 */
export class KeynoteSpace {
  /**
   * Creates an instance of KeynoteSpace.
   * @param {HTMLElement} root - The root element where the slides will be rendered.
   */
  constructor(root) {
    this.root = root;
    this.slide_list = [];
    this.current_slide_index = 0;
    this.slide_container = document.createElement("div");
  }

  /**
   * Adds a slide to the timeline.
   * @param {Slide} slide - The slide to add.
   */
  add_timeline_slide(slide) {
    this.slide_list.push(slide);
  }

  /**
   * Displays the slide at the given index.
   * @param {number} index - The index of the slide to show.
   */
  show_slide(index) {
    const slide = this.slide_list[index];
    if (slide) {
      this.slide_container.innerHTML = "";

      const pre_element = document.createElement("pre");
      const code_element = document.createElement("code");

      code_element.classList.add(`language-${slide.lang_type}`);
      code_element.textContent = slide.content;

      pre_element.appendChild(code_element);
      this.slide_container.appendChild(pre_element);
      hljs.highlightElement(code_element);
    }
  }

  /**
   * Moves to the next slide in the timeline.
   */
  next_slide() {
    const index = this.current_slide_index + 1;
    if (this.slide_list[index]) {
      this.show_slide(index);
      this.current_slide_index = index;
    }
  }

  /**
   * Moves to the previous slide in the timeline.
   */
  prev_slide() {
    const index = this.current_slide_index - 1;
    if (this.slide_list[index]) {
      this.show_slide(index);
      this.current_slide_index = index;
    }
  }

  /**
   * Initializes the presentation and renders the first slide.
   */
  init() {
    if (this.slide_list.length > 0) {
      this.root.appendChild(this.slide_container);
      this.show_slide(this.current_slide_index);

      const prev_button = document.createElement("button");
      const next_button = document.createElement("button");

      prev_button.textContent = "<";
      next_button.textContent = ">";
      this.root.appendChild(prev_button);
      this.root.appendChild(next_button);
      prev_button.addEventListener("click", () => this.prev_slide());
      next_button.addEventListener("click", () => this.next_slide());
    }
  }
}

/**
 * A class representing an individual slide.
 */
export class KeynoteSlide {
  /**
   * Creates an instance of Slide.
   * @param {string} content - The content of the slide.
   * @param {string} lang_type - The language type for syntax highlighting.
   */
  constructor(content, lang_type) {
    this.content = content;
    this.lang_type = lang_type;
  }
}
