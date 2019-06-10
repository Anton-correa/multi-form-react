import React, {Component} from 'react';
import {Link, Router} from 'react-router-dom';


class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            time: new Date()
        }
    }

    componentDidMount() {
        setInterval(this.update, 1000)
    }

    update = () => {
        this.setState({
            time: new Date()
        })
    }

    
    render() {
        const h = this.state.time.getHours()
        const m = this.state.time.getMinutes()
        const s = this.state.time.getSeconds()

        var date = new Date();
        var option = {year: 'numeric', month: 'long', day: '2-digit'}
        var fech = new Intl.DateTimeFormat('es-US', option).format(date)

        const spacingStyle = {
            padding: 5
           
        };

        return(
            <nav>
                <div className="nav-wrapper #006064 cyan darken-4">
                    
                    <a href="#" className="left">Inition</a>
                    <a href="#" className="brand-logo">Admision</a>
                    <ul className="right hide-on-med-and-down" >
                        <li style={spacingStyle}><a href="#">Sign out</a></li>
                        <li style={spacingStyle}><a href="#">Help</a></li>
                        <li style={spacingStyle}>{fech.toString()}</li>
                        <li style={spacingStyle}>{h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)}{h < 12 ? 'am' : 'pm'}</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;