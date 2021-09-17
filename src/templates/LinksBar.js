import React from 'react'
import './styles/LinksBar.css'
import { Link } from 'react-scroll'

function LinksBar() {
    return (
        <div id='links-bar'>
            <Link id='Link' to='about-me' smooth={true}>About Me</Link>
            <Link id='Link' to='projects' smooth={true}>Projects</Link>
            <Link id='Link' to='blogs' smooth={true}>Blogs</Link>
            <Link id='Link' to='contact' smooth={true}>Contact</Link>
        </div>
    )
}

export default LinksBar