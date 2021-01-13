import React, {useEffect} from 'react';
import './index.css';
import CharacterCounter from './Components/CharacterCounter';
import { useRecoilState } from 'recoil';
import { catfacts } from './Recoil/Atoms/testState'


function App() {
  const [catFacts, setCatFacts] = useRecoilState(catfacts);

  useEffect(()=> {
    const getRepos = async () => {
      const url = "https://cat-fact.herokuapp.com/facts";
      const resp = await fetch(url);
      const body = await resp.json();
      setCatFacts(body);
    }

    getRepos();
  })
  return (
    <>
      <CharacterCounter />
      {catFacts.map(item => <p>{item}</p>)}
    </>
  );
}

export default App;
