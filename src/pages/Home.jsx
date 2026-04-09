import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ProfessorSection from '../components/ProfessorSection';
import ParallaxSection from '../components/ParallaxSection';
import ProjectsIntro from '../components/ProjectsIntro';
import ProjectShowcase from '../components/ProjectShowcase';
import AboutSection from '../components/AboutSection';
import ResearchSection from '../components/ResearchSection';
import ApplySection from '../components/ApplySection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import DecorativeParallaxStrip from '../components/DecorativeParallaxStrip';

const Home = () => {
  // 测试文字: 示例项目数据用于首页展示
  const featuredProjects = [
    {
      id: 1,
      title: "18th Wenyuan Street",
      author: "Zhiwan Cheung",
      year: "2024",
      medium: "Two Channel Video Installation",
      description: "“18th Wenyuan” involved scanning my grandparents’ home in Guangzhou, China, now replaced by an elementary school, and creating a virtual environment from the scans in Unreal Engine 5, a video-game engine. From certain angles, the digital scans loose perspective accuracy, resulting in abstraction. This digital space represents the memory of a place that no longer exists. Expanding on this idea, I plan to cast physical fragments from these scans, bridging the gap between the ephemeral nature of digital reconstruction and the tangible weight of sculpture.",
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Vector Oscillation Studies",
      author: "Isaac Joseph Clarke",
      year: "2026",
      medium: "Light-sensitive ink on paper",
      description: "Texts generated whilst oscillating control vectors in an llm, combined with drawings, and exposed using light sensitive inks on paper",
      videoUrl: "#"
    },
    {
      id: 3,
      title: "I tell the Moon my secret and the Moon tells me yours",
      author: "Zoe Qi-Jing Li",
      year: "2024",
      medium: "robot arm, video, Moon, light-painting photography, interactive installation",
      description: "The robotic arm repeatedly depicts the waveform of the collected secrets. Only when the Moon appears within its field of view can the waveform of this sentence be successfully captured with a slow shutter speed. That is to say, whether the trace of the waveform can be revealed is determined by the natural environment — only when the Moon is bright and clear in the night sky can this secret possibly be conveyed. The project experiments on the synergic dynamics among uncontrollable natural environments, a precise data-driven robot system and humans, fostering new discourse on their relationships through synergistic visual imagery.",
      videoUrl: "https://vimeo.com/906985010?fl=pl&fe=ti"
    },
    {
      id: 4,
      title: "Drift of the Uncharted",
      author: "Ary-Yue HUANG",
      year: "2024-2025",
      medium: "Custom Programs, Quadruped Robot, edge computer, lidar, computer, projector",
      description: "Drift of the Uncharted is a robotic performance that interweaves climate prediction, real-world landscape scanning, scene reconstruction, game engines, and virtual projection. It features a quadruped robot carrying a projection device, which projects cityscapes submerged by seawater in a dark environment, simulating a future world reshaped by rising sea levels. As the robot moves through the space, it controls the perspective of a virtual camera, guiding the audience through this imaginative environment and inviting them to collectively reflect on the potential consequences of climate change.",
      videoUrl: "https://vimeo.com/1058903108?fl=pl&fe=sh"
    },
    {
      id: 5,
      title: "Thermal Pareidolia",
      author: "Azure Qianwen Zhang",
      year: "2025",
      medium: "Lenticular prints, Video installation",
      description: "“Thermal Pareidolia,” a series of artworks exploring the phenomenon of pattern recognition across thermal and visual spectrums, examining how both human and machine vision systems interpret heat signatures as meaningful forms. The project is initiated from the phenomenon of face pareidolia—the profound human tendency to perceive faces in ambiguous stimuli—to question what constitutes a “face” when viewed by different perceptual systems. This juxtaposition research investigates how thermal imaging equalizes identity across human and non-human boundaries. Drawing from neuroscientific understanding of pareidolia and contemporary art practices that challenge anthropocentric vision, this project demonstrates that thermal signatures dissolve traditional taxonomic boundaries through shared heat patterns and create a universal language that transcends visible perceptions.",
      videoUrl: "#"
    },
    {
      id: 6,
      title: "Becoming Space",
      author: "Xinyu Ma",
      year: "2025",
      medium: "Sculpture",
      description: "Becoming Spaces explores a series of transformations between humans and animals drawing inspiration from Ovid’s Metamorphoses. This work, comprising sculptures and video, reflects on how this transformation reshapes the relationships between humans and animals. Drawing on Deleuze and Guattari’s concept of “becoming-animals,” those myths reveal that these transformations are processes in which individuals amplify their existing powers and identities or gain new capacities through becoming animals. The 3D generative AI models used in the artwork are active participants in the process of transformation, reflecting on the complex relationship as a continuous process of becoming between human and non- human beings that are influenced by digital technologies.",
      videoUrl: "#"
    },
    {
      id: 7,
      title: "The Unseen Realm",
      author: "Jue Wang",
      year: "2026",
      medium: "Interactive Mapping Projection",
      description: "The Unseen Realm draws on ancient mountain cosmologies—practices that use the body to probe invisible orders. It translates a participant’s real-time gaze into forces that perturb a 64,000-particle cosmological N-body simulation and generative geological textures. Through a “generative translation” pipeline, biological signals (fixation, saccade, blink) are mapped onto macro-scale cosmic and geological dynamics. Installed in a quarry as a site-responsive mapping projection, the work frames the mountain as a cosmotechnical device, creating a cybernetic interface where gaze becomes a fluid, co-authored narrative with deep time, dark matter and dark energy.",
      videoUrl: "https://pan.baidu.com/s/1-mlZtS3WRYiO8F3f8pBjqQ?pwd=nqfm"
    },
    {
      id: 8,
      title: "Viu",
      author: "Xindi Kang",
      year: "2025",
      medium: "Video, Mixed Media Installation",
      description: "Viu is an interactive projection artwork inspired by Li (Hlai) cultural heritage, developed during a residency in Hainan. The installation is composed of real footage of life in the Li villages and generated visual overlays based on sketches of Li brocade motifs. The work explores how computational media can reinterpret intangible cultural heritage through audiovisual translation, connecting traditional pattern-making, storytelling, and generative visual systems.",
      videoUrl: "https://photos.app.goo.gl/Katw3TJkRxwbS8Ai6"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 测试文字: 轮播图组件 */}
      <HeroCarousel />
      {/* 测试文字: 教授介绍板块 */}
      <ProfessorSection />
      {/* 测试文字: 视差装饰条 */}
      <ParallaxSection height="h-64" />
      {/* 测试文字: 项目介绍板块 */}
      <ProjectsIntro />
      {/* 测试文字: 视差装饰条 */}
      <ParallaxSection height="h-64" />
      {/* 测试文字: 项目展示板块 */}
      <ProjectShowcase projects={featuredProjects} />
      {/* 测试文字: 视差装饰条 */}
      <ParallaxSection height="h-64" />
      {/* 测试文字: 关于我们板块 */}
      <AboutSection />
      <div className="my-16">
        {/* 测试文字: 装饰性视差条 */}
        <DecorativeParallaxStrip height="h-48" />
      </div>
      {/* 测试文字: 研究领域板块 */}
      <ResearchSection />
      <div className="my-16">
        {/* 测试文字: 装饰性视差条 */}
        <DecorativeParallaxStrip height="h-48" />
      </div>
      {/* 测试文字: 申请信息板块 */}
      <ApplySection />
      <div className="my-16">
        {/* 测试文字: 装饰性视差条 */}
        <DecorativeParallaxStrip height="h-48" />
      </div>
      {/* 测试文字: 返回顶部按钮 */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;