export const data =
{
  id: 1,
  name: 'React.js Deck',
  cards: [
    {
      id: 1,
      front: 'What are the two Pillars of JS?',
      back: 'The Functional Programming(closures, first class functions, lambdas)and Prototypal inheritance (prototypes, OLOO)',
    },
    {
      id: 2,
      front: 'What is Functional Programming?',
      back: 'A programming paradigm wherein functions are treated as first-class members (i.e. They can be delcared as variables and sent to functions as an argument.' +
        "Good to hear:" +
"+Pure functions / function purity." +
"+Avoid side-effects. " +
"+Simple function composition." +
"+Examples of functional languages: Lisp, ML, Haskell, Erlang, Clojure, Elm, F Sharp, OCaml, etc…" +
"+Mention of features that support FP: first-class functions, higher order functions, functions as arguments/values.",
    },
    {
      id: 3,
      front: 'What is a Higher Order Function',
      back: 'A fn that can manipulate fns and use them as either arguments, results or both',
    },
    {
      id: 4,
      front: 'What is a Pure Function?',
      back: 'A Function with no side effects (i.e. immutability). Meaning it does not permanently alter data but rather makes copies (e.g. By using the es6 spread operator etc.)',
    },
    {
      id: 5,
      front: 'What is a Stateless Functional Component',
      back: 'A pure Function built using => for all components that do not manage state and should be used whenever possible.',
    },
  ],
};
