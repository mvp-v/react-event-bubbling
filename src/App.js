import { useRef } from 'react';

import { DomLogger } from './DomLogger';
import { Block } from './Block';
import './App.css';

const App = () => {
  const level1Block = useRef();
  const level2Block = useRef();
  const level3Block = useRef();
  return (
    <>
      <Block ref={level1Block} id="level1">
        <Block ref={level2Block} id="level2">
          <Block ref={level3Block} id="level3" />
        </Block>
      </Block>
      <DomLogger id='window' element={window} />
      <DomLogger id='document' element={document} />
      <DomLogger id='React root' element={document.querySelector("div#root")} />
      <DomLogger id='div.level1' element={level1Block} />
      <DomLogger id='div.level2' element={level2Block} />
      <DomLogger id='div.level3' element={level3Block} />
    </>
  );
}

export default App;
