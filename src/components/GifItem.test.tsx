// import * as React from 'react';
// import * as enzyme from 'enzyme';
// import { GifItem, tOnClickCallback, tOnGifSelectCallback } from './GifItem';
// import * as giphy from 'restyped-giphy-api';

// const mockGiphyGifObject: giphy.GIFObject = {
//     type: "mock_string_value",
//     id: "mock_string_value",
//     slug: "mock_string_value",
//     url: "mock_string_value",
//     bitly_gif_url: "mock_string_value",
//     bitly_url: "mock_string_value",
//     embed_url: "mock_string_value",
//     username: "mock_string_value",
//     source: "mock_string_value",
//     rating: "mock_string_value",
//     caption: "mock_string_value",
//     content_url: "mock_string_value",
//     source_tld: "mock_string_value",
//     source_post_url: "mock_string_value",
//     import_datetime: "mock_string_value",
//     trending_datetime: "mock_string_value",
//     images: null,
//     meta:{
//         msg: "mock_string_value",
//         status: 42,
//         response_id: "mock_string_value",
//       }
//   }
// it('renders image', () => {
//     const cb: tOnGifSelectCallback = (gifobj:giphy.GIFObject) => null;
//         const gifitem = enzyme.shallow(
//             <GifItem gifobj={mockGiphyGifObject} onGifSelectCallback={cb} key={"foo"}/>
//         );
//     expect(gifitem.find(".greeting").text()).toEqual('Hello Daniel!')
// });
