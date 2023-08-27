import React, {useState} from "react";
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Bottom from './Bottom';

const Review = () => {
    return(
        <div>
            <h1>Hello Reviews!</h1>
            <Bottom />
        </div>
    )
}

export default Review;