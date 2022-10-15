import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">ABOUT</h5>

        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">Bio</h5>

        <p>Accessibility</p>
        <p>This is a clone site</p>
        <p>This is a Work-in-Progress</p>
        <p>To Becoming</p>
        <p>A Full Stack Developer</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">host</h5>

        <p>aseDesign</p>
        <p>Development</p>
        <p>Design</p>
        <p>Self Learning</p>
        <p>Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">support</h5>

        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>
    </div>
  );
};

export default Footer;
