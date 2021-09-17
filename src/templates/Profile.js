import React from 'react'
import './styles/Profile.css'
import { BiHappyBeaming } from 'react-icons/bi'
import { Link } from 'react-scroll'

function Profile() {
    return (
        <div id='profile-div'>
            <div id="profile-pic"></div>
            <div id='profile-desc'>
                <h1>Hi, </h1>
                <h1>I'm Shobhit <BiHappyBeaming /></h1>
                <br />
                <h3>A simp programmer, based in India.</h3>
                <br />
                <span>
                    <q>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</q> – Martin Fowler
                </span>
                <br />
                <br />
                <Link id='button' to='about-me' smooth={true}>MORE ABOUT ME</Link>
            </div>
        </div>
    )
}

export default Profile
