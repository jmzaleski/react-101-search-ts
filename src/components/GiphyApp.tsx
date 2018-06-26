import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as giphy from 'restyped-giphy-api';
import * as request from 'superagent';
import { GifList, tOnGifSelectCallback } from './GifList';
import { GifModal, tModalCloseCallback } from './GifModal';
import { SearchBar, tOnInputChangeCallback } from './SearchBar';

// import './styles/app.css';

// state of the GifModalApp components is a list of gifs
// and the pair, modelIsOpen and selectedGif, which specify one of the gifs as selected.
// there are no props.
interface IGiphyAppState {
    modalIsOpen: boolean,
    giphyObjs: giphy.GIFObject[]
    selectedGiphyObj: giphy.GIFObject | null
}

export class GiphyApp extends React.Component<{},IGiphyAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            giphyObjs: [],
            modalIsOpen: false,
            selectedGiphyObj: null, // gif user hasn't clicked one yet.
        }
    }

    public render() {
        // this hocus pocus to avoid coding lambda's in JSX, which tslint rejects as inefficient.
        const handleTermChangeClosure: tOnInputChangeCallback = (term:string) => this.handleTermChange(term);
        const openModalClosure: tOnGifSelectCallback          = (gifObj: giphy.GIFObject) => this.openModal(gifObj);
        const closeModalClosure: tModalCloseCallback          = () => this.closeModal();
        return (
            <div>
                <SearchBar onInputChange = {handleTermChangeClosure} />
                <GifList  gifobjs={this.state.giphyObjs}
                          onGifSelectCallback = {openModalClosure} />
                <GifModal modalIsOpen        = {this.state.modalIsOpen}
                          selectedGiphyObj   = {this.state.selectedGiphyObj}
                          modalCloseCallback = { closeModalClosure } />
            </div>
        );
    }
    
    private openModal(giphyObj: giphy.GIFObject) {
        this.setState({
            modalIsOpen: true,
            selectedGiphyObj: giphyObj
        })
    }
    private closeModal(){
        this.setState({
            modalIsOpen: false,
            selectedGiphyObj: null
        })
    }
    // when search term changes, change the state of this component.
    private handleTermChange(term:string) : void {
        // concoct a giphy search URL from term
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
        request.get(url, (err, res) => {
            this.setState({giphyObjs: res.body.data})
        });
    }
}

ReactDOM.render(<GiphyApp />, document.getElementById('root'));