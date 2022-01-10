import './App.css';
import { useState, useRef } from 'react'
import { useRect } from '@reactour/utils'
import { Mask } from '@reactour/mask'

function App() {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const ref = useRef(null)
    const ref2 = useRef(null)
    const sizes = useRect(ref)
    const sizes2 = useRect(ref2)

    return (

        <div className="App">
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li ref={ref2}>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
            <button onClick={() => setIsOpen2(o => !o)}>
                {isOpen2 ? 'Close' : 'Open'} Mask 2
            </button>
            <button onClick={() => setIsOpen(o => !o)} ref={ref}>
                {isOpen ? 'Close' : 'Open'} Mask
            </button>
            {isOpen ? (
                <>
                    <Mask
                        sizes={sizes}
                        onClick={() => setIsOpen(false)}
                        styles={{
                            // maskWrapper: base => ({ ...base, color, opacity: 0.99 }),
                            // maskArea: base => ({ ...base, rx: 10 }),
                        }}
                    />
                </>
            ) : null}
            {isOpen2 ? (
                <>
                    <h1>22</h1>
                    <Mask
                        sizes={sizes2}
                        onClick={() => setIsOpen2(false)}
                        styles={{
                            maskWrapper: base => ({ ...base, opacity: 0.5 }),
                            maskArea: base => ({ ...base, rx: 10 }),
                        }}
                    />
                </>
            ) : null}
        </div>
    );
}


export default App;
