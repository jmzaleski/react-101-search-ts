import * as React from 'react'
// import * as TestUtils from 'react-dom/test-utils'
import * as ReactShallowRenderer from 'react-test-renderer/shallow'

// import { createStore } from 'redux'
// import { reducers } from '../../reducers'

import { GiphyApp } from '../GiphyApp';

describe('<GiphyApp />', () => {
  it('renders', () => {
    expect(ReactShallowRenderer.createRenderer().render(
      <GiphyApp />
    )).toMatchSnapshot()
  })
});