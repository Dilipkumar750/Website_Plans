import React from "react";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import adobe from "../assets/adobe.png";
import nodejs from "../assets/node.png";
import angularjs from "../assets/angularjs.png";
import dovinci from "../assets/dovinci.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import firebase from "../assets/firebase.png";
import aws from "../assets/aws.png";
import figma from "../assets/figma.png";
import canva from "../assets/canva.jpeg";

const technologies = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "React", logo: react },
  { name: "MongoDB", logo: mongodb },
  { name: "Adobe", logo: adobe },
  { name: "Node.js", logo: nodejs },
  { name: "Angular", logo: angularjs },
  { name: "DaVinci Resolve", logo: dovinci },
  { name: "Python", logo: python },
  { name: "Java", logo: java },
  { name: "Firebase", logo: firebase },
  { name: "AWS", logo: aws },
  { name: "Canva", logo: canva },
  { name: "Figma", logo: figma },
];

const Technologies = () => {
  return (
    <section className="bg-blue-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Technologies We Use</h2>
        <p className="text-gray-600 mt-2">Explore our development stack.</p>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200 flex flex-col items-center justify-center hover:scale-105 transition-transform"
            >
              <img src={tech.logo} alt={tech.name} className="h-16 w-16 object-contain mb-3" />
              <p className="text-lg font-semibold text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;