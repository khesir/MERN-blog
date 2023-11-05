import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

function Searchbar() {
    return (
        <div className="Searchbar">
            <Link to="home/create-post" class="create-button"><label>Create Post</label><AiOutlinePlus /> </Link>
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default Searchbar;