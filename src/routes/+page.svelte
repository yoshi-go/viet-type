<script lang="ts">
  import { onMount } from 'svelte';
  import { gameScreen } from '$lib/store';
  import { GameScreen } from '$lib/types';
  import TitleScreen from '$lib/components/TitleScreen.svelte';
  import GameScreenComponent from '$lib/components/GameScreen.svelte';
  import ResultScreen from '$lib/components/ResultScreen.svelte';
  import '$lib/styles/global.css';
</script>

<svelte:head>
  <title>Type Master - Typing Game</title>
  <meta name="description" content="A typing game to test and improve your typing speed and accuracy" />
</svelte:head>

<main class="container">
  {#if $gameScreen === GameScreen.TITLE}
    <TitleScreen />
  {:else if $gameScreen === GameScreen.GAME}
    <GameScreenComponent />
  {:else if $gameScreen === GameScreen.RESULT}
    <ResultScreen />
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
