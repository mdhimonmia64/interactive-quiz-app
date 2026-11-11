'use strict';

const DIFFICULTIES = {
  easy:   { label: 'Easy',   seconds: 300 },
  medium: { label: 'Medium', seconds: 240 },
  hard:   { label: 'Hard',   seconds: 180 },
};

const QUESTION_BANK = {
  easy: [
    {
      question: 'What does HTML stand for?',
      options: ['HyperText Markup Language', 'High Tech Modern Language', 'HyperTransfer Markup Logic', 'Home Tool Markup Language'],
      answer: 0,
    },
    {
      question: 'Which HTML tag creates the largest heading?',
      options: ['<h6>', '<head>', '<h1>', '<header>'],
      answer: 2,
    },
    {
      question: 'Which CSS property changes the color of text?',
      options: ['font-color', 'color', 'text-style', 'foreground'],
      answer: 1,
    },
    {
      question: 'Which symbol starts an ID selector in CSS?',
      options: ['.', '*', '&', '#'],
      answer: 3,
    },
    {
      question: 'Which JavaScript keyword declares a block-scoped variable that can be reassigned?',
      options: ['var', 'let', 'const', 'static'],
      answer: 1,
    },
    {
      question: 'Which HTML tag creates a hyperlink?',
      options: ['<link>', '<href>', '<a>', '<url>'],
      answer: 2,
    },
    {
      question: 'Which method prints a message to the browser console?',
      options: ['print()', 'console.log()', 'window.write()', 'document.print()'],
      answer: 1,
    },
    {
      question: 'Which attribute provides alternative text for an image?',
      options: ['title', 'src', 'alt', 'caption'],
      answer: 2,
    },
    {
      question: 'How do you write a single-line comment in JavaScript?',
      options: ['<!-- comment -->', '// comment', '# comment', '/* comment'],
      answer: 1,
    },
    {
      question: 'Which CSS property controls the space outside an element\'s border?',
      options: ['padding', 'spacing', 'margin', 'gap'],
      answer: 2,
    },
  ],

  medium: [
    {
      question: 'Which of these is a semantic HTML element?',
      options: ['<div>', '<span>', '<b>', '<article>'],
      answer: 3,
    },
    {
      question: 'What does the === operator do in JavaScript?',
      options: ['Assigns a value', 'Compares value only', 'Compares value and type', 'Checks if a variable exists'],
      answer: 2,
    },
    {
      question: 'What does "display: flex" do when applied to a container?',
      options: ['Hides its children', 'Turns its children into flex items', 'Makes the container float', 'Centers the text only'],
      answer: 1,
    },
    {
      question: 'Which array method adds an element to the end of an array?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      answer: 0,
    },
    {
      question: 'Which CSS unit is relative to the root element\'s font size?',
      options: ['em', 'rem', 'px', 'vh'],
      answer: 1,
    },
    {
      question: 'What does document.querySelector(".item") return?',
      options: ['All elements with class "item"', 'The first element with class "item"', 'The last element with class "item"', 'An array of class names'],
      answer: 1,
    },
    {
      question: 'Which event fires when a user clicks an element?',
      options: ['press', 'tap', 'click', 'select'],
      answer: 2,
    },
    {
      question: 'What does typeof null return in JavaScript?',
      options: ['"null"', '"undefined"', '"object"', '"number"'],
      answer: 2,
    },
    {
      question: 'Which HTML element is intended for a block of navigation links?',
      options: ['<menu-bar>', '<nav>', '<links>', '<aside>'],
      answer: 1,
    },
    {
      question: 'Which array method returns a new array with the result of calling a function on every element?',
      options: ['forEach()', 'filter()', 'map()', 'find()'],
      answer: 2,
    },
  ],

  hard: [
    {
      question: 'What is a closure in JavaScript?',
      options: [
        'A function that remembers variables from its outer scope',
        'A way to close the browser window',
        'A function with no parameters',
        'A block that prevents errors',
      ],
      answer: 0,
    },
    {
      question: 'Which style wins when no !important is used?',
      options: ['An element selector', 'A class selector', 'An ID selector', 'An inline style attribute'],
      answer: 3,
    },
    {
      question: 'What happens when one promise passed to Promise.all() rejects?',
      options: [
        'It waits for the others, then rejects',
        'It rejects immediately with that reason',
        'It ignores the rejected promise',
        'It resolves with undefined for that promise',
      ],
      answer: 1,
    },
    {
      question: 'Event delegation relies on which behavior?',
      options: ['Event capturing only', 'Event bubbling', 'Event cancellation', 'Event throttling'],
      answer: 1,
    },
    {
      question: 'What is the result of [1, 2, 3].reduce((a, b) => a + b, 10)?',
      options: ['6', '10', '16', '123'],
      answer: 2,
    },
    {
      question: 'What does Array.prototype.slice() do to the original array?',
      options: ['Removes the sliced items', 'Reorders it', 'Empties it', 'Leaves it unchanged'],
      answer: 3,
    },
    {
      question: 'Which declaration creates a new stacking context on a normal element?',
      options: ['color: red', 'margin: 0 auto', 'opacity: 0.9', 'font-weight: bold'],
      answer: 2,
    },
    {
      question: 'What does the "defer" attribute on a script tag do?',
      options: [
        'Blocks parsing until the script runs',
        'Runs the script before any HTML loads',
        'Never runs the script',
        'Downloads in parallel and runs after the HTML is parsed',
      ],
      answer: 3,
    },
    {
      question: 'What does 0.1 + 0.2 === 0.3 evaluate to in JavaScript?',
      options: ['true', 'false', 'undefined', 'It throws an error'],
      answer: 1,
    },
    {
      question: 'How does "this" behave inside an arrow function?',
      options: [
        'It is inherited from the enclosing scope',
        'It always refers to window',
        'It refers to the function itself',
        'It is always undefined',
      ],
      answer: 0,
    },
  ],
};

