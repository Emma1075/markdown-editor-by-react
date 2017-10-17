import React, { Component } from 'react';
import './App.css'
import marked from 'marked'

import Header from  './conponents/Header'
import RowInput from './conponents/RowInput'

class App extends Component {
    constructor(props){
        super(props);

        // 设定初始值
        this.initState = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';
        this.state = {
            rowText: this._turnToHTML(this.initState)
        }
        this.handleRowText = this.handleRowText.bind(this);
    }

    handleRowText(value) {
        // 通过 marked 将其转为 html 标签
        this.setState({
            rowText:this._turnToHTML(value)
        })
    }

    _turnToHTML(value){
        return marked(value,{sanitize:true})
    }

    render() {
        return(
            <div className="container">
                <Header />
                <div className="row wrapper">
                    <div className="col-md-6">
                        <RowInput initText={this.initState} onRowText={this.handleRowText} />
                    </div>
                    <div className="col-md-6">
                        <span dangerouslySetInnerHTML={{__html: this.state.rowText}} />
                    </div>
                </div>
            </div>

        )
    }
}

export default App

