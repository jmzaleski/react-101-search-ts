import React from 'react';
import PropTypes from 'prop-types'; // for checking types of props

// SearchBar state is the "term" the string to be searched for.
// requires one prop, onTermChange, which is a callback notifying parent that
// the search term has changed.

class SearchBar extends React.Component {
    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }
    render() {
        return (
            <div className="search">
                <input placeholder="enter text to search giffy"
                       onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

SearchBar.propTypes = {
    onTermChange: PropTypes.func.isRequired
}

export default SearchBar;