const $ = (id) => document.getElementById(id);

const dom = {
  startScreen: $('start-screen'),
  startTitle: $('start-title'),
  startForm: $('start-form'),
  difficultyOptions: $('difficulty-options'),
  shuffleToggle: $('shuffle-toggle'),
  bestScore: $('best-score'),

  quizScreen: $('quiz-screen'),
  counter: $('question-counter'),
  timer: $('timer'),
  timerValue: $('timer-value'),
  progressTrack: $('progress-track'),
  progressFill: $('progress-fill'),
  progressText: $('progress-text'),
  questionForm: $('question-form'),
  questionText: $('question-text'),
  options: $('options'),
  prevBtn: $('prev-btn'),
  nextBtn: $('next-btn'),
  submitBtn: $('submit-btn'),
  navigatorList: $('navigator-list'),

  resultScreen: $('result-screen'),
  resultTitle: $('result-title'),
  scoreBig: $('score-big'),
  scorePercent: $('score-percent'),
  resultMessage: $('result-message'),
  resultNote: $('result-note'),
  reviewList: $('review-list'),
  restartBtn: $('restart-btn'),

  confirmDialog: $('confirm-dialog'),
  confirmMessage: $('confirm-message'),
};


const state = {
  difficulty: 'easy',
  questions: [],   
  current: 0,
  submitted: false,
  timeLeft: 0,
  timerId: null,
};

const STORAGE_KEY = 'webDevQuizBestScores';

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function showScreen(screen, focusTarget) {
  [dom.startScreen, dom.quizScreen, dom.resultScreen].forEach((s) => {
    s.hidden = s !== screen;
  });
  if (focusTarget) {
    focusTarget.focus();
  }
  window.scrollTo({ top: 0 });
}

function getAnsweredCount() {
  return state.questions.filter((q) => q.selected !== null).length;
}

function buildQuestions(difficulty, randomize) {
  const prepared = QUESTION_BANK[difficulty].map((item) => {
    const options = item.options.map((text, index) => ({
      text,
      isCorrect: index === item.answer,
    }));
    return {
      text: item.question,
      options: randomize ? shuffle(options) : options,
      selected: null, 
    };
  });
  return randomize ? shuffle(prepared) : prepared;
}


function loadBestScores() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveBestScore(difficulty, score, total, percent) {
  const best = loadBestScores();
  const previous = best[difficulty];
  if (previous && previous.percent >= percent) {
    return false;
  }
  best[difficulty] = { score, total, percent };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(best));
  } catch {
  }
  return true;
}

function renderBestScore() {
  const entry = loadBestScores()[state.difficulty];
  const label = DIFFICULTIES[state.difficulty].label;
  dom.bestScore.textContent = entry
    ?`🏆 Best score on ${label}: ${entry.score}/${entry.total} (${entry.percent}%)`
    : '';
}


