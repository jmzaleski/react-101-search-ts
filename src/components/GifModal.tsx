import * as React from 'react';
import * as ReactModal from 'react-modal';
import * as giphy from 'restyped-giphy-api';

// props:
// 1. modalIsOpen state of some parent telling if modal is posted currently or not
// 2. selectedGiphyObj object describing a GIF returned from Giphy endpoint. state of some parent.
// 3. onRequestCloseCallback: function (of some parent) to call when close button pressed

export type tModalCloseCallback = () => any;

interface IGifModalProps {
    modalIsOpen: boolean,
    selectedGiphyObj: giphy.GIFObject | null,
    modalCloseCallback: tModalCloseCallback
}

// no state.

export function GifModal(props: IGifModalProps) {
    if (!props.modalIsOpen || props.selectedGiphyObj == null){
        return <div>.</div> // weirdly JSX fails to compile without the .
    }
    // we need to close over props. natural way would be to use a => in jsx
    // but tslint says to avoid lambdas in JSX because of performance issues
    const modalCloseCallbackClosure : tModalCloseCallback =  () => props.modalCloseCallback(); 
    
    return (
        <ReactModal
            isOpen={ props.modalIsOpen }
            onRequestClose={ modalCloseCallbackClosure }>
            <div className={"gif-modal"}>
                <img src={ props.selectedGiphyObj.images.original.url } alt={"foo"} />
                <p><strong>Source:</strong> <a href={ props.selectedGiphyObj.source }>{ props.selectedGiphyObj.source }</a></p>
                <p><strong>Rating:</strong> { props.selectedGiphyObj.rating }</p>
                <button onClick={modalCloseCallbackClosure}>close</button>
            </div>
        </ReactModal>
    );
};

