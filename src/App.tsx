import React from 'react';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css'
import { Button } from '@components/Button';

function App() {
  return (
    <div className="App">
     <Button/>
     <DevTools position="bottom-right" theme="dark"/>
    </div>
  );
}

export default App;
