import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';

const People = () => {
  // 测试文字: 人员数据，包含具体姓名和职位
  const people = [
    {
      id: 1,
      name: "Clea von Chamier-Waite",
      position: "Associate Professor",
      keyword: "portrait academic woman professional"
    },
    {
      id: 2,
      name: "Isaac Joseph Clarke",
      position: "PhD Candidate",
      expected: "Expected Summer 2026",
      keyword: "portrait academic man phd"
    },
    {
      id: 3,
      name: "Zhiwan Cheung",
      position: "PhD Candidate",
      expected: "Expected Spring 2026",
      keyword: "portrait academic asian phd"
    },
    {
      id: 4, // Zoe Qi-Jing Li as id 4
      name: "Zoe Qi-Jing Li",
      position: "PhD Candidate",
      keyword: "portrait academic asian woman phd"
    },
    {
      id: 5, // Ary-Yue HUANG as id 5
      name: "Ary-Yue HUANG",
      position: "PhD Candidate",
      keyword: "portrait academic asian phd"
    },
    {
      id: 6,
      name: "Azure Qianwen Zhang",
      position: "PhD Student",
      keyword: "portrait academic asian woman student"
    },
    {
      id: 7,
      name: "Xinyu Ma",
      position: "PhD Student",
      keyword: "portrait academic asian woman student"
    },
    {
      id: 8,
      name: "Xindi Kang",
      position: "PhD Student",
      keyword: "portrait academic asian woman student"
    },
    {
      id: 9,
      name: "Jue Wang",
      position: "PhD Student",
      keyword: "portrait academic asian woman student"
    },
    {
      id: 10,
      name: "Wenjue Yang",
      position: "Research Assistant",
      keyword: "portrait academic asian woman research"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* 测试文字: 页面标题 */}
          <h1 className="text-4xl font-avenir text-center mb-12">People</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {people.map((person, index) => (
              <Link 
                to={`/people/${person.id}`} 
                key={person.id}
                className="block group"
              >
                <div className="aspect-square overflow-hidden rounded-none mb-4">
                  {/* 测试文字: 使用统一的正方形尺寸 */}
                  <img 
                    src={`https://www.weavefox.cn/api/bolt/unsplash_image?keyword=${encodeURIComponent(person.keyword)}&width=400&height=400&random=${person.keyword}_400_400`} 
                    alt={person.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* 测试文字: 人员姓名 */}
                <h3 className="text-xl font-avenir text-center">{person.name}</h3>
                <p className="text-gray-600 text-center">
                  {person.position}
                  {person.expected && (
                    <>
                      <br />
                      {/* 测试文字: 预期毕业时间 */}
                      <span className="text-sm">{person.expected}</span>
                    </>
                  )}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* 测试文字: 返回顶部按钮 */}
      <ScrollToTopButton />
    </div>
  );
};

export default People;