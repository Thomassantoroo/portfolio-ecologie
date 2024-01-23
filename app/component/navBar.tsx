'use client';

import styles from './style.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import opacity from './anim';

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={styles.header}>
            <div className={`${styles.bar} flex flex-row items-center`}>
              <p>HELLO</p>
              <p>THOMAS</p>
              <p>SANT</p>
            </div>
        </div>
    )
}

export default Navbar;