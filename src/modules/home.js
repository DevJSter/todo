import React from "react";
import { ModeToggle } from "@/components/toggleTheme";
import { useEffect } from "react";

const Home = () => {
    // useEffect(() => {
    //   const obj = { name: "John", age: 30, city: "New York" };
    //   localStorage.setItem("user", JSON.stringify(obj));
    //   console.log(localStorage.getItem("user"));
    
    // }, [])
    
  return (
    <div className="h-screen">
      <ModeToggle />
    </div>
  );
};

export default Home;
