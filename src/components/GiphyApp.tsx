import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as giphy from 'restyped-giphy-api';
import * as request from 'superagent';
import { GifList } from './GifList';
import { GifModal } from './GifModal';
import { SearchBar/*, tOnInputChangeCallback*/ } from './SearchBar';

// import './styles/app.css';

// state of the GifModalApp components is a list of gifs
// and the pair, modelIsOpen and selectedGif, which specify one of the gifs as selected.
// there are no props.

// interface IGiphyAppProps {}
interface IGiphyAppState {
    modalIsOpen: boolean,
    giphyObjs: giphy.GIFObject[]
    selectedGiphyObj: giphy.GIFObject | null
}
// export class GiphyApp extends React.Component<IGiphyAppProps,IGiphyAppState> {
export class GiphyApp extends React.Component<{},IGiphyAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            giphyObjs: [],
            modalIsOpen: false,
            selectedGiphyObj: null, // gif user hasn't clicked one yet.
        }
    }
    
    public render(){
        // const xx: tOnInputChangeCallback = this.handleTermChange; // make sure sig matches. must be prettier way..
        /* tslint:disable */
        return (
            <div>
                <SearchBar onInputChange = {(term:string) => this.handleTermChange(term)} />
                <GifList gifobjs={this.state.giphyObjs}
                         onGifSelectCallback = {(selectedGiphyObj:giphy.GIFObject) => this.openModal(selectedGiphyObj)} />
                <GifModal modalIsOpen        = {this.state.modalIsOpen}
                          selectedGiphyObj   = {this.state.selectedGiphyObj}
                          onRequestCloseCallback = { () => this.closeModal() } />
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
    // when search term changes
    private handleTermChange(term:string) : void {
        // concoct a giphy search URL from term
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
        request.get(url, (err, res) => {
            this.setState({giphyObjs: res.body.data})
        });
    }

}


ReactDOM.render(<GiphyApp />, document.getElementById('root'));