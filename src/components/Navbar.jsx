import { useEffect,useState } from "react";
import React from "react";
import {Link } from "react-router-dom";


import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu,close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled]= useState(false);

  useEffect(() => {
    const handleScroll = () =>{
      const scrollTop =window.scrollY;
      if(scrollTop >100) {
        setScrolled(true);
      }  else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
} 

export default Navbar