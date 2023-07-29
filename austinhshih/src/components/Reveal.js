import React, {useRef, useEffect} from 'react'
import {motion, useInView, useAnimation} from 'framer-motion'

export const Reveal = ({children, width, expand}) => {
    width = width? 'fit-content' : '100%'

    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})

    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        } else {
            mainControls.start('hidden')
            slideControls.start('hidden')
        }
    }, [isInView])
    return (
        <div ref={ref} style={{position: 'relative', width, overflow: 'hidden', padding: `${expand? '6px' : '0px'}`}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.25}}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"},
                }}
                initial='hidden'
                animate={slideControls}
                transition={{duration: 0.5, ease: 'easeIn'}}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "var(--textSecondary)",
                    zIndex: 1000
                }}
            />
        </div>
    )
}