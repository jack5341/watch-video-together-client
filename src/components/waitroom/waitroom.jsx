import {useEffect,useState} from 'react'
import {Button} from 'react-bootstrap'

// Components
import BuyMeCoffe from '../../container/buymecoffe/buymecoffe'

// Styles
import './style.css'

export default function WaitRoom(){

    const [roomkey] = useState(window.location + "room/" + Math.random().toString(36).substring(2))

    return (
        <div id="waitroom">
            <BuyMeCoffe/>
            <p className="display-4">
                Watch Video Together 👁
            </p>
            <hr className="bg-dark" />
                <Button variant="primary" size="lg" href={roomkey} className="shadow" block>
                    GO CREATE YOUR PRIVATE ROOM
                </Button>
        </div>
    )
}