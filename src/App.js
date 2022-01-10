import './App.css';
import {useEffect, useRef, useState} from 'react'
import {useRect} from '@reactour/utils'
import {Mask} from '@reactour/mask'
import {AnimatePresence, motion} from 'framer-motion'
// import {useIntersectionObserver} from './hooks.js'
import {Popover} from '@reactour/popover'

function App() {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [updater, setUpdater] = useState([])
    const ref = useRef(null)
    const ref2 = useRef(null)
    const sizes = useRect(ref, updater)
    const sizes2 = useRect(ref2, updater)

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
            <div >
                <button onClick={() => setIsOpen(o => !o)}>
                    {isOpen ? 'Hide' : 'Show'} Popover
                </button>

                <p ref={ref}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat
                    quam eu mauris euismod imperdiet. Nullam elementum fermentum neque a
                    placerat. Vivamus sed dui nisi. Phasellus vel dolor interdum, accumsan eros
                    ut, rutrum dolor. Etiam in leo urna. Vestibulum maximus vitae urna at
                    congue. Vivamus lectus nisi, pellentesque at orci a, tempor lobortis orci.{' '}

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

                            />
                            <Popover sizes={sizes} className={"pop-up"}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                    volutpat quam eu mauris euismod imperdiet.
                                </p>
                                <button    onClick={() => {
                                    setIsOpen(o => !o)

                                    // setTimeout(() => {
                                        setIsOpen2(o => !o)
                                        console.log(123)
                                    // }, 2000)

                                }}>Next</button>
                            </Popover>
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <AnimatePresence>
                    {isOpen2 ? (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            style={{position: 'relative', zIndex: 99999}}
                        >
                            <Mask
                                sizes={sizes2}
                                styles={{maskWrapper: base => ({...base, zIndex: 99999})}}

                            />
                            <Popover sizes={sizes2} className={"pop-up"}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                    volutpat quam eu mauris euismod imperdiet.
                                </p>
                                <button    onClick={() => {
                                    setIsOpen2(o => !o)
                                    console.log(123)
                                }}>Next</button>
                            </Popover>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </div>
    );
}


export default App;
