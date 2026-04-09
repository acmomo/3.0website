import React, { useEffect, useRef } from 'react';

const DecorativeParallaxStrip = ({ height = "h-64" }) => {
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
        backgroundRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
      
      if (middleRef.current) {
        middleRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
      
      if (foregroundRef.current) {
        foregroundRef.current.style.transform = `translateY(${scrolled * 0.6}px)`;
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
    <div ref={containerRef} className={`relative w-[calc(100vw+50px)] -ml-[calc(50vw-50%-25px)] ${height} overflow-hidden`}>
      {/* 背景层 - 滚动最慢 */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-[calc(100vw+50px)] h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=abstract+art+background&width=1920&height=600&random=abstract_art_background_1920_600)",
          willChange: "transform"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      {/* 中间层 - 滚动速度中等 */}
      <div 
        ref={middleRef}
        className="absolute inset-0 w-[calc(100vw+50px)] h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=geometric+patterns&width=1920&height=600&random=geometric_patterns_1920_600)",
          willChange: "transform",
          opacity: 0.7
        }}
      ></div>
      
      {/* 前景层 - 滚动最快 */}
      <div 
        ref={foregroundRef}
        className="absolute inset-0 w-[calc(100vw+50px)] h-full bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=artistic+elements&width=800&height=400&random=artistic_elements_800_400)",
          willChange: "transform",
          opacity: 0.8
        }}
      ></div>
    </div>
  );
};

export default DecorativeParallaxStrip;