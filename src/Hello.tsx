// src/components/Hello.tsx
// from https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter

import * as React from 'react';

// defines the props our Hello component can accept.
// name is required, enthusiasm is optional

export interface IProps { // TODO: learn why export is needed.
  name: string;
  enthusiasmLevel?: number;
}

// stateless funcion component impl - SFC 

function Hello({ name, enthusiasmLevel = 1 }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}