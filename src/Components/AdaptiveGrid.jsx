import React from "react";
import { Card } from "flowbite-react";
import flex from '../images/flexibility.png'
import vlearn from '../images/virtual-class.png'
import support from '../images/care.png'
import afford from '../images/affordable.png'
import quality from '../images/high-quality.png'
import progress from '../images/tracking.png'
const AdaptiveGrid = () => {
  const adaptive = [
    {
      icon: flex,
      title: "Flexible Learning Environment",
      body: "Enjoy the convenience of learning from anywhere, at any time. Our online educational platform provides a flexible and accessible environment, allowing you to study at your own pace and fit your education around your schedule.",
    },
    {
      icon: vlearn,
      title: "Personalized Learning",
      body: "At Adaptive Learning, we believe that one size doesn't fit all. Our platform is designed to meet your unique learning needs. Whether you're a student, professional, or lifelong learner, we offer tailored courses and resources that adapt to your pace and goals.",
    },
    {
      icon: support,
      title: "Supportive Community",
      body: "Learning can be a social experience too. Our platform fosters a vibrant and inclusive learning community. Connect with fellow learners, instructors, and mentors. Share ideas, ask questions, and gain valuable insights from your peers.",
    },
    {
      icon: afford,
      title: "Affordability",
      body: "Quality education shouldn't break the bank. Adaptive Learning offers competitive pricing and flexible payment options. We're dedicated to making education accessible to everyone.",
    },
    {
      icon: quality,
      title: "Quality Content",
      body: "Our courses are created by experts in their respective fields. We provide a diverse range of up-to-date, high-quality content that's relevant to today's world, ensuring you gain valuable skills and knowledge that matter.",
    },
    {
      icon: progress,
      title: "Track Your Progress",
      body: "Monitor your achievements and progress with ease. Our platform offers comprehensive analytics and reporting, so you can visualize your growth and make data-driven decisions about your learning path.",
    },
  ];
  return (
    <section className="px-20 py-10 bg-green-400">
      <h3 className="font-semibold text-[54px] py-2">
        Why Choose ADAPTIVE LEARNING
      </h3>
      <div className="bg-white rounded-xl shadow-lg px-28 gap-8 py-10 grid grid-cols-3 justify-around ">
        {adaptive.map((adap) => (
          <Card className="shadow-lg">
            <div className="flex justify-center">
              <img src={adap.icon} className="h-[100px] w-[100px]" alt="Flexibility" />
            
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{adap.title}</p>
            </h5>
            {/* <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
              <p>{adap.body}</p>
            </p> */}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AdaptiveGrid;
