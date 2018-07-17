import * as React from 'react'
import * as ReactShallowRenderer from 'react-test-renderer/shallow'
import { GiphyApp } from '../GiphyApp';

describe('<GiphyApp />', () => {
  it('renders', () => {
    expect(ReactShallowRenderer.createRenderer().render(
      <GiphyApp />
    )).toMatchSnapshot() // jest writes a file into the file system that subsequently compares against
  })
});