import React from "react";
import "./style.css";
import Contact from "../contact.js"
export default function App() {
  return (
    <section id="intro">
  <p className="name" >Hi, my name is <span >Omorodion Fortune.</span></p>
  <h2>I develop, design the front end of websites, user experiences, user interfaces, digital experiences, etc.</h2>
  <p>I'm a developer, a designer specializing in HTML, CSS, and JavaScript, user experience, your tech stack, etc.</p>
  <p>Currently, <a href="https://github.com/fortzy05" target="_blank">Github</a>
  </p> <p>I'm working at XYZ Corp, completing the XYZ Bootcamp, making a career switch from X to Y, etc.</p>
  <Contact/>
</section>
);

}
