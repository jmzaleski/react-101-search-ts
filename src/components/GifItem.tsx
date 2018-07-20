import * as React from 'react';
import * as giphy from 'restyped-giphy-api';

// GifItem should pass giphy.GIFObject to handler when it is clicked
export type tOnGifSelectCallback = (gifobj: giphy.GIFObject) => any;

// onclick hander takes no parameters and returns an object
type tOnClickCallback = () => any; // button click handler gets no parms

// The GifItem component takes two (key?) props from its parent
// 1. giphy.GIFObject as returned from the giphy search endpoint
// 2. a function to call back, passing gifobj, when the gifitem is clicked
// 3. key. I'm not sure this is useful
// TODO: what about that key prop? it's just floating around in GifItem. stuff it in alt.

export interface IGifItemProps {
    gifobj: giphy.GIFObject,  
    onGifSelectCallback: tOnGifSelectCallback,
    key: string
    };

export function GifItem(props: IGifItemProps) {
    // avoid lambda's in JSX or tslint will reject, warning about performance issues
    // (we need it to be a closure so it can pull gifobj out of props)
    const onGifSelectCallbackClosure: tOnClickCallback = () => props.onGifSelectCallback(props.gifobj)
    return (
        <div className="gif-item" onClick={onGifSelectCallbackClosure}>
            <img src={props.gifobj.images.downsized.url} alt={props.key} />
        </div>
    )
};
