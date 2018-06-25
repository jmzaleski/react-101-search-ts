import React, {Component} from 'react';

// SearchBar state is the "term" the string to be searched for.
// requires one prop, onTermChange, which is a callback notifying parent that
// the search term has changed.
// It has state in that it hangs on to the search term (term)

type tOnInputChangeCallback = (newSearchTerm: string) => any;


interface ISearchBarProps {
    term: string,
    onInputChange: tOnInputChangeCallback
}
interface ISearchBarState {
    term: string
}

class SearchBar extends Component<ISearchBarProps, ISearchBarState> {    

    constructor(props: ISearchBarProps) {
        super(props)
        var initialState: ISearchBarState = {term: props.term};
        this.setState(initialState); 
    }
    onInputChange(term:string) {
        this.setState({term});
        this.props.onInputChange(term);
    }
    render() {
        return (
            <div className="search">
                <input placeholder="enter text to search giphy"
                       onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}


export default SearchBar;