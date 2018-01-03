const initialState = {
  playing: true,
  currentUser: {
    username: "roy123",
    firstName: "Roy"
  },
  currentWordSet: {
    title: "verbs",
    cards: [
      {
        term: "defenestrate",
        definition: "to throw out a window"
      },
      {
        term: "masticate",
        definition: "to chew"
      },
      {
        term: "undulate",
        definition: "to move like a wave"
      }
    ]
  },
  game: {
    category: "verbs",
    currentCard: {
      term: "undulate",
      definition: "to move like a wave"
    },
    guesses: ["a", "e", "g"],
    guessesLeft: 4
  },
  wordSets: [
    {
      title: "verbs",
      cards: [
        {
          term: "defenestrate",
          definition: "to throw out a window"
        },
        {
          term: "masticate",
          definition: "to chew"
        },
        {
          term: "undulate",
          definition: "to move like a wave"
        }
      ]
    },
    {
      title: "adjectives",
      cards: [
        {
          term: "lugubrious",
          definition: "looking or sounding sad"
        },
        {
          term: "fastidious",
          definition: "very attentive to detail"
        },
        {
          term: "sultry",
          definition: "seductive"
        }
      ]
    },
    {
      title: "nouns",
      cards: [
        {
          term: "petard",
          definition: "a small bomb used to blast down a door"
        },
        {
          term: "interlocuter",
          definition: "a person who takes part in a conversation"
        },
        {
          term: "lassitude",
          definition: "weariness of body or mind"
        }
      ]
    }
  ],
  landingSections: [
    {
      heading: "Create",
      subHeading: "Create custom word sets",
      image: "[image of word set creation]",
      text: "Create, edit, and share personalized word sets, tailored to what YOU (or your students) want to learn"
    },
    {
      heading: "Spell",
      subHeading: "Use them to play Hangman(atee)",
      image: "[image of Hangmanatee game]",
      text: "Play Hangmanatee using your custom word sets, practicing spelling!"
    },
    {
      heading: "Recall",
      subHeading: "...and quiz yourself!",
      image: "[image of word set quizzing]",
      text: "After finding the word, get quizzed on its meaning!"
    }
  ]
};

const reducer = (state=initialState, action) => {
  return state;
};

export default reducer;

