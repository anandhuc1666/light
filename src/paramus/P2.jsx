import { useLocation } from "react-router-dom"

function P2() {
    const location = useLocation();
    const {news} = location.state ||{}
    return (
        <div>
            P2
            <p>new word is :{news}</p>

        </div>
    )
}

export default P2