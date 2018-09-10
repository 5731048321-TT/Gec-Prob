// export default HeaderNavigation;
import React, { Component } from 'react';

class HeaderNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let nav;
        nav =   
        <div >
            {/* <a className="">Navbar</a> */}
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="/Course">Course</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Information">Information</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">grade</a>
                </li> */}
                {/* <li className="nav-item">
                    <a className="nav-link" href="#">Disabled</a>
                </li> */}
                </ul>
        </div>    
        return (
            <div className="container">
            <br></br>
            <br></br>
                <span>{nav}</span>
            </div>
        );
    }
}
export default (HeaderNavigation);