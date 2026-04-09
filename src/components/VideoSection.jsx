import React from 'react';

const VideoSection = ({ videoUrl, title }) => {
  // 测试文字: 视频展示组件
  return (
    <div className="mb-32">
      {/* 测试文字: 视频标题 */}
      <h3 className="text-2xl font-avenir text-left !mt-[150px] !mb-[24px]">Video Presentation: {title}</h3>
      <div className="w-full aspect-video bg-gray-200 rounded-none flex items-center justify-center">
        <iframe
          src={videoUrl}
          title={`Video Presentation: ${title}`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    </div>);

};

export default VideoSection;