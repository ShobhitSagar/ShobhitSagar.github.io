import React from 'react'
import './styles/LinksBar.css'
import ALink from 'react-anchor-link-smooth-scroll'

function LinksBar() {
    return (
        <div id='links-bar'>
            <a id='ALink' href='https://shobhitsagar.github.io/portfolio/' 
            target='_blank'>Portfolio</a>
            <ALink id='ALink' href='#profile-desc'>About Me</ALink>
            <ALink id='ALink'>Services</ALink>
            <ALink id='ALink'>Contact</ALink>
        </div>
    )
}

export default LinksBar
