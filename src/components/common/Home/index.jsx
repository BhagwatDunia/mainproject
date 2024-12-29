import AboutUs from "@/components/common/AboutUs";
import Feature from "@/components/common/Feature";
import HeroSection from "@/components/common/HeroSection";
import Media from "@/components/common/Media";
import Partner from "@/components/common/Partner";
import Trusted from "@/components/common/Trusted";
import Layout from "@/components/Layout/Layout";
import React from "react";
import Feature1 from "@/assets/images/feature-1.svg";
import Feature2 from "@/assets/images/feature-2.svg";
import Feature3 from "@/assets/images/feature-3.svg";
const HomePage = () => {
  const featureData = [
    {
      title: "Sacred Wisdom",
      description:
        "Explore a curated selection of spiritual books that guide you on a transformative journey of self-discovery, mindfulness, and enlightenment.",
      imageSrc: Feature1,
      altText: "Sacred Wisdom Feature",
    },
    {
      title: "Mindful Living",
      description:
        "Our teachings and practices empower you to cultivate a balanced, peaceful life with a deeper connection to your inner self and the universe.",
      imageSrc: Feature3,
      altText: "Mindful Living Feature",
    },
    {
      title: "Enlightening Blogs",
      description:
        "Dive into our insightful blogs covering topics of spirituality, personal growth, and the path to spiritual awakening. Let every post be a step towards enlightenment.",
      imageSrc: Feature2,
      altText: "Enlightening Blogs Feature",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Satyam ",
      role: "Student at IIT Kharagpur",
      image: "/satyam.jpg",
      testimonial:
        "Bhagwat Dunia has been a game-changer for me. They have every spritual book available in their Stock. I was Searching for a book from very long time But Bhagwat Dunia was able to provide us that book.",
    },
  ];
  return (
    <>
      <HeroSection />
      <Feature featureData={featureData} />

      <Media />
      <AboutUs />
      <Trusted testimonials={testimonials} />
    </>
  );
};

export default HomePage;
