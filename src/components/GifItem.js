import React from 'react';

// no state or props. just a wrapper function around a gif and associated callback
const GifItem = ({gif, onGifSelect}) => {

    return (
        <div className="gif-item" onClick={() => onGifSelect(gif)}>
            <img src={gif.images.downsized.url} alt={'foo'} />
        </div>
    )
};

export default GifItem;