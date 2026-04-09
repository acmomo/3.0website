import React from 'react';
import { ExternalLink } from 'lucide-react';
import ScrollToTopButton from '../components/ScrollToTopButton';
import MobileHeader from '../components/MobileHeader';

const Projects = () => {
  // 测试文字: 展览数据
  const exhibitions = [
  {
    id: 1,
    title: "Bay Area Art and Technology Triennial",
    subtitle: "Bay Area Art and Technology Triennial",
    projectName: "Drift of the Uncharted",
    type: "group exhibition",
    author: "Ary-Yue HUANG",
    year: "2025"
  },
  {
    id: 2,
    title: "Ars Electronica Campus",
    projectName: "Drift of the Uncharted",
    type: "group exhibition",
    author: "Ary-Yue HUANG",
    year: "2025"
  },
  {
    id: 3,
    title: "HONGKONG AI Art Exhibition",
    projectName: "Drift of the Uncharted",
    type: "group exhibition",
    author: "Ary-Yue HUANG",
    year: "2025"
  },
  {
    id: 4,
    title: "Care in the Code",
    subtitle: "Banktown Arts Center, Australia",
    projectName: "Comb Machine: Almost Intimate 2025",
    type: "group exhibition",
    author: "Zoe Li",
    year: "2025"
  },
  {
    id: 5,
    title: "#24.ART_EmMeio#17",
    projectName: "Thermal Pareidolia",
    description: "Invited to exhibit in EmMeio art and technology conference in Museo Nacional Du Repúlica in Brazil",
    author: "Azure Zhang",
    year: "2025"
  },
  {
    id: 6,
    title: "Cross Campus Exhibition",
    projectName: "Thermal Pareidolia",
    type: "Artwork exhibition",
    author: "Azure Zhang",
    year: "2025"
  },
  {
    id: 7,
    title: "Vinci 2025",
    projectName: "Poetic Symbiosis",
    type: "conference exhibition",
    author: "Jue Wang",
    year: "2025"
  },
  {
    id: 8,
    title: "2nd Cross Campus Exhibition HKUST",
    projectName: "Poetic Symbiosis",
    type: "Artwork exhibition",
    author: "Jue Wang",
    year: "2025"
  },
  {
    id: 9,
    title: "The 4th GBA Let's Salon!",
    subtitle: "The Qi Ming School, New Who Art Village, Shenzhen, China",
    projectName: "Group exhibition of artist from the Greater Bay Area",
    author: "Dong Xuan",
    year: "2025"
  },
  {
    id: 10,
    title: "Cybernetic Sensorium",
    subtitle: "H. F. Johnson Gallery of Art, Kenosha, WI, USA",
    projectName: "Solo Exhibition",
    author: "Zhiwan Cheung",
    year: "2025"
  },
  {
    id: 11,
    title: "IJCAI - International Joint Conference on Artificial Intelligence Art Gallery",
    projectName: "Fides Machina: an LLM-Driven Interactive Narrative",
    type: "Art Gallery",
    authors: "Xindi Kang (^), Clea von Chamier-Waite, David Kei Man Yip(*)",
    year: "2025"
  }];


  // 测试文字: 出版物数据
  const publications = [
  {
    id: 1,
    title: "DRIFT OF THE UNCHARTED: A Speculative Fiction About Rising Sea-Level Landscapes Through Robotic Performance",
    conference: "Siggraph Asia HONGKONG, 2025",
    link: "https://dl.acm.org/doi/10.1145/3757369.3767598",
    authors: "Ary-Yue Huang^, QingQIn (CAA), Wenzong Ma, Bingyuan Wang, Clea von Chamier-Waite(*)",
    year: "2025"
  },
  {
    id: 2,
    title: "Moon vs. Live-Streaming Moon: Navigating the Challenges of Presenting Post-Anthropocentric Art in Museums",
    conference: "Ars Electronica Expanded, 2025",
    link: "https://dl.acm.org/doi/full/10.1145/3749893.3749958",
    authors: "Zoe Qi-Jing Li(^), Wenzong Ma, YuFan Li, Varvara Guljajeva (*)",
    year: "2025"
  },
  {
    id: 3,
    title: "Exploring Li Brocade Cultural Heritage Through Computational Media Art",
    conference: "VINCI 2025 18th International Symposium on Visual Information Communication and Interaction, 2025",
    link: "https://dl.acm.org/doi/10.1145/3769534.3769551",
    authors: "Xindi Kang(^), Isaac Joseph Clarke(^), David Kei Man Yip, Clea von Chamier-Waite(*)",
    year: "2025"
  },
  {
    id: 4,
    title: "On Creative Research: the lab as gallery / the gallery as lab",
    type: "book chapter",
    authors: "Deborah Turnbull Tillman(1) and Zoe Qi-jing Li(2)",
    year: "(Year?), (Link?)"
  }];


  const renderExhibitionItem = (item) => {
    return (
      <div key={item.id} className="mb-8 pb-8 border-b border-gray-200">
        {/* 测试文字: 展览标题 */}
        <h3 className="text-xl font-avenir text-black mb-2">{item.title}</h3>
        {item.subtitle && <p className="text-black mb-2">{item.subtitle}</p>}
        <p className="text-black">
          {item.projectName}, {item.type ? `${item.type}, ` : ''}{item.author || item.authors}, {item.year}
        </p>
        {item.description && <p className="text-black mt-2 leading-relaxed">{item.description}</p>}
      </div>);

  };

  const renderPublicationItem = (item) => {
    return (
      <div key={item.id} className="mb-8 pb-8 border-b border-gray-200">
        {/* 测试文字: 出版物标题 */}
        <h3 className="text-xl font-avenir text-black mb-2">{item.title}</h3>
        {item.conference && <p className="text-black mb-2">{item.conference}</p>}
        {item.link &&
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mb-2 flex items-center hover:text-blue-800 transition-colors">

            {item.link}
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>}

        <p className="text-black">
          {item.authors}
        </p>
        {item.projectName &&
        <p className="text-black mt-2">
            {item.projectName}, {item.type ? `${item.type}, ` : ''}{item.author}
          </p>}

        {item.type === "book chapter" &&
        <p className="text-black mt-2">
            {item.type}
          </p>}

      </div>);

  };

  return (
    <div className="pt-20 min-h-screen">
      {/* 测试文字: 移动端头部组件 */}
      <MobileHeader />
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24">
            {/* 测试文字: 展览标题 */}
            <h2 className="text-3xl font-avenir text-red-600 mb-12 text-center">Exhibitions</h2>
            <div>
              {exhibitions.map((exhibition) => renderExhibitionItem(exhibition))}
            </div>
          </div>
          
          <div>
            {/* 测试文字: 出版物标题 */}
            <h2 className="text-3xl font-avenir text-red-600 mb-12 text-center">Publications</h2>
            <div>
              {publications.map((publication) => renderPublicationItem(publication))}
            </div>
          </div>
        </div>
      </div>
      {/* 测试文字: 返回顶部按钮 */}
      <ScrollToTopButton />
    </div>);

};

export default Projects;