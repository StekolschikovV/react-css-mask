import './App.css';
// import {} from "@ranndev/ui-guide"
import {useTour} from '@reactour/tour'
import Mask from "./Mask"
import {useRef, useState} from "react";

function App() {
    const {setIsOpen} = useTour()

    const [mask, setMask] = useState(false)
    const [r, setR] = useState()
    const ref = useRef()
    const ref2 = useRef()

    return (

        <div className="App">
            <div className="test2" id={"test2"} ref={ref}></div>
            <h3 ref={ref2}>some text</h3>
            <button onClick={() =>{
                setR(ref2)
                setMask(!mask)
            }}>mask2</button>
            <button onClick={() =>{
                setR(ref)
                setMask(!mask)
            }}>mask</button>
            {mask && <Mask maskEl={r}/>}
        </div>
    );
}


export default App;
