import './App.css';
import {useEffect, useRef, useState} from 'react'
import {useRect} from '@reactour/utils'
import {Mask} from '@reactour/mask'
import {AnimatePresence, motion} from 'framer-motion'
// import {useIntersectionObserver} from './hooks.js'
import {Popover} from '@reactour/popover'

function App() {

    const [isOpen, setIsOpen] = useState(false)
    const [updater, setUpdater] = useState([])
    const ref = useRef(null)
    const ref2 = useRef(null)
    const sizes = useRect(ref2, updater)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setUpdater([])
        })
        return () => {
            window.removeEventListener('scroll', () => {
                setUpdater([])
            })
        }
    }, [setUpdater])

    const wrapperRef = useRef(null)
    // const entry = useIntersectionObserver(ref, {})
    // const isVisible = entry && !!entry.isIntersecting

    return (

        <div className="App">
            ;
            <div ref={wrapperRef}>
                <button onClick={() => setIsOpen(o => !o)}>
                    {isOpen ? 'Hide' : 'Show'} Popover
                </button>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat
                    quam eu mauris euismod imperdiet. Nullam elementum fermentum neque a
                    placerat. Vivamus sed dui nisi. Phasellus vel dolor interdum, accumsan eros
                    ut, rutrum dolor. Etiam in leo urna. Vestibulum maximus vitae urna at
                    congue. Vivamus lectus nisi, pellentesque at orci a, tempor lobortis orci.{' '}
                    <span ref={ref} style={{color: '#5ae'}}>
      Praesent non lorem erat.
    </span>{' '}
                    Ut augue massa, aliquam in bibendum sed, euismod vitae magna. Nulla sit amet
                    sodales augue. Curabitur in nulla in magna luctus porta et sit amet dolor.
                    Pellentesque a magna enim. Pellentesque malesuada egestas urna, et pulvinar
                    lorem viverra suscipit. Duis sit amet mauris ante. Fusce at ante nunc.
                    Maecenas ut leo eu erat porta fermentum.
                </p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p  ref={ref2} >11</p>
                <AnimatePresence>
                    {isOpen ? (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            style={{position: 'relative', zIndex: 99999}}
                        >
                            <Mask
                                sizes={sizes}
                                styles={{maskWrapper: base => ({...base, zIndex: 99999})}}
                                onClick={() => {
                                    setIsOpen(false)
                                }}
                            />
                            <Popover sizes={sizes} className={"pop-up"}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                    volutpat quam eu mauris euismod imperdiet.
                                </p>
                                <button>Next</button>
                            </Popover>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    );
}


export default App;
