const initialState = {
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
  ]
};

const wordSets = (state=initialState, action) => {
  return state;
};

export default wordSets;