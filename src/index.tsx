import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from "./components/Hello";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div> <Hello name="TypeSCript" enthusiasmLevel={10} /> 
  <p>
    Note that if you mess up the props you pass to Hello above by 
    failing to provide a name prop (set to a string) the generated
    Typescript fails to compile. Similarly for enthusiasmLevel.
    This is way cool.
    </p>
  </div> ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
