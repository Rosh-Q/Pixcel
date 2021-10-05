import React from "react";

class SearchBar extends React.Component {

    state = { value: " " };


    handleSubmit = (event)=>  {
        event.preventDefault();
        this.props.onSub(this.state.value);
    };

    


render() {
    return ( 
        <div className="ui segment">
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field" >
                    <label>Search here</label>
                    <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})} />
                </div>
            </form>
        </div>
    )
}
}
export default SearchBar;