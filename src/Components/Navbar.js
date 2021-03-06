import React, { Component } from 'react';
import Navitem from './Navitem';
import resume from '../Files/resume.pdf';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state={
            'NavItemActive':'Home'
        }
    }
        
    activeitem=(x)=>{
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        
        this.setState(
            {
                'NavItemActive': x
            }, ()=>{
                document.getElementById(this.state.NavItemActive).classList.add('active');
            }
            );
        };
   
    render() {
        return (
            <nav>
            <ul>

            <Navitem item="Home" 
            tolink="/"  
            activec={this.activeitem}> </Navitem>
            
            <Navitem item="About" 
            tolink="/about"  
            activec={this.activeitem}> </Navitem>
            
            <Navitem item="Education" 
            tolink="/education"  
            activec={this.activeitem}> </Navitem>

            <Navitem item="Experience" 
            tolink="/Experience"  
            activec={this.activeitem}> </Navitem>

            <Navitem item="Projects" 
            tolink="/Projects"  
            activec={this.activeitem}> </Navitem>
            
            <Navitem item="Skills" 
            tolink="/skills"  
            activec={this.activeitem}> </Navitem>
            
            <Navitem item="Contact" 
            tolink="/contact"  
            activec={this.activeitem}> </Navitem> 

            <a href={resume} download="resume.pdf">
                Resume
            </a> 

            </ul>
            </nav>
            )
        }
    }
    
export default Navbar;