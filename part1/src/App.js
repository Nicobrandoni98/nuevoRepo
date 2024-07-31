// 1RA PARTE DE EJERCICIOS

// import Header from "./Header.js";
// import Content from "./Content.js";
// import Total from "./Total.js";

// const App = () => {

//   return <div>
//           {/* <Header/>
//           <Content />
//           <Total /> */}
//   </div>;
// };

// export default App;

// 2DA PARTE DE EJERCICIOS

/* import { useState } from "react";
import Statistics from "./Statistics.js";
import Buttons from "./Buttons.js";



const App = () => {
  const [statics, setStatics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0
  });
  const calculateAverage = (good, neutral, bad, all) => {
    const sumaPonderada = good * 1 + neutral * 0 + bad * -1;
    return all === 0 ? 0 : sumaPonderada / all;
  };

  const cliclGood = () => {
    const newStats = {
      ...statics,
      good: statics.good + 1,
      all: statics.all + 1,
      positive: (statics.good + 1) / (statics.all + 1),
      average: calculateAverage(statics.good + 1, statics.neutral, statics.bad, statics.all + 1)
    };
    setStatics(newStats);
  };
  const clickNeutral = () => {
    const newStats = {
      ...statics,
      neutral: statics.neutral + 1,
      all: statics.all + 1,
      average: calculateAverage(statics.good + 1, statics.neutral, statics.bad, statics.all + 1)
    };
    setStatics(newStats);
  };
  const clickBad = () => {
    const newStats = {
      ...statics,
      bad: statics.bad + 1,
      all: statics.all + 1,
      average: calculateAverage(statics.good + 1, statics.neutral, statics.bad, statics.all + 1)
    };
    setStatics(newStats);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Buttons onClick={cliclGood} text="Good"/>
      <Buttons onClick={clickNeutral} text="Neutral"/>
      <Buttons onClick={clickBad} text="Bad"/>

      <Statistics statics={statics}/>
    </div>
  );
};

export default App; */

// 3RA PARTE DE LOS EJERCICIOS

import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  
  const [voto, setVoto] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  })
  
   const anecdotasRandom = () => {
    const random = (Math.floor(anecdotes.length * Math.random()));
    setSelected(random);
  }  
  
  const votar = () => {
    const votando = {
    }
  }


  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Tiene {} votos.</p>
      <button onClick={anecdotasRandom}>Siguiente anectoda</button>
      <button onClick={votar}>
        Votar
      </button>
    </div>
  )
}

export default App