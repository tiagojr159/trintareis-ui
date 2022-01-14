import React from 'react';
import { FaHome, FaRocketchat, FaEarlybirds, FaUserFriends, FaUniversity, FaSearch } from "react-icons/fa";
import { IoIosNotifications, IoIosSchool } from "react-icons/io";
import { MdOutlineGroups } from "react-icons/md";


import Stories from '../stories/index';
import FeedForm from '../feed-form/index';
import FeedPost from '../feed-post/FeedPost';


import './header.css';
import '../stories/stories.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="App">
            <div className="header">
                <div className="headerLeft">
                    <div className="logo-fb">
                        <FaEarlybirds />
                    </div>
                    <Link to="/search">
                    <div className="search-fb">
                        <FaSearch />
                    </div>
                    </Link>
                    <Link to="/home">
                        <div className="home-fb">
                            <FaHome />
                        </div>
                    </Link>
                    <Link to="/myfriends">
                        <div className="friend-fb">
                            <FaUserFriends />
                        </div>
                    </Link>
                    <Link to="/chat">
                    <div className="chat-fb">
                        <FaRocketchat />
                    </div>
                    </Link>
                    <Link to="/university">
                    <div className="university-fb">
                        <FaUniversity />
                    </div>
                    </Link>
                    <div className="notification-fb">
                        <IoIosNotifications />
                    </div>
                    <div className="school-fb">
                        <IoIosSchool />
                    </div>
                    <div className="group-fb">
                        <MdOutlineGroups />
                    </div>
                </div>
                <div className="headerRight">
                    <div className="plus-btn">
                        +
                    </div>
                </div>
            </div>
            {/* <Stories /> */}

        </div>
    )
}

export default Header;