import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1>This is aboust us page</h1>
      <Outlet />
    </div>
  );
};

export default About;
