import * as React from 'react';
import { GifItem, tOnGifSelectCallback } from './GifItem';
import * as enzyme from 'enzyme';
import * as giphy from 'restyped-giphy-api';
import * as Adapter from 'enzyme-adapter-react-16';

// our mock of a giphy GIFObject
var mockGiphyGifObject: giphy.GIFObject;
const MockedConstructor = jest.fn<giphy.GIFObject>(() => {
    return { images: { downsized: { url: 'mockurl' } } }
});

beforeEach(() => {
    mockGiphyGifObject = MockedConstructor();
    // console.log("mockgiphyobject:");
    // console.log(mockGiphyGifObject);
});
    
import * as ReactShallowRenderer from 'react-test-renderer/shallow'

// shallow render to snapshot file
// turns out the file is useful to snoop at to figure out selector (see next test)
describe('<GiphItem />', () => {
    const cb: tOnGifSelectCallback = (gifobj:giphy.GIFObject) => null;
    it('renders', () => {
      expect(ReactShallowRenderer.createRenderer().render(
        <GifItem gifobj={mockGiphyGifObject} onGifSelectCallback={cb} key={"foo"}/>          
      )).toMatchSnapshot()
    })
  });

// shallow render GifItem and search in resulting virtual DOM to make sure 
// that mock giphy image prop url has made it to URL of actual image node

describe('simulate click', () => {
    it('shallow render GifItem ', () => {
        var clickCount: number = 0;
        var passedParm: giphy.GIFObject | null = null;
        const callbackForMock: tOnGifSelectCallback = (gifobj:giphy.GIFObject) => { 
            clickCount = clickCount+1; 
            passedParm = gifobj;
            return null
        };
        enzyme.configure({ adapter: new Adapter() });
        const gifitem = enzyme.shallow(
            <GifItem gifobj={mockGiphyGifObject} onGifSelectCallback={callbackForMock} key={"foo"}/>
            );
        // query strings for find are called "selectors". There are lots of flavours.
        // see: https://github.com/airbnb/enzyme/blob/master/docs/api/selector.md
        expect(gifitem.contains(<img src="mockurl"/> )).toEqual(true);

        // test that simulated click bumps clickCount. Zero before.. 1 after..
        expect(clickCount).toEqual(0);
        gifitem.find('[className="gif-item"]').simulate("click");
        expect(clickCount).toEqual(1); // less crufty ways to do this using jest fancy stuff

        // make sure that the mock GIFObject was passed to the callback
        expect(passedParm).toEqual(mockGiphyGifObject);
    })
});
