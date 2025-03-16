// Game state types
export enum GameScreen {
  TITLE,
  GAME,
  RESULT
}

// Keyboard key state types
export enum KeyState {
  NORMAL = 'normal',
  NEXT = 'next',
  CORRECT = 'correct',
  INCORRECT = 'incorrect'
}

// Word list for typing
export const wordList = [
  'typescript', 'svelte', 'javascript', 'programming', 'developer',
  'keyboard', 'interface', 'application', 'algorithm', 'function',
  'variable', 'component', 'framework', 'responsive', 'database',
  'frontend', 'backend', 'fullstack', 'reactive', 'digital',
  'software', 'hardware', 'network', 'security', 'protocol',
  'memory', 'render', 'compile', 'debug', 'object',
  'module', 'import', 'export', 'async', 'await',
  'promise', 'callback', 'event', 'listener', 'dispatch',
  'style', 'attribute', 'property', 'method', 'constructor',
  'instance', 'class', 'interface', 'inheritance', 'polymorphism'
];

// Get random word from wordList
export function getRandomWord(): string {
  return wordList[Math.floor(Math.random() * wordList.length)];
}