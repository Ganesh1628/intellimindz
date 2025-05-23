import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./TrainingOptions.css";
import classroomIcon from "../../assests/images/teachingicon.png";
import onlineIcon from "../../assests/images/onlineicon.png";
import corporateIcon from "../../assests/images/corporateicon.png";
import videoIcon from "../../assests/images/onlinetraingingicon.png";

const TrainingOptions = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const trainingOptions = [
        {
            title: "Classroom Training",
            description: "Receive top-notch training from industry professionals through interactive classroom sessions, complete with real-time projects to enhance your hands-on experience.",
            icon: classroomIcon,
        },
        {
            title: "Online Training",
            description: "Gain in-depth knowledge from seasoned industry experts through comprehensive online training, featuring real-world projects to strengthen your practical skills.",
            icon: onlineIcon,
        },
        {
            title: "Corporate Training",
            description: "Empowering employees with the necessary expertise and skill sets required to confidently and efficiently perform their job roles and excel in their professional careers.",
            icon: corporateIcon,
        },
        {
            title: "Video Based Training",
            description: "Enjoy unlimited access to recorded training sessions, enabling you to revisit lessons and learn at your own pace, with flexibility and convenience—anytime and anywhere.",
            icon: videoIcon,
        },
    ];

    return (
        <div className="training-container" ref={ref} style={{ fontFamily: "DM Sans, sans-serif" }}>
            <h2 className="home-training-title" style={{ fontFamily: "DM Sans, sans-serif" }}>
            <span className="color1">Training</span><span className="color3">Modes</span>
            </h2>
            <div className="training-cards">
                {trainingOptions.map(({ title, description, icon }, index) => (
                    <motion.div
                        key={title}
                        className="training-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.3 }}
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                        <img src={icon} alt={title} className="training-icon" />
                        <h3 className="training-header" style={{ fontFamily: "DM Sans, sans-serif" }}>{title}</h3>
                        <p className="training-content" style={{ fontFamily: "DM Sans, sans-serif" }}>{description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TrainingOptions;
