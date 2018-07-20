import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as ReactShallowRenderer from 'react-test-renderer/shallow';
import * as giphy from 'restyped-giphy-api';
import { GifItem, tOnGifSelectCallback } from '../GifItem';

// mock of a giphy.GIFObject
const MockedConstructor = jest.fn<giphy.GIFObject>(() => {
    return { images: { downsized: { url: 'mockurl' } } }
});

// JSX translated GifItem
let ele: any;
let mockGiphyGifObject: giphy.GIFObject;
let mockedCallbackForGifItem: jest.Mock<tOnGifSelectCallback>;

beforeEach(() => {
    mockGiphyGifObject = MockedConstructor();
    mockedCallbackForGifItem = jest.fn((gifobj:giphy.GIFObject) => null);
    ele = <GifItem gifobj={mockGiphyGifObject} onGifSelectCallback={mockedCallbackForGifItem} key={"foo"}/> ;
});
    

// shallow render to snapshot file
// turns out the file is useful to snoop at to figure out selector (see next test)
describe('<GiphItem />', () => {
    it('renders', () => {
      expect(ReactShallowRenderer.createRenderer().render( ele )).toMatchSnapshot();
    })
  });

// shallow render GifItem and search in resulting virtual DOM to make sure 
// that mock giphy image prop url has made it to URL of actual image node
describe('check IMG node', () => {
    it('IMG src = mockurl ', () => {
        enzyme.configure({ adapter: new Adapter() });
        const gifitem = enzyme.shallow(ele);
        // query strings for find are called "selectors". There are lots of flavours.
        // see: https://github.com/airbnb/enzyme/blob/master/docs/api/selector.md
        expect(gifitem.contains(<img src="mockurl"/> )).toEqual(true);
    })
});

describe('GifItem calls click handler correctly', () => {
    it('simulate a click on shallow rendering of GifItem', () => {
        enzyme.configure({ adapter: new Adapter() });
        const gifitem = enzyme.shallow( ele );
        // handler has NOT  been called before simulate click 
        expect(mockedCallbackForGifItem.mock.calls.length).toEqual(0);

        gifitem.find('[className="gif-item"]').simulate("click"); 

        // The first argument of the first call to the handler should be mocked GIFObject
        expect(mockedCallbackForGifItem.mock.calls.length).toEqual(1);
        expect(mockedCallbackForGifItem.mock.calls[0][0]).toBe(mockGiphyGifObject); 
    })
});

