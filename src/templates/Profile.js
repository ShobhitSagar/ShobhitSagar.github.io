import React from 'react'
import './styles/Profile.css'

function Profile() {
    return (
        <div id='profile-div'>
            <div id="profile-pic"></div>
            <div id='profile-desc'>
                <h1>Hi, I'm Shobhit</h1>
                <br />
                <h3>A simp programmer, based in India.</h3>
                <br />
                <span>
                    <q>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</q> – Martin Fowler
                </span>
                <br />
                <br />
                <button>MORE ABOUT ME</button>
            </div>
        </div>
    )
}

export default Profile
