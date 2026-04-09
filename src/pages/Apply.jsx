import React from 'react';
import ScrollToTopButton from '../components/ScrollToTopButton';
import MobileHeader from '../components/MobileHeader';
import DecorativeParallaxStrip from '../components/DecorativeParallaxStrip';

const Apply = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* 测试文字: 移动端头部组件 */}
      <MobileHeader />
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* 测试文字: 关于我们板块 */}
          <div className="mb-16">
            <h2 className="text-3xl font-avenir text-center mb-8">About</h2>
            <div className="bg-white p-8 rounded-none">
              <p className="text-gray-700 text-center">
                The Computational Media and Arts (CMA) Ph.D. program is investigating the transformation of artistic practices informed by emerging technologies, giving rise to new processes and means of expression that advance unique conceptual and societal challenges. We are a community of researchers, artists, designers, theorists, and inventors within a top science and engineering research university who collaborate across disciplines. It is a synergetic environment to develop the creators and scholars of tomorrow.
              </p>
            </div>
          </div>

          {/* 测试文字: 装饰性视差条 */}
          <div className="my-16">
            <DecorativeParallaxStrip height="h-48" />
          </div>

          {/* 测试文字: 研究领域板块 */}
          <div className="mb-16">
            <h2 className="text-3xl font-avenir text-center mb-8">Research Areas</h2>
            <div className="bg-white p-8 rounded-none">
              <p className="text-gray-700 mb-4">
                Our research spans multiple interdisciplinary fields, focusing on the convergence of 
                cinematic arts, scientific visualization, and emerging technologies. We explore how 
                computational methods can enhance narrative structures and create new forms of audience 
                engagement.
              </p>
              <p className="text-gray-700 mb-4">
                Key research areas include immersive storytelling systems, interactive narrative 
                environments, and the application of scientific data visualization techniques to artistic 
                expression. We investigate how virtual and augmented reality technologies can transform 
                traditional cinematic experiences.
              </p>
              <p className="text-gray-700 mb-4">
                Our team also examines the cognitive and perceptual aspects of expanded cinema, studying 
                how different sensory modalities can be integrated to create more compelling and meaningful 
                experiences for audiences.
              </p>
              <p className="text-gray-700 mb-4">
                Collaborative projects with scientific institutions allow us to explore cutting-edge 
                research in fields such as neuroscience, quantum physics, and bioinformatics, translating 
                complex scientific concepts into accessible artistic forms.
              </p>
              <p className="text-gray-700">
                Through these investigations, we aim to develop new theoretical frameworks for understanding 
                the evolving relationship between technology, storytelling, and human perception in 
                contemporary media arts.
              </p>
            </div>
          </div>

          {/* 测试文字: 装饰性视差条 */}
          <div className="my-16">
            <DecorativeParallaxStrip height="h-48" />
          </div>

          {/* 测试文字: 申请信息板块 */}
          <div>
            <h1 className="text-4xl font-avenir text-red-600 mb-8">Apply</h1>
            <div className="bg-white p-8 rounded-none">
              <p className="text-gray-700 mb-4">
                We welcome applications from creative individuals and researchers who are passionate 
                about exploring the intersection of cinema, science, and art. Our program offers 
                unique opportunities for interdisciplinary collaboration and innovation.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you are an artist working with emerging technologies, a scientist interested 
                in creative visualization, or a researcher exploring new forms of media expression, 
                we encourage you to apply for our residency or fellowship programs.
              </p>
              <p className="text-gray-700 mb-4">
                Our application process is designed to identify candidates whose work aligns with 
                our mission of expanding the boundaries of cinematic expression through scientific 
                inquiry and artistic innovation.
              </p>
              <p className="text-gray-700 mb-4">
                We offer both short-term and long-term opportunities for individuals and collaborative 
                teams to develop projects within our supportive and intellectually stimulating environment.
              </p>
              <p className="text-gray-700">
                Please review our current call for applications and submission guidelines before 
                preparing your materials. We look forward to learning about your creative vision 
                and research interests.
              </p>
            </div>
          </div>
          
          {/* 测试文字: 装饰性视差条 */}
          <div className="my-16">
            <DecorativeParallaxStrip height="h-48" />
          </div>
        </div>
      </div>
      {/* 测试文字: 返回顶部按钮 */}
      <ScrollToTopButton />
    </div>
  );
};

export default Apply;