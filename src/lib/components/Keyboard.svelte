<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { currentWord, currentInput } from '../store';
  import { KeyState } from '../types';
  
  const dispatch = createEventDispatcher();
  
  const keyRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
  ];
  
  let targetIndex = 0;
  
  // Subscribe to currentWord and currentInput to determine which key is next
  $: {
    const word = $currentWord;
    const input = $currentInput;
    targetIndex = input.length;
  }
  
  function getKeyState(key: string): KeyState {
    const word = $currentWord;
    const input = $currentInput;
    
    // Check if it's the next key to press
    if (targetIndex < word.length && word[targetIndex].toLowerCase() === key.toLowerCase()) {
      return KeyState.NEXT;
    }
    
    return KeyState.NORMAL;
  }
  
  function handleKeyClick(key: string) {
    if (key === 'Backspace') {
      dispatch('backspace');
    } else {
      dispatch('key', { key });
    }
  }
</script>

<div class="keyboard">
  {#each keyRows as row, i}
    <div class="keyboard-row">
      {#each row as key}
        <button 
          class="key {getKeyState(key)}" 
          on:click={() => handleKeyClick(key)}
          class:wider={key === 'Backspace'}
        >
          {key === 'Backspace' ? '⌫' : key}
        </button>
      {/each}
    </div>
  {/each}
</div>

<style>
  .keyboard {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .keyboard-row {
    display: flex;
    justify-content: center;
    gap: 4px;
  }
  
  .key {
    width: 40px;
    height: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    background-color: #e0e0e0;
    transition: all 0.2s ease;
  }
  
  .key:hover {
    background-color: #d0d0d0;
  }
  
  .key.wider {
    width: 80px;
  }
  
  .key.next {
    background-color: #ffd700;
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.7);
  }
  
  .key.correct {
    background-color: #6aaa64;
    color: white;
  }
  
  .key.incorrect {
    background-color: #c14242;
    color: white;
  }
  
  @media (max-width: 600px) {
    .key {
      width: 28px;
      height: 40px;
      font-size: 14px;
    }
    
    .key.wider {
      width: 60px;
    }
  }
</style>