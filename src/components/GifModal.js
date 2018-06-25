import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types'; // for checking types of props

//connect up the props in react-model with the ones we made in app. (this feels bogus)
const GifModal = (props) => {
    if (!props.modalIsOpen){
        return <div></div>
    }
    console.assert(props.selectedGif !=null) //never modalIsOpen and selectedGif not set to gif!
    return (
        <Modal
            isOpen={ props.modalIsOpen }
            onRequestClose={ () => props.onRequestClose() }>
            <div className={"gif-modal"}>
                <img src={ props.selectedGif.images.original.url } alt={"foo"} />
                <p><strong>Source:</strong> <a href={ props.selectedGif.source }>{ props.selectedGif.source }</a></p>
                <p><strong>Rating:</strong> { props.selectedGif.rating }</p>
                <button onClick={() => props.onRequestClose()}>close</button>
            </div>
        </Modal>
    );
};

//investigate rudeness of debugging in presence of typos setting prop names
GifModal.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,//PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    //challenge is that initializing selectedGif to null will cause any.isRequired to fail
    //whereas below will pass.
    selectedGif: function(props, propName, componentName) {
        if (! (propName in props)){
            return new Error('selectedGif prop must exist and be set (to null or a Gif). Validation failed.' );
        }
        var prop = props[propName]
        if (prop == null ){
            return; //null is okay when there is no modal
        }
        if (! prop.hasOwnProperty('source')){
            return new Error(propName + ' prop must have field "source". You sure you passed a Gif?' +
                ' Validation failed for:' + prop.toString());
        }
    }
}
export default GifModal;