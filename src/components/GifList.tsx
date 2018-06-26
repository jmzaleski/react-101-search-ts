import * as React from 'react';
import * as giphy from 'restyped-giphy-api';
import {GifItem} from './GifItem';

export type tOnGifSelectCallback = (gifobj: giphy.GIFObject) => any;

// The GifItem component takes two props from its parent
// 1. GIFObject as retured from the giphy search endpoint
// 2. a function to call back when the gifitem is clicked

export interface IGifListProps {
    gifobjs: giphy.GIFObject[],        // TODO: does react define an inteface for Gif?
    onGifSelectCallback: tOnGifSelectCallback
    };

export function GifList( props: IGifListProps) {
    const gifItems = props.gifobjs.map( (gifobj) => {
        return <GifItem key={gifobj.id} gifobj={gifobj} onGifSelectCallback={props.onGifSelectCallback}/>
    });
    return (
        <div className="gif-list">{gifItems}</div>
    );
};
