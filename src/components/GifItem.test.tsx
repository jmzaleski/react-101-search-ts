import * as React from 'react';
import * as enzyme from 'enzyme';
// import { GifItem, tOnClickCallback, tOnGifSelectCallback } from './GifItem';
 import { GifItem, tOnGifSelectCallback } from './GifItem';
import * as giphy from 'restyped-giphy-api';
// import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import * as Adapter from 'enzyme-adapter-react-16';


// import { GifList, tOnGifSelectCallback } from './GifList';
// import { SearchBar, tOnInputChangeCallback } from './SearchBar';

// jest.mock('restyped-giphy-api');
// const giphyMock= jest.genMockFromModule('restyped-giphy-api');
// giphyMock.xx = () => null;

// let xx: jest.Mock<string> = "foo";
// let mockGiphyGifObject: giphy.GIFObject;
// let o : giphyMockGIFObject = {};

var mockGiphyGifObject:giphy.GIFObject;

beforeEach(() => {
    // make a mock for the class of GIFObject.
    const M = jest.fn<giphy.GIFObject>( () => {
        var o: any = {images: {downsized: {url: 'mockurl'}}}
        console.log(o);
        return o;
    });
    mockGiphyGifObject = M();
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

describe('xx', () => {
    it('shallow render GifItem ', () => {
        var cc: number = 0;
        const cb: tOnGifSelectCallback = (gifobj:giphy.GIFObject) => { 
            cc = cc+1; 
            return null
        };
        enzyme.configure({ adapter: new Adapter() });
        const gifitem = enzyme.shallow(
            <GifItem gifobj={mockGiphyGifObject} onGifSelectCallback={cb} key={"foo"}/>
            );
        // console.log(gifitem.props());
        // console.log(gifitem.html());
        // query strings for find are called "selectors". There are lots of flavours.
        // see: https://github.com/airbnb/enzyme/blob/master/docs/api/selector.md
        console.log(gifitem.find('[src="mockurl"]').html());
        // why oh why? expect(gifitem.contains('[src="mockurl"]')).toEqual(true);
        // maybe different flavours of selectors for contain vs find ??
        expect(gifitem.contains(<img src="mockurl"/> )).toEqual(true);
        // console.log(gifitem.find('onClick').html());
        console.log(gifitem.find('[className="gif-item"]').html());
//        console.log(gifitem.find('[className="gif-item"]').prop("onClick").class);
        console.log(gifitem.find('[className="gif-item"]').props());
        console.log(cc);
        expect(cc).toEqual(0);
        console.log(gifitem.find('[className="gif-item"]').simulate("click"));
        expect(cc).toEqual(1);
    })
});
