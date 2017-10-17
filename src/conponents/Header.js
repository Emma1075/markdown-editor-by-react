import React, { Component } from 'react';

class Header extends Component {
    render() {
        let headerStyle = {color: '#d43f3a'};
        return(
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center" style={headerStyle}>一个简单的 MarkDown 编辑器</h2>
                </div>
            </div>
        )
    }
}

export default Header

