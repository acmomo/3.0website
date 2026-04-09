import React from 'react';

const AboutSection = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* 测试文字: 关于我们标题 */}
      <h2 className="text-3xl font-avenir text-center mb-8">About</h2>
      <div className="bg-white p-8 rounded-none">
        <p className="text-gray-700 text-center">
          The Computational Media and Arts (CMA) Ph.D. program is investigating the transformation of artistic practices informed by emerging technologies, giving rise to new processes and means of expression that advance unique conceptual and societal challenges. We are a community of researchers, artists, designers, theorists, and inventors within a top science and engineering research university who collaborate across disciplines. It is a synergetic environment to develop the creators and scholars of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;