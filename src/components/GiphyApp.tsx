import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SearchBar} from './SearchBar';
import {tOnInputChangeCallback} from './SearchBar';
import {GifList} from './GifList';
import {GifModal} from './GifModal';
import * as giphy from 'restyped-giphy-api';
import * as request from 'superagent';
import './styles/app.css';

//state of the GifModalApp components is a list of gifs
//and the pair, modelIsOpen and selectedGif, which specify one of the gifs as selected.
//there are no props.

interface IGiphyAppProps {
}
interface IGiphyAppState {
    modalIsOpen: boolean,
    giphyObjs: giphy.GIFObject[]
    selectedGiphyObj: giphy.GIFObject | null
}
export class GiphyApp extends React.Component<IGiphyAppProps,IGiphyAppState> {
    constructor(props:IGiphyAppProps) {
        super(props);
        this.state = {
            modalIsOpen: false,
            giphyObjs: [],
            selectedGiphyObj: null, //gif user hasn't clicked one yet.
        }
    }
    openModal(giphyObj: giphy.GIFObject) {
        this.setState({
            modalIsOpen: true,
            selectedGiphyObj: giphyObj
        })
    }
    closeModal(){
        this.setState({
            modalIsOpen: false,
            selectedGiphyObj: null
        })
    }
    // when search term changes
    handleTermChange(term:string) : void {
        //concoct a giphy search URL from term
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
        request.get(url, (err, res) => {
            this.setState({giphyObjs: res.body.data})
        });
    }

    render(){
        var xx: tOnInputChangeCallback = this.handleTermChange; //make sure sig matches. must be prettier way..
        return (
            <div>
                <SearchBar onInputChange = {(term:string) => xx(term)} />
                <GifList gifobjs={this.state.giphyObjs}
                         onGifSelectCallback = {(selectedGiphyObj:giphy.GIFObject) => this.openModal(selectedGiphyObj)} />
                <GifModal modalIsOpen        = {this.state.modalIsOpen}
                          selectedGiphyObj   = {this.state.selectedGiphyObj}
                          onRequestCloseCallback = { () => this.closeModal() } />
            </div>
        );
    }
}


ReactDOM.render(<GiphyApp />, document.getElementById('giphyApp'));