import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import GifModal from './components/GifModal';
import request from 'superagent';

import './styles/app.css';

//state of the GifModalApp components is a list of gifs
//and the pair, modelIsOpen and selectedGif, which specify one of the gifs as selected.
//there are no props.
class GifModalApp extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            selectedGif: null, //gif user has clicked
            modalIsOpen: false
        }
    }
    openModal(gif){
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        })
    }
    closeModal(){
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        })
    }
    handleTermChange(term) {
        //concoct a giphy search URL from term
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
        request.get(url, (err, res) => {
            this.setState({gifs: res.body.data})
        });
    }
    render(){
        return (
            <div>
                <SearchBar onTermChange={term => this.handleTermChange(term)}/>
                <GifList gifs={this.state.gifs}
                         onGifSelect={selectedGif => this.openModal(selectedGif)} />
                <GifModal modalIsOpen={this.state.modalIsOpen}
                          selectedGif={this.state.selectedGif}
                          onRequestClose={ () => this.closeModal() } />
            </div>
        );
    }
}


ReactDOM.render(<GifModalApp />, document.getElementById('gifModalApp'));