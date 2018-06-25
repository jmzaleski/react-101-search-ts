import * as React from 'react';

// temporary hack to see how to use random contributors .d.ts file
// See https://github.com/rawrmaan/restyped-giphy-api

import * as giphy from '../giphy-temp/giphy-api'

type OnGifSelectCallback = (gifobj: giphy.GIFObject) => any;

// The GifItem component takes two props from its parent
// 1. GIFObject as retured from the giphy search endpoint
// 2. a function to call back when the gifitem is clicked

interface IGifItemProps {
    gifobj: giphy.GIFObject,  
    onGifSelect: OnGifSelectCallback,
    key: string
    };

// TODO: what about that key prop? it's just floating around in GifItem. stuff it in alt.

function GifItem({gifobj, onGifSelect,key}: IGifItemProps) {
    return (
        <div className="gif-item" onClick={() => onGifSelect(gifobj)}>
            <img src={gifobj.images.downsized.url} alt={key} />
        </div>
    )
};

export default GifItem;