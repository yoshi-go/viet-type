<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { score, formattedTime, currentWord, currentInput, processInput, removeLastChar } from '../store';
  import Keyboard from './Keyboard.svelte';
  
  let typingInput: HTMLInputElement;
  
  // Handle keyboard input
  function handleKeydown(event: KeyboardEvent) {
    if (!event.key.match(/^[a-zA-Z]$/)) {
      if (event.key === 'Backspace') {
        removeLastChar();
      }
      return;
    }
    
    processInput(event.key.toLowerCase());
  }
  
  function handleKeyboardKey(event: CustomEvent) {
    processInput(event.detail.key);
  }
  
  function handleBackspace() {
    removeLastChar();
  }
  
  onMount(() => {
    // Focus the hidden input field
    if (typingInput) {
      typingInput.focus();
    }
    
    // Add event listener for keyboard input
    window.addEventListener('keydown', handleKeydown);
  });
  
  onDestroy(() => {
    // Remove event listener when component is destroyed
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div class="game-screen">
  <div class="stats">
    <div class="time">Time: {$formattedTime}</div>
    <div class="score">Score: {$score}</div>
  </div>
  
  <div class="word-display">
    {#each $currentWord.split('') as char, i}
      <span class={i < $currentInput.length ? 
        (char === $currentInput[i] ? 'correct' : 'incorrect') : 
        (i === $currentInput.length ? 'next' : '')}
      >
        {char}
      </span>
    {/each}
  </div>
  
  <div class="input-display">
    <span>{$currentInput}<span class="cursor">|</span></span>
  </div>
  
  <Keyboard 
    on:key={handleKeyboardKey}
    on:backspace={handleBackspace}
  />
  
  <!-- Hidden input field to capture keyboard input -->
  <input 
    bind:this={typingInput}
    type="text" 
    class="hidden-input" 
    autocomplete="off" 
    autocorrect="off" 
    autocapitalize="off" 
    spellcheck="false"
  />
</div>

<style>
  .game-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
  }
  
  .stats {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .time {
    color: #e74c3c;
  }
  
  .score {
    color: #2ecc71;
  }
  
  .word-display {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 1px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .word-display span {
    display: inline-block;
    padding: 0 2px;
    border-radius: 4px;
    transition: all 0.2s ease;
  }
  
  .word-display span.correct {
    color: #2ecc71;
  }
  
  .word-display span.incorrect {
    color: #e74c3c;
  }
  
  .word-display span.next {
    background-color: #ffd700;
    color: #333;
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.7);
  }
  
  .input-display {
    font-size: 1.5rem;
    margin-bottom: 30px;
    min-height: 40px;
    color: #666;
  }
  
  .cursor {
    display: inline-block;
    animation: blink 1s infinite;
    color: #333;
    font-weight: bold;
  }
  
  .hidden-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  
  @media (max-width: 600px) {
    .word-display {
      font-size: 2rem;
      height: 50px;
    }
    
    .stats {
      font-size: 1.2rem;
    }
    
    .input-display {
      font-size: 1.2rem;
    }
  }
</style>