function renderDifficultyOptions() {
  const items = Object.entries(DIFFICULTIES).map(([key, config]) => {
    const label = document.createElement('label');
    label.className = 'difficulty';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'difficulty';
    input.value = key;
    input.checked = key === state.difficulty;

    const text = document.createElement('span');
    const name = document.createElement('span');
    name.className = 'difficulty-name';
    name.textContent = config.label;

    const detail = document.createElement('span');
    detail.className = 'difficulty-detail';
    detail.textContent = `${QUESTION_BANK[key].length} questions · ${formatTime(config.seconds)} time limit`;

    text.append(name, detail);
    label.append(input, text);
    return label;
  });

  dom.difficultyOptions.replaceChildren(...items);
}

function handleDifficultyChange(event) {
  if (event.target.name === 'difficulty') {
    state.difficulty = event.target.value;
    renderBestScore();
  }
}

function handleStart(event) {
  event.preventDefault();
  startQuiz(state.difficulty, dom.shuffleToggle.checked);
}


function startQuiz(difficulty, randomize) {
  state.difficulty = difficulty;
  state.questions = buildQuestions(difficulty, randomize);
  state.current = 0;
  state.submitted = false;
  dom.submitBtn.disabled = false;

  buildNavigator();
  renderQuestion();
  showScreen(dom.quizScreen, dom.counter);
  startTimer(DIFFICULTIES[difficulty].seconds);
}

function renderQuestion() {
  const question = state.questions[state.current];
  const total = state.questions.length;

  dom.counter.textContent = `Question ${state.current + 1} of ${total}`;
  dom.questionText.textContent = question.text;

  const items = question.options.map((option, index) => {
    const label = document.createElement('label');
    label.className = 'option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = String(index);
    input.checked = question.selected === index;

    const text = document.createElement('span');
    text.textContent = option.text;

    label.append(input, text);
    return label;
  });
  dom.options.replaceChildren(...items);

  const isFirst = state.current === 0;
  const isLast = state.current === total - 1;
  dom.prevBtn.disabled = isFirst;
  dom.nextBtn.hidden = isLast;
  dom.submitBtn.hidden = !isLast;

  updateProgress();
  updateNavigator();
}

function handleAnswerChange(event) {
  if (state.submitted || event.target.name !== 'answer') return;
  state.questions[state.current].selected = Number(event.target.value);
  updateProgress();
  updateNavigator();
}

function goToQuestion(index) {
  if (state.submitted) return;
  if (index < 0 || index >= state.questions.length) return;
  state.current = index;
  renderQuestion();
}


function updateProgress() {
  const answered = getAnsweredCount();
  const total = state.questions.length;
  const percent = Math.round((answered / total) * 100);

  dom.progressFill.style.width = `${percent}%`;
  dom.progressTrack.setAttribute('aria-valuenow', String(percent));
  dom.progressText.textContent = `${answered} of ${total} answered`;
}

function buildNavigator() {
  const items = state.questions.map((_, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-dot';
    button.dataset.index = String(index);
    button.textContent = String(index + 1);
    li.append(button);
    return li;
  });
  dom.navigatorList.replaceChildren(...items);
}

function updateNavigator() {
  dom.navigatorList.querySelectorAll('.nav-dot').forEach((button, index) => {
    const answered = state.questions[index].selected !== null;
    button.classList.toggle('answered', answered);
    button.setAttribute(
      'aria-label',
      `Question ${index + 1}, ${answered ? 'answered' : 'not answered'}`
    );
    if (index === state.current) {
      button.setAttribute('aria-current', 'step');
    } else {
      button.removeAttribute('aria-current');
    }
  });
}

function handleNavigatorClick(event) {
  const button = event.target.closest('.nav-dot');
  if (button) {
    goToQuestion(Number(button.dataset.index));
  }
}


