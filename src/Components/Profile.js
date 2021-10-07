import React from 'react';
import "./Profile.css";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1,
            width: 700,
            marginTop: 15,
            marginBottom: 15, 
        }}
    />
);

function Profile() {
    return (
        <div class="profile">
            <div class="profile-container">
                <h1>Hello, ABCABC abababab</h1>
                <form class="ui form">
                    <h3>BASIC INFO</h3>
                    <div class="profile-field">
                            <label>PHOTO</label>
                            <img class="ui tiny circular image" src="https://image.shutterstock.com/image-vector/profile-icon-man-symbol-circle-260nw-771305137.jpg"></img>    
                    </div> 
                    <ColoredLine value="gray" />
                    <div class="profile-field">
                        
                        <label>USERNAME</label>
                        <div class="inner-data">ABCABCABC abababab</div>
                        <i class="right chevron icon"></i>
                        
                    </div>
                    <ColoredLine value="gray" />
                    <div class="profile-field">
                        <label>BIRTHDAY</label>
                        <div class="inner-data">1st OCT 2021</div>
                        <i class="right chevron icon"></i>
                        
                    </div> 
                    <ColoredLine value="gray" />
                    <div class="profile-field">
                        <label>GENDER</label>
                        <div class="inner-data">MALE</div>
                        <i class="right chevron icon"></i>

                    </div> 
                    <ColoredLine value="gray" />
                    <h3>CONTACT INFO</h3>
                    <div class="profile-field">
                        <label>EMAIL</label>
                        <div class="inner-data">helloworld23@gmail.com</div>
                        <i class="right chevron icon"></i>

                    </div> 
                    <ColoredLine value="gray" />
                    <div class="profile-field">
                        <label>PHONE</label>
                        <div class="inner-data">+1-(222)-4563388</div>
                        <i class="right chevron icon"></i>

                    </div> 
                    <ColoredLine value="gray" />
                    <h3>SECURITY</h3>
                    
                        <div class="security">
                            <div class="pass">
                                <label>CHANGE PASSWORD</label>
                                <div class="ui mini icon input">
                                    <input type="text" placeholder="password" />
                                </div>
                                <label>CONFIRM PASSWORD</label>
                                <div class="ui mini icon input">
                                    <input type="text" placeholder="confirm password" />
                                </div>
                                <div class="button">
                                    <button class="ui primary button">
                                        Save
                                    </button>
                                    <button class="ui button">
                                        Discard
                                    </button>
                                </div>
                            </div>
                            <div class="verification">
                                <div class="step">
                                    <label>PHONE VERIFICATION</label>
                                    <button class="ui toggle button">VERIFY</button>
                                </div>
                                <div class="phone-verify">
                                    <label>LOGOUT</label>
                                    <button class="ui toggle button">LOGOUT</button>
                                </div>
                            </div>          
                        </div>    
                   
                </form> 
            </div>
        </div>
    )
}

export default Profile
