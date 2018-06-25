import React from 'react';
import PropTypes from 'prop-types'; // for checking types of props
import GifItem from './GifItem';

// GifList component displays list of GifItems
// GifList has no state
// props:
// gifs: the list of gifs (or null)
// onGifSelect: a function called when a gif is selected.

// TODO: figure out why the "key" prop is passed

const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id} gif={image} onGifSelect={props.onGifSelect}/>
    });

    return (
        <div className="gif-list">{gifItems}</div>
    );
};

GifList.propTypes = {
    gifs: PropTypes.any.isRequired, //arrayOf(GifItem),
    onGifSelect: PropTypes.func.isRequired
}

export default GifList;