function startTimer(seconds) {
  stopTimer();
  state.timeLeft = seconds;
  renderTimer();
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    renderTimer();
    if (state.timeLeft <= 0) {
      submitQuiz(true);
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId !== null) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function renderTimer() {
  dom.timerValue.textContent = formatTime(Math.max(state.timeLeft, 0));
  dom.timer.classList.toggle('warning', state.timeLeft <= 30);
}

function requestSubmit() {
  if (state.submitted) return;

  const unanswered = state.questions.length - getAnsweredCount();
  if (unanswered === 0) {
    submitQuiz(false);
    return;
  }

  const plural = unanswered === 1 ? 'question is' : 'questions are';
  dom.confirmMessage.textContent =
    `${unanswered} ${plural} still unanswered. Unanswered questions count as incorrect.`;
  dom.confirmDialog.returnValue = '';
  dom.confirmDialog.showModal();
}

function handleDialogClose() {
  if (dom.confirmDialog.returnValue === 'confirm') {
    submitQuiz(false);
  }
}


function submitQuiz(timedOut) {
  if (state.submitted) return;
  state.submitted = true;
  dom.submitBtn.disabled = true;
  stopTimer();

  if (dom.confirmDialog.open) {
    dom.confirmDialog.close();
  }

  showResults(timedOut);
}



function getResultMessage(percent) {
  if (percent === 100) return 'Perfect score! 🎉';
  if (percent >= 80) return 'Great job!';
  if (percent >= 60) return 'Good effort. A little more practice and you\'ll ace it.';
  if (percent >= 40) return 'Not bad, but there\'s room to grow.';
  return 'Keep practicing. You\'ll get there!';
}

function showResults(timedOut) {
  const total = state.questions.length;
  const score = state.questions.filter(
    (q) => q.selected !== null && q.options[q.selected].isCorrect
  ).length;
  const percent = Math.round((score / total) * 100);

  dom.scoreBig.textContent = `${score} / ${total}`;
  dom.scorePercent.textContent = `${percent}%`;
  dom.resultMessage.textContent = getResultMessage(percent);

  const isNewBest = saveBestScore(state.difficulty, score, total, percent);
  const notes = [];
  if (timedOut) notes.push('⏰ Time ran out, so your quiz was submitted automatically.');
  if (isNewBest) notes.push('🏆 New best score for this difficulty!');
  dom.resultNote.textContent = notes.join(' ');
  dom.resultNote.hidden = notes.length === 0;

  renderReview();
  showScreen(dom.resultScreen, dom.resultTitle);
}

function renderReview() {
  const items = state.questions.map((question, index) => {
    const correctOption = question.options.find((o) => o.isCorrect);
    const chosen = question.selected === null ? null : question.options[question.selected];

    let status = 'unanswered';
    let badgeText = '– Unanswered';
    if (chosen) {
      status = chosen.isCorrect ? 'correct' : 'incorrect';
      badgeText = chosen.isCorrect ? '✓ Correct' : '✗ Incorrect';
    }

    const li = document.createElement('li');
    li.className = `review-item ${status}`;

    const heading = document.createElement('p');
    heading.className = 'review-question';
    heading.textContent = `${index + 1}. ${question.text}`;

    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = badgeText;

    li.append(heading, badge);

    const yours = document.createElement('p');
    yours.className = 'review-answer';
    const yoursLabel = document.createElement('strong');
    yoursLabel.textContent = 'Your answer: ';
    yours.append(yoursLabel, chosen ? chosen.text : 'No answer selected');
    li.append(yours);

    if (status !== 'correct') {
      const correct = document.createElement('p');
      correct.className = 'review-answer';
      const correctLabel = document.createElement('strong');
      correctLabel.textContent = 'Correct answer: ';
      correct.append(correctLabel, correctOption.text);
      li.append(correct);
    }

    return li;
  });

  dom.reviewList.replaceChildren(...items);
}



function restartQuiz() {
  stopTimer();
  state.questions = [];
  state.current = 0;
  state.submitted = false;
  dom.submitBtn.disabled = false;
  dom.timer.classList.remove('warning');

  renderBestScore();
  showScreen(dom.startScreen, dom.startTitle);
}



function init() {
  renderDifficultyOptions();
  renderBestScore();

  dom.startForm.addEventListener('submit', handleStart);
  dom.difficultyOptions.addEventListener('change', handleDifficultyChange);

  dom.options.addEventListener('change', handleAnswerChange);
  dom.questionForm.addEventListener('submit', (e) => e.preventDefault());
  dom.prevBtn.addEventListener('click', () => goToQuestion(state.current - 1));
  dom.nextBtn.addEventListener('click', () => goToQuestion(state.current + 1));
  dom.submitBtn.addEventListener('click', requestSubmit);
  dom.navigatorList.addEventListener('click', handleNavigatorClick);

  dom.confirmDialog.addEventListener('close', handleDialogClose);
  dom.restartBtn.addEventListener('click', restartQuiz);
}

init();
