// Animation Test Component
// Add this to your homepage temporarily to test if animations work

"use client";

import { motion } from "framer-motion";

export default function AnimationTest() {
    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            background: 'red',
            padding: '20px',
            borderRadius: '10px'
        }}>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
                style={{
                    width: '50px',
                    height: '50px',
                    background: 'yellow',
                    borderRadius: '50%'
                }}
            />
            <p style={{ color: 'white', marginTop: '10px' }}>
                If you see a spinning yellow circle, animations work!
            </p>
        </div>
    );
}
