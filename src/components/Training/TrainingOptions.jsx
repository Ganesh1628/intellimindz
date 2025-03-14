import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeIcon from "@mui/icons-material/Home";
import Groups3Icon from "@mui/icons-material/Groups3";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import "./TrainingOptions.css";

const TrainingOptions = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const trainingOptions = [
        {
            title: "Online Training",
            description: "A dedicated coaching and training experience designed for learners who thrive in a personalized setting, this one-on-one, instructor-led training provides a fully tailored curriculum, hands-on exercises, and continuous feedback from an expert mentor. Whether the goal is career advancement, technical skill development, or certification preparation, this training format ensures optimal learning outcomes.",
            icon: <HomeIcon style={{ fontSize: "50px", color: "#e74c3c" }} />,
        },
        {
            title: "Classroom Training",
            description: "This one-to-one training program is designed to provide a highly interactive and immersive learning experience, where an expert instructor delivers personalized instruction, adapts course materials to the learner’s background, and ensures maximum skill development. Whether it’s for professional growth, technical expertise, or personal learning objectives, this customized training approach guarantees an effective and efficient learning journey.",
            icon: <Groups3Icon style={{ fontSize: "50px", color: "#34495e" }} />,
        },
        {
            title: "Corporate Training",
            description: "For companies striving to maintain a competitive edge by investing in the continuous learning and development of their employees, our corporate training team offers comprehensive, high-impact educational programs. Our training approach combines live interactive sessions,and real-world case studies to equip employees with the knowledge and skills necessary to improve efficiency, contribute meaningfully to their organization’s success.",
            icon: <CorporateFareIcon style={{ fontSize: "50px", color: "#f39c12" }} />,
        },
    ];

    return (
        <div className="training-container" ref={ref}>
            <div className="training-cards">
                {trainingOptions.map(({ title, description, icon }, index) => (
                    <motion.div
                        key={title}
                        className="training-card"
                        initial={{ x: -300, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: index * 0.5, ease: "easeOut" }}
                    >
                        {/* Parallelogram Header */}
                        <div className="training-header">
                            <span>{title}</span>
                        </div>

                        {/* Description */}
                        <div className="training-content">{description}</div>

                        {/* Right Icon */}
                        <div className="training-icon">{icon}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TrainingOptions;
