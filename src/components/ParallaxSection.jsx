import React, { useEffect, useRef } from 'react';

const ParallaxSection = ({ height = "h-96" }) => {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const middleRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const containerTop = containerRef.current.getBoundingClientRect().top + scrollPosition;
      const scrolled = scrollPosition - containerTop;
      
      // 调整各层的移动速度
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${scrolled * 0.2}px) translateX(-25px)`;
      }
      
      if (middleRef.current) {
        middleRef.current.style.transform = `translateY(${scrolled * 0.4}px) translateX(-25px)`;
      }
      
      if (foregroundRef.current) {
        foregroundRef.current.style.transform = `translateY(${scrolled * 0.6}px) translateX(-25px)`;
      }
    };

    // 初始设置
    handleScroll();
    
    // 添加滚动事件监听器
    window.addEventListener('scroll', handleScroll);
    
    // 清理事件监听器
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-[calc(100%+50px)] -ml-[25px] ${height} overflow-hidden`}>
      {/* 背景层 - 滚动最慢 */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-[calc(100%+50px)] h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=mountain+landscape&width=1920&height=600&random=mountain_landscape_1920_600)",
          willChange: "transform"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      {/* 中间层 - 滚动速度中等 */}
      <div 
        ref={middleRef}
        className="absolute inset-0 w-[calc(100%+50px)] h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=forest+trees&width=1920&height=600&random=forest_trees_1920_600)",
          willChange: "transform",
          opacity: 0.7
        }}
      ></div>
      
      {/* 前景层 - 滚动最快 */}
      <div 
        ref={foregroundRef}
        className="absolute inset-0 w-[calc(100%+50px)] h-full bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=geometric+shapes&width=800&height=400&random=geometric_shapes_800_400)",
          willChange: "transform",
          opacity: 0.8
        }}
      ></div>
      
      {/* 视觉指示器 - 帮助测试视差效果 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <div className="bg-black bg-opacity-50 p-4 rounded-none">
          <h3 className="text-2xl font-bold mb-2">Parallax Effect Test</h3>
          <p className="text-sm">Scroll the page to see the movement difference between layers</p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;