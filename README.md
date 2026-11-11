# Interactive Quiz Application

A responsive, dynamic web application built using vanilla HTML5, CSS3, and modern JavaScript. Users can test their knowledge across different difficulty levels, track their time per question, and review their results with stored high scores.

## Features Implemented

### Core Features
- **Dynamic Question Generation**: Questions and options are populated entirely via JavaScript.
- **State Preservation**: Answers remain saved when using Next/Previous navigation buttons.
- **Score Calculation & Detailed Review**: Shows final percentage score alongside a question breakdown highlighting correct vs. incorrect answers.
- **Responsive Design**: Designed with CSS flexbox and media queries for mobile, tablet, and desktop views.

### Bonus Features Included
1. **Countdown Timer**: 30-second timer per question; automatically moves to the next question when time expires.
2. **Randomization**: Both question order and option choices are randomly shuffled every session.
3. **Progress Bar**: Smooth visual progress tracking relative to current question number.
4. **Confirmation Modal**: Prompts user confirmation if attempting to submit with unanswered questions.
5. **Difficulty Filters**: Choose between Easy, Medium, Hard, or All difficulty questions.
6. **Best Score Persistence**: Utilizes `localStorage` to save and display the top high score across sessions.

## How to Run

1. Clone or download this repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the same folder.
3. Open `index.html` directly in any modern Web Browser (Chrome, Firefox, Safari, Edge).
