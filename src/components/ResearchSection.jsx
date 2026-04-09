import React from 'react';

const ResearchSection = () => {
  // 测试文字: 研究领域列表
  const researchAreas = [
    "Science-Art as Media-specific Practice",
    "Data Poetics",
    "Planetary Ecology",
    "Spatial Cinema/ Immersive Cinema, including:",
    "XR/VR",
    "Experimental Cinema"
  ];

  // 测试文字: 子研究领域列表
  const subAreas = [
    "360°-cinema, Fulldome",
    "Multi-channel Video Installation",
    "Alternative and Emerging Screen Technologies",
    "Embodied Form and Somatic Interfaces"
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* 测试文字: 研究领域标题 */}
      <h2 className="text-3xl font-avenir text-center mb-8">Research Areas</h2>
      <div className="bg-white p-8 rounded-none">
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {researchAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
        
        <ul className="list-disc pl-10 mt-2 space-y-1 text-gray-700">
          {subAreas.slice(0, 3).map((subArea, index) => (
            <li key={index}>{subArea}</li>
          ))}
        </ul>
        
        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
          {subAreas.slice(3).map((subArea, index) => (
            <li key={index+3}>{subArea}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResearchSection;