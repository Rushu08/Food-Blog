import buzzfeed from "../images/icons/Buzzfeed.png"
import discovery from "../images/icons/Discovery.png"
import google from "../images/icons/google.png"
import hbo from "../images/icons/Hbo.png"
import youtube from "../images/icons/Youtube.png"
import zeetv from "../images/icons/Zeetv.png"

export default function Channel(){
    return (
        <>
            <div className="blogcontainer">
            <div className="channel-section ">
                <p className="channel-title">As seen in</p>
                <ul className="channels-list">
                    <li className="channels-list-item">Discovery</li>
                    <li className="channels-list-item">Buzzfeed</li>
                    <li className="channels-list-item">master chef</li>
                    <li className="channels-list-item">FOOD FOOD</li>
                    <li className="channels-list-item">LIVING FOODZ</li>
                    <li className="channels-list-item">Youtube</li>
                </ul>
            </div>
            </div>
            
        </>
    )
}