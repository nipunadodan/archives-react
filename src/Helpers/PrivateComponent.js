import {isLoggedIn, useAuth} from "./Helpers";

export default function PrivateComponent(props) {
    const auth = useAuth(props);
    return isLoggedIn() && auth ? props.children : null
}