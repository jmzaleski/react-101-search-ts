import * as React from 'react';
//import * as rm from  '@types/react-modal';
//import * as rm from  'react-modal';
//import ReactModal = require('@types/react-modal');
//import {ReactModal} from 'react-modal';
//import * as rm from './react-modal-api.ds';
//import ReactModal from 'react-modal';
import * as ReactModal from 'react-modal';
import * as giphy from 'restyped-giphy-api';

// props:
// 1. modalIsOpen state of some parent telling if modal is posted currently or not
// 2. selectedGiphyObj object describing a GIF returned from Giphy endpoint. state of some parent.
// 3. onRequestCloseCallback: function (of some parent) to call when close button pressed

type tOnInputChangeCallback = () => any;

interface IGifModalProps {
    modalIsOpen: boolean,
    selectedGiphyObj: giphy.GIFObject | null,
    onRequestCloseCallback: tOnInputChangeCallback,
}

// no state.

export function GifModal(props: IGifModalProps) {
    if (!props.modalIsOpen || props.selectedGiphyObj == null){
        return <div></div>
    }
    console.assert(props.selectedGiphyObj !=null) //never modalIsOpen and selectedGif not set to gif!
    return (
        <ReactModal
            isOpen={ props.modalIsOpen }
            onRequestClose={ () => props.onRequestCloseCallback() }>
            <div className={"gif-modal"}>
                <img src={ props.selectedGiphyObj.images.original.url } alt={"foo"} />
                <p><strong>Source:</strong> <a href={ props.selectedGiphyObj.source }>{ props.selectedGiphyObj.source }</a></p>
                <p><strong>Rating:</strong> { props.selectedGiphyObj.rating }</p>
                <button onClick={() => props.onRequestCloseCallback()}>close</button>
            </div>
        </ReactModal>
    );
};

