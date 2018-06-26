import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import 
import registerServiceWorker from './registerServiceWorker';


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
  Render(){
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


/*  <div> <Hello name="TypeSCript" enthusiasmLevel={10} /> 
  <p>
    Note that if you mess up the props you pass to Hello above by 
    failing to provide a name prop (set to a string) the generated
    Typescript fails to compile. Similarly for enthusiasmLevel.
    This is way cool.
    </p>
  </div> ,
    document.getElementById('root') as HTMLElement
);
*/

