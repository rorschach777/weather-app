import React, {Component} from 'react';
import Menu from './Menu/Menu';
import Logo from '../Logo/Logo';
import './Nav.scss';


class Nav extends Component{
    constructor(props){
      super(props);
      this.state={
          menuOpen: true
      }
    }
    toggleMenu=(e)=>{
        let w = window.innerWidth
        console.log(w)
        if (w <= 768){
            this.setState({
                menuOpen: !this.state.menuOpen
            })
        }
  
      
    }
    windowResize=()=>{
        window.addEventListener('resize', (e)=>{
            if(e.currentTarget.innerWidth > 768){
                this.setState({
                    menuOpen: true
                })
            }
            else {
                this.setState({
                    menuOpen: false
                })
            }
        })
    }
    componentDidMount () {
        this.windowResize();
    }
    windowResize 
    render(){
        return (
            <div className="nav">
                <div className="nav__section nav__logo">
                    <Logo/>
                </div>
                <div className="nav__section nav__menu">
                    <Menu click={this.toggleMenu} menuState={this.state.menuOpen}/>
                </div>
            </div>
        );
    }

};

export default Nav;