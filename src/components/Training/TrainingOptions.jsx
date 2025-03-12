import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeIcon from "@mui/icons-material/Home";
import Groups3Icon from "@mui/icons-material/Groups3";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import "animate.css";
import "./TrainingOptions.css";

const TrainingOptions = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const trainingOptions = [
        {
            title: "Online Training",
            description: "A dedicated coaching and training experience designed for learners who thrive in a personalized setting, this one-on-one, instructor-led training provides a fully tailored curriculum, hands-on exercises, and continuous feedback from an expert mentor. Whether the goal is career advancement, technical skill development, or certification preparation, this training format ensures optimal learning outcomes.",
            icon: <HomeIcon style={{ fontSize: "56px", color: "#e74c3c" }} />,
            bgColor: "#e74c3c",
        },
        {
            title: "Classroom Training",
            description: "This one-to-one training program is designed to provide a highly interactive and immersive learning experience, where an expert instructor delivers personalized instruction, adapts course materials to the learner’s background, and ensures maximum skill development. Whether it’s for professional growth, technical expertise, or personal learning objectives, this customized training approach guarantees an effective and efficient learning journey.",
            icon: <Groups3Icon style={{ fontSize: "56px", color: "#34495e" }} />,
            bgColor: "#34495e",
        },
        {
            title: "Corporate Training",
            description: "For companies striving to maintain a competitive edge by investing in the continuous learning and development of their employees, our corporate training team offers comprehensive, high-impact educational programs. Our training approach combines live interactive sessions, self-paced learning modules, and real-world case studies to equip employees with the knowledge and skills necessary to improve efficiency, enhance collaboration, and contribute meaningfully to their organization’s success.",
            icon: <CorporateFareIcon style={{ fontSize: "56px", color: "#f39c12" }} />,
            bgColor: "#f39c12",
        },
    ];

    return (
        <div className="training-container" ref={ref}>
            <div className="trainingmode_title">
                <div id="trainingmode_title_div">
                    <h1>Choose the Best Learning Mode for You</h1>
                </div>
            </div>
            <div className="training-cards">
                {trainingOptions.map(({ title, description, icon, bgColor }, index) => (
                    <motion.div
                        key={title}
                        className="training-card"
                        initial={{ x: -300, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.5, ease: "easeOut" }}
                    >
                        {/* Header */}
                        <div className="training-header" style={{ backgroundColor: bgColor }}>
                            <h2>{title}</h2>
                        </div>

                        {/* Description */}
                        <div className="training-content">
                            <p>{description}</p>
                        </div>

                        {/* Icon */}
                        <div className="training-icon">{icon}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TrainingOptions;