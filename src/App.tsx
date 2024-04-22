import React from 'react';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css'

function App() {
  return (
    <div className="App">
     <DevTools position="bottom-right" theme="dark"/>
    </div>
  );
}

export default App;
