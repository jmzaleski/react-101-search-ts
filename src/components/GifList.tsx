import * as React from 'react';
import GifItem from './GifItem';
import * as giphy from '../giphy-temp/giphy-api'

type tOnGifSelectCallback = (gifobj: giphy.GIFObject) => any;

// The GifItem component takes two props from its parent
// 1. GIFObject as retured from the giphy search endpoint
// 2. a function to call back when the gifitem is clicked

interface IGifListProps {
    gifobjs: giphy.GIFObject[],        // TODO: does react define an inteface for Gif?
    onGifSelectCallback: tOnGifSelectCallback
    };

// GifList component displays list of GifItems

function GifList( props: IGifListProps) {
    const gifItems = props.gifobjs.map( (gifobj) => {
        return <GifItem key={gifobj.id} gifobj={gifobj} onGifSelectCallback={props.onGifSelectCallback}/>
    });
    return (
        <div className="gif-list">{gifItems}</div>
    );
};

export default GifList;