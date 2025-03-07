import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./TrainingOptions.css";

const TrainingOptions = () => {
    const [key, setKey] = useState(0); // Force re-render to restart animation

    useEffect(() => {
        const interval = setInterval(() => {
            setKey((prevKey) => prevKey + 1); // Change key to restart animation immediately
        }, 11000); // 3s animation + 8s hold

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="training-container" key={key}> {/* Key forces full rerender */}
            {["Online Training", "Classroom Training", "Corporate Training"].map(
                (title, index) => (
                    <motion.div
                        key={title + key} // Unique key forces fresh animation
                        className="training-card"
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 1.2,
                            ease: "easeOut",
                        }}
                    >
                        {/* Header Animation */}
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 1.2 + 0.4 }}
                        >
                            {title}
                        </motion.h2>

                        {/* Divider Animation */}
                        <motion.div
                            className="divider"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.5, delay: index * 1.2 + 0.6 }}
                        ></motion.div>

                        {/* Content Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 1.2 + 0.8 }}
                        >
                            {index === 0 && (
                                <ul>
                                    <p>Our training programs include personalized one-on-one sessions led by an instructor, ensuring tailored guidance. For those who prefer collaborative learning, we offer group training sessions conducted by an experienced instructor in a structured environment.</p>
                                </ul>
                            )}
                            {index === 1 && (
                                <ul>
                                    <p>Our training programs cater to different learning preferences, offering one-on-one training led by an instructor for personalized guidance and support</p>
                                </ul>
                            )}
                            {index === 2 && (
                                <>
                                    <p>If you're looking to train a group of employees, our Corporate Training Team is here to provide expert-led sessions tailored to your organization's needs, ensuring the highest quality learning experience.</p>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )
            )}
        </div>
    );
};

export default TrainingOptions;
