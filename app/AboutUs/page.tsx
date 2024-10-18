import { Button } from "@/components/ui/button";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Our Vision and Mission
        </h1>
        <p className="mt-6 text-xl max-w-3xl text-slate-600">
          Redefining industry standards through consultation, our innovative
          approach integrates cutting-edge technology with expert insights,
          driving transformative change and setting new benchmarks for
          excellence.
        </p>
        <div className="mt-10">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
