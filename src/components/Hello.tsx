// from https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter

import * as React from 'react';

// IProps interface defines the props our Hello component can accept.
// Note that something I've set in my VSC insists that all interface names start with a I..
// (The example code in the tutorial just called the interface Props. I like IProps. Feels like 1985!)
// name parm is required and must be a string, enthusiasm is optional but must be a number.

/*export*/ interface IProps { // TODO: why did tutorial "export" this prop??
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

export default Hello; // TODO: o/w importing module complains default was not found in Hello ??

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}