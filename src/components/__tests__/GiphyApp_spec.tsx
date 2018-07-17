import * as React from 'react'
//import * as TestUtils from 'react-dom/test-utils'
import * as ReactShallowRenderer from 'react-test-renderer/shallow'

//import { createStore } from 'redux'
//import { reducers } from '../../reducers'

import { GiphyApp } from '../GiphyApp';

describe('<GiphyApp />', () => {
  it('renders', () => {
    //const store = createStore(reducers)
//    const Rearenderer = new ReactShallowRenderer()
//      <GiphyApp  store={store} />

//const renderer: ReactShallowRenderer.ShallowRenderer = ReactShallowRenderer.createRenderer
//    const ReactShallowRenderer.ShallowRender renderer = new ReactShallowRenderer()

    expect(ReactShallowRenderer.createRenderer().render(
      <GiphyApp />
    )).toMatchSnapshot()
  })
});