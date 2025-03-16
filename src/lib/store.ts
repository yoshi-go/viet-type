import { writable, derived } from 'svelte/store';
import { GameScreen, getRandomWord } from './types';

// Constants
const GAME_DURATION = 60; // in seconds

// Game state
export const gameScreen = writable<GameScreen>(GameScreen.TITLE);
export const score = writable(0);
export const timeLeft = writable(GAME_DURATION);
export const currentWord = writable('');
export const currentInput = writable('');
export const isGameActive = writable(false);

// Derived store for remaining time in MM:SS format
export const formattedTime = derived(timeLeft, ($timeLeft) => {
  const minutes = Math.floor($timeLeft / 60);
  const seconds = $timeLeft % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

// Game actions
export function startGame() {
  score.set(0);
  timeLeft.set(GAME_DURATION);
  resetWord();
  gameScreen.set(GameScreen.GAME);
  isGameActive.set(true);
  
  // Start timer
  const timer = setInterval(() => {
    timeLeft.update(t => {
      if (t <= 1) {
        clearInterval(timer);
        endGame();
        return 0;
      }
      return t - 1;
    });
  }, 1000);
}

export function endGame() {
  isGameActive.set(false);
  gameScreen.set(GameScreen.RESULT);
}

export function resetGame() {
  gameScreen.set(GameScreen.TITLE);
  score.set(0);
  timeLeft.set(GAME_DURATION);
  currentWord.set('');
  currentInput.set('');
  isGameActive.set(false);
}

export function resetWord() {
  currentWord.set(getRandomWord());
  currentInput.set('');
}

export function processInput(char: string) {
  let input;
  currentInput.update(val => {
    input = val + char;
    return input;
  });
  
  let word;
  currentWord.update(val => {
    word = val;
    return val;
  });
  
  // Check if completed word
  if (input === word) {
    score.update(s => s + word.length);
    resetWord();
  }
}

export function removeLastChar() {
  currentInput.update(val => val.slice(0, -1));
}