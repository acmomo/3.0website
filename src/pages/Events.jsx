import React from 'react';
import ScrollToTopButton from '../components/ScrollToTopButton';
import MobileHeader from '../components/MobileHeader';

const Events = () => {
  // 测试文字: 2025年9月至12月活动数据
  const events = [
    {
      id: 1,
      title: "EVENT SEQUENCE (2025 Sep-Dec)",
      isHeader: true
    },
    {
      id: 2,
      eventName: "Bay Area Art and Technology Triennial",
      exhibition: "Bay Area Art and Technology Triennial",
      location: "(Location not provided)",
      project: "Drift of the Uncharted",
      type: "group exhibition",
      participant: "Ary-Yue HUANG"
    },
    {
      id: 3,
      eventName: "Ars Electronica Campus",
      location: "(Location not provided)",
      project: "Drift of the Uncharted",
      type: "group exhibition",
      participant: "Ary-Yue HUANG"
    },
    {
      id: 4,
      eventName: "HONGKONG AI Art Exhibition",
      location: "(Location not provided)",
      project: "Drift of the Uncharted",
      type: "group exhibition",
      participant: "Ary-Yue HUANG"
    },
    {
      id: 5,
      eventName: "Care in the Code",
      location: "Banktown Arts Center, Australia",
      project: "Comb Machine: Almost Intimate 2025",
      type: "group exhibition",
      participant: "Zoe Li"
    },
    {
      id: 6,
      eventName: "#24.ART_EmMeio#17",
      location: "Museo Nacional Du Repúlica in Brazil",
      project: "Thermal Pareidolia",
      description: "Invited to exhibit in EmMeio art and technology conference",
      participant: "Azure Zhang"
    },
    {
      id: 7,
      eventName: "Cross Campus Exhibition",
      location: "(Location not provided)",
      project: "Thermal Pareidolia",
      type: "Artwork exhibition",
      participant: "Azure Zhang"
    },
    {
      id: 8,
      eventName: "Vinci 2025",
      location: "(Location not provided)",
      project: "Poetic Symbiosis",
      type: "conference exhibition",
      participant: "Jue Wang"
    },
    {
      id: 9,
      eventName: "2nd Cross Campus Exhibition HKUST",
      location: "(Location not provided)",
      project: "Poetic Symbiosis",
      type: "Artwork exhibition",
      participant: "Jue Wang"
    },
    {
      id: 10,
      eventName: "The 4th GBA Let's Salon!",
      location: "The Qi Ming School, New Who Art Village, Shenzhen, China",
      project: "Dong Xuan",
      description: "Group exhibition of artist from the Greater Bay Area",
      participant: "Zhiwan Cheung"
    },
    {
      id: 11,
      eventName: "Cybernetic Sensorium",
      location: "H. F. Johnson Gallery of Art, Kenosha, WI, USA",
      project: "Dong Xuan",
      type: "Solo Exhibition",
      participant: "Zhiwan Cheung"
    },
    {
      id: 12,
      eventName: "IJCAI - International Joint Conference on Artificial Intelligence Art Gallery",
      location: "(Location not provided)",
      project: "Fides Machina, an LLM-Driven Interactive Narrative",
      type: "Art Gallery",
      participants: ["Xindi Kang (^)", "Clea von Chamier-Waite", "David Kei Man Yip (*)"]
    },
    {
      id: 13,
      eventName: "China·Hangzhou International Biennale of Art and Technology",
      location: "Yuhang Art Museum",
      project: "Iceberg Cycle (Ice-Time)",
      description: "International Art Exhibition",
      participant: "Clea T. Waite",
      link: "https://en.caa.edu.cn/news/1274.html"
    },
    {
      id: 14,
      eventName: "aDevantgarde #18",
      location: "(Location not provided)",
      project: "Schönheit",
      description: "aDevantgarde #18, Music-Theater Performance",
      participants: ["Clea T. Waite", "Markus Muench"],
      link: "https://adevantgarde.de/allgemein/adevantgarde-18"
    },
    {
      id: 15,
      eventName: "Siggraph Asia HONGKONG 2025",
      location: "(Location not provided)",
      project: "DRIFT OF THE UNCHARTED: A Speculative Fiction About Rising Sea-Level Landscapes Through Robotic Performance",
      award: "(Award not provided)",
      participants: ["Ary-Yue Huang^", "QingQIn (CAA)", "Wenzong Ma", "Bingyuan Wang", "Clea von Chamier-Waite()"],
      link: "https://dl.acm.org/doi/10.1145/3757369.3767598"
    },
    {
      id: 16,
      eventName: "Ars Electronica Expanded 2025",
      location: "(Location not provided)",
      project: "Moon vs. Live-Streaming Moon: Navigating the Challenges of Presenting Post-Anthropocentric Art in Museums",
      award: "(Award not provided)",
      participants: ["Zoe Qi-Jing Li(^)", "Wenzong Ma", "YuFan Li", "Varvara Guljajeva ()"],
      link: "https://dl.acm.org/doi/full/10.1145/3749893.3749958"
    },
    {
      id: 17,
      eventName: "VINCI 2025 18th International Symposium on Visual Information Communication and Interaction",
      location: "(Location not provided)",
      project: "Exploring Li Brocade Cultural Heritage Through Computational Media Art",
      award: "(Award not provided)",
      participants: ["Xindi Kang(^)", "Isaac Joseph Clarke(^)", "David Kei Man Yip", "Clea von Chamier-Waite()"],
      link: "https://dl.acm.org/doi/10.1145/3769534.3769551"
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* 测试文字: 移动端头部组件 */}
      <MobileHeader />
      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* 测试文字: 页面标题 */}
        <h1 className="text-4xl font-avenir text-center mb-12">Events</h1>
        
        <div className="mb-16">
          <div className="space-y-8">
            {events.map((event) => (
              <div key={event.id} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                {event.isHeader ? (
                  // 测试文字: 活动序列标题
                  <h2 className="text-2xl font-avenir font-bold text-red-600 mb-6">{event.title}</h2>
                ) : (
                  <div className="space-y-3">
                    {/* 测试文字: 活动名称 */}
                    <h3 className="text-xl font-avenir font-semibold">{event.eventName}</h3>
                    <p className="text-gray-700">{event.location}</p>
                    {/* 测试文字: 项目名称 */}
                    <p className="font-medium">"{event.project}"</p>
                    {event.description && <p className="text-gray-600">{event.description}</p>}
                    {event.type && <p className="text-gray-600">{event.type}</p>}
                    {event.participant && <p className="text-gray-800 font-medium">{event.participant}</p>}
                    {event.participants && (
                      <div className="text-gray-800 font-medium">
                        <p>{event.participants.join(', ')}</p>
                      </div>
                    )}
                    {event.award && <p className="text-gray-600">{event.award}</p>}
                    {event.link && (
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {/* 测试文字: 查看详情链接 */}
                        View Details
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-gray-500">
            {/* 测试文字: 作者标识说明 */}
            Note: Specify first author (^), corresponding author (*), and differentiate between internal/external collaborators.
          </div>
        </div>
      </div>
      {/* 测试文字: 返回顶部按钮 */}
      <ScrollToTopButton />
    </div>
  );
};

export default Events;