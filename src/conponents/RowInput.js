import React, { Component } from 'react';

class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.initText
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })

        this.props.onRowText(e.target.value);
    }

    render() {
        return(
            <textarea
                className="form-control"
                onChange={this.handleChange}
                rows="25"
                value={this.state.text}
            />
        )
    }
}

export default RowInput