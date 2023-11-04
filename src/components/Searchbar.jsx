import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Searchbar() {
    return (
        <div className="Searchbar">
            <a href="/create-post" class="create-button"><label>Create Post</label><AiOutlinePlus /> </a>
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default Searchbar;