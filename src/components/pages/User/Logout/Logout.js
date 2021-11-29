import React from "react";
import {Navigate} from "react-router-dom";

export default function Logout() {
    localStorage.removeItem('archives_login')
    localStorage.removeItem('archives_user')
    return <Navigate to={'/'} />
}