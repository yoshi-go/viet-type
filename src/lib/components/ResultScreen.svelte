<script lang="ts">
  import { score, resetGame } from '../store';
  
  // Function to get feedback based on score
  function getFeedback(score: number): string {
    if (score >= 300) return "Amazing! You're a typing master!";
    if (score >= 200) return "Great job! Your typing skills are impressive!";
    if (score >= 100) return "Good work! Keep practicing to improve your speed!";
    return "Nice try! Regular practice will help you improve!";
  }
</script>

<div class="result-screen">
  <h1>Game Over</h1>
  
  <div class="score-container">
    <div class="score-label">Your Score</div>
    <div class="score-value">{$score}</div>
    <div class="score-feedback">{getFeedback($score)}</div>
  </div>
  
  <div class="stats-container">
    <div class="stat">
      <div class="stat-value">{Math.round($score / 60)}</div>
      <div class="stat-label">Characters per second</div>
    </div>
  </div>
  
  <button class="play-again-button" on:click={resetGame}>Play Again</button>
</div>

<style>
  .result-screen {
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
    margin-bottom: 30px;
    color: #333;
  }
  
  .score-container {
    margin-bottom: 40px;
  }
  
  .score-label {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 10px;
  }
  
  .score-value {
    font-size: 5rem;
    font-weight: bold;
    color: #2ecc71;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }
  
  .score-feedback {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 20px;
  }
  
  .stats-container {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    width: 100%;
  }
  
  .stat {
    flex: 1;
    max-width: 200px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin: 0 10px;
  }
  
  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: #3498db;
    margin-bottom: 5px;
  }
  
  .stat-label {
    font-size: 1rem;
    color: #666;
  }
  
  .play-again-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .play-again-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  .play-again-button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    
    .score-value {
      font-size: 4rem;
    }
    
    .stat-value {
      font-size: 1.5rem;
    }
    
    .stat-label {
      font-size: 0.9rem;
    }
  }
</style>