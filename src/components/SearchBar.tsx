import * as React from 'react';

// SearchBar state is the "term" the string to be searched for.
// requires one prop, onTermChange, which is a callback notifying parent that
// the search term has changed.
// It has state in that it hangs on to the search term (term)

export type tOnInputChangeCallback = (newSearchTerm: string) => any; 
export type tOnEditCallback = (event: any) => void;

// one prop: callback from parent component to inform when search term has changed
export interface ISearchBarProps {
    onInputChange: tOnInputChangeCallback 
}
// state is the current search term.
interface ISearchBarState {
    term: string
}

export class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {    
    constructor(props: ISearchBarProps) {
        super(props)
        this.setState({term: ''}); 
    }
    public render() {
        // tslint complains if have lambda expr in JSX
        const oicb: tOnEditCallback   =  (event:any) => this.onInputChange(event.target.value);
        return (
            <div className="search"> 
                <input placeholder="enter text to search giphy" onChange={oicb} />
            </div>
        );
    }
    private onInputChange(term:string) : void {
        this.setState({term});
        this.props.onInputChange(term);
    }
}