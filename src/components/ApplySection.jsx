import React from 'react';

const ApplySection = () => {
  // 测试文字: 申请材料列表
  const applicationItems = [
    "Statement of Interest",
    "CV",
    "Portfolio",
    "Research Statement",
    "Writing Sample"
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* 测试文字: 申请标题 */}
      <h2 className="text-3xl font-avenir text-center mb-8 text-red-600">Apply</h2>
      <div className="bg-white p-8 rounded-none">
        <p className="text-gray-700 mb-4">
          For consideration, please send to <a href="mailto:cleavcw@hkust-gz.edu.cn" className="text-red-600 hover:underline">cleavcw@hkust-gz.edu.cn</a>:
        </p>
        
        <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
          {applicationItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        <p className="text-gray-700">
          Follow the link for more on our areas of interest and details on how to apply.
        </p>
        <a 
          href="https://cma.hkust-gz.edu.cn/admissions/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-red-600 hover:underline block mt-2"
        >
          https://cma.hkust-gz.edu.cn/admissions/ {/* 测试文字: 申请链接 */}
        </a>
      </div>
    </div>
  );
};

export default ApplySection;