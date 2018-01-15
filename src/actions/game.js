export const startGame = (cardID, currentWordSet) => ({
  type: "START_GAME",
  cardID,
  currentWordSet
});