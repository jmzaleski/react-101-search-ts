import * as React from 'react';

// temporary hack to see how to use random contributors .d.ts file
// See https://github.com/rawrmaan/restyped-giphy-api

import * as giphy from '../giphy-temp/giphy-api'

type tOnGifSelectCallback = (gifobj: giphy.GIFObject) => any;

// The GifItem component takes two props from its parent
// 1. GIFObject as retured from the giphy search endpoint
// 2. a function to call back when the gifitem is clicked

export interface IGifItemProps {
    gifobj: giphy.GIFObject,  
    onGifSelectCallback: tOnGifSelectCallback,
    key: string
    };

// TODO: what about that key prop? it's just floating around in GifItem. stuff it in alt.

//function GifItem({gifobj, onGifSelectCallback,key}: IGifItemProps) {
export function GifItem(props: IGifItemProps) {
    return (
        <div className="gif-item" onClick={() => props.onGifSelectCallback(props.gifobj)}>
            <img src={props.gifobj.images.downsized.url} alt={props.key} />
        </div>
    )
};
