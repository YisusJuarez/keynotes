# KeynoteSpace Documentation

## Overview

The `KeynoteSpace` class provides a way to create and manage a presentation space where slides can be added and displayed. It supports navigation between slides and integrates syntax highlighting using `highlight.js`. Each slide is represented by the `KeynoteSlide` class, which holds the content of the slide and the language type for syntax highlighting.

## Installation

To use this library, ensure that you have `highlight.js` installed along with the default styles:

\`\`\`bash
npm install highlight.js
\`\`\`

Include the default styles for `highlight.js`:

\`\`\`javascript
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
\`\`\`

## Classes

### `KeynoteSpace`

The `KeynoteSpace` class is responsible for managing the slideshow and navigating between slides.

#### Constructor

\`\`\`javascript
constructor(root: HTMLElement)
\`\`\`

- `root` (HTMLElement): The root element where the slides will be rendered.

#### Methods

- **`add_timeline_slide(slide: KeynoteSlide)`**
  - Adds a slide to the timeline.
  - `slide` (KeynoteSlide): The slide to add to the presentation.

- **`show_slide(index: number)`**
  - Displays the slide at the specified index.
  - `index` (number): The index of the slide to show.

- **`next_slide()`**
  - Moves to the next slide in the timeline.

- **`prev_slide()`**
  - Moves to the previous slide in the timeline.

- **`init()`**
  - Initializes the presentation and renders the first slide. Adds buttons for navigating between slides.

### `KeynoteSlide`

The `KeynoteSlide` class represents a slide in the presentation.

#### Constructor

\`\`\`javascript
constructor(content: string, lang_type: string)
\`\`\`

- `content` (string): The content of the slide.
- `lang_type` (string): The language type for syntax highlighting (e.g., `javascript`, `html`, etc.).

## Example Usage

\`\`\`javascript
import { KeynoteSpace, KeynoteSlide } from './keynote';

const rootElement = document.getElementById('presentation-root');
const keynote = new KeynoteSpace(rootElement);

const slide1 = new KeynoteSlide('console.log("Hello, World!");', 'javascript');
const slide2 = new KeynoteSlide('<h1>Hello World</h1>', 'html');

keynote.add_timeline_slide(slide1);
keynote.add_timeline_slide(slide2);

keynote.init();
\`\`\`

In this example:
