import * as React from 'react';

// temporary experimenting with contributors' .d.ts file
// See https://github.com/rawrmaan/restyped-giphy-api

import * as giphy from 'restyped-giphy-api';

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

export function GifItem(props: IGifItemProps) {
    return (
// tslint:disable-next-line jsx-no-lambda 
        <div className="gif-item" onClick={() => props.onGifSelectCallback(props.gifobj)}>
            <img src={props.gifobj.images.downsized.url} alt={props.key} />
        </div>
    )
};
