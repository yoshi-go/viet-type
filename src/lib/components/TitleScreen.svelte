<script lang="ts">
  import { startGame } from '../store';
</script>

<div class="title-screen">
  <h1>Type Master</h1>
  <p>Test your typing speed and accuracy</p>
  
  <div class="instructions">
    <h2>How to Play</h2>
    <ul>
      <li>Type the displayed words as fast as you can</li>
      <li>You have 60 seconds to score as many points as possible</li>
      <li>Each character in a correctly typed word adds to your score</li>
    </ul>
  </div>
  
  <button class="start-button" on:click={startGame}>Start Game</button>
</div>

<style>
  .title-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    height: 100%;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #666;
  }
  
  .instructions {
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 500px;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
  }
  
  ul {
    text-align: left;
    margin-left: 20px;
  }
  
  li {
    margin-bottom: 10px;
    line-height: 1.4;
  }
  
  .start-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .start-button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  .start-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>