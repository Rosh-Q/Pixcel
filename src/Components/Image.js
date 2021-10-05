import React, { Component } from "react";

class Image extends Component {
    constructor(props) {
        super(props)
        this.state = { span: null }
        this.imageRef = React.createRef()
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load',
            () => this.setSpans());
    };
    setSpans() {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 10);
        this.setState({ span: span })
        console.log(this.state.span)

    };
    render() {
        const { description, urls } = this.props.image
        return <div style={{gridRowEnd: `span ${this.state.span}`}}>
            <img ref={this.imageRef} alt={description} src={urls.regular} />
        </div>
    }
}

export default Image;