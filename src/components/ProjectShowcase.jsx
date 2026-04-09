import React from 'react';

const ProjectShowcase = ({ projects = [] }) => {
  // 测试文字: 根据索引确定布局以实现S型模式
  const getLayoutClass = (index) => {
    const patterns = ['left', 'center', 'right', 'center', 'left'];
    return patterns[index % patterns.length];
  };

  // 如果projects为undefined或不是数组，则使用空数组
  const validProjects = Array.isArray(projects) ? projects : [];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-32">
          {validProjects.map((project, index) => {
            const layout = getLayoutClass(index);
            
            return (
              <div
                key={project.id}
                className={`flex flex-col items-center gap-8 ${project.id === 5 ? '-mt-16' : ''}`}>
                
                {/* 移动端布局 - 始终左对齐以保持一致性 */}
                <div className="md:hidden w-full flex flex-col items-start gap-8">
                  <div className="w-full">
                    {/* 测试文字: 项目标题 */}
                    <h3 className="text-3xl font-avenir mb-2 text-left">{project.title}</h3>
                    {/* 测试文字: 项目作者、媒介和年份 */}
                    <p className="text-gray-600 mb-6 text-left">{project.author} | {project.medium} | {project.year}</p>
                    {/* 测试文字: 项目描述 */}
                    <p className="text-gray-700 leading-relaxed text-left">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-full aspect-square overflow-hidden rounded-none">
                    {/* 测试文字: 项目图片 */}
                    <img
                    src={`https://www.weavefox.cn/api/bolt/unsplash_image?keyword=${encodeURIComponent(project.title)}&width=600&height=600&random=${project.title}_600_600`}
                    alt={project.title}
                    className="w-full h-full object-cover" />

                  </div>
                  {/* 首页不显示视频板块 */}
                </div>

                {/* 桌面端布局 - S型模式 */}
                <div className="hidden md:flex md:flex-col md:items-center w-full">
                  {layout === 'left' && (
                    <div className="w-full flex flex-row items-start gap-16">
                      <div className="w-1/2 aspect-square overflow-hidden rounded-none">
                        {/* 测试文字: 项目图片 */}
                        <img
                          src={`https://www.weavefox.cn/api/bolt/unsplash_image?keyword=${encodeURIComponent(project.title)}&width=600&height=600&random=${project.title}_600_600`}
                          alt={project.title}
                          className="w-full h-full object-cover" />
                      </div>
                      <div className="w-1/2 flex flex-col justify-end pt-16">
                        {/* 测试文字: 项目标题 */}
                        <h3 className="text-3xl font-avenir mb-2 text-left">{project.title}</h3>
                        {/* 测试文字: 项目作者、媒介和年份 */}
                        <p className="text-gray-600 mb-6 text-left">{project.author} | {project.medium} | {project.year}</p>
                        {/* 测试文字: 项目描述 */}
                        <p className="text-gray-700 leading-relaxed text-left">
                          {project.description}
                        </p>
                        {/* 首页不显示视频板块 */}
                      </div>
                    </div>
                  )}
                  
                  {layout === 'center' && (
                    <div className="w-full flex flex-col items-center gap-12">
                      <div className="w-full aspect-square overflow-hidden rounded-none">
                        {/* 测试文字: 项目图片 */}
                        <img
                          src={`https://www.weavefox.cn/api/bolt/unsplash_image?keyword=${encodeURIComponent(project.title)}&width=600&height=600&random=${project.title}_600_600`}
                          alt={project.title}
                          className="w-full h-full object-cover" />
                      </div>
                      <div className="w-full text-center max-w-2xl">
                        {/* 测试文字: 项目标题 */}
                        <h3 className="text-3xl font-avenir mb-2">{project.title}</h3>
                        {/* 测试文字: 项目作者、媒介和年份 */}
                        <p className="text-gray-600 mb-6">{project.author} | {project.medium} | {project.year}</p>
                        {/* 测试文字: 项目描述 */}
                        <p className="text-gray-700 leading-relaxed">
                          {project.description}
                        </p>
                        {/* 首页不显示视频板块 */}
                      </div>
                    </div>
                  )}
                  
                  {layout === 'right' && (
                    <div className="w-full flex flex-row items-start gap-16">
                      <div className="w-1/2 flex flex-col justify-end pt-16">
                        {/* 测试文字: 项目标题 */}
                        <h3 className="text-3xl font-avenir mb-2 text-left">{project.title}</h3>
                        {/* 测试文字: 项目作者、媒介和年份 */}
                        <p className="text-gray-600 mb-6 text-left">{project.author} | {project.medium} | {project.year}</p>
                        {/* 测试文字: 项目描述 */}
                        <p className="text-gray-700 leading-relaxed text-left">
                          {project.description}
                        </p>
                        {/* 首页不显示视频板块 */}
                      </div>
                      <div className="w-1/2 aspect-square overflow-hidden rounded-none">
                        {/* 测试文字: 项目图片 */}
                        <img
                          src={`https://www.weavefox.cn/api/bolt/unsplash_image?keyword=${encodeURIComponent(project.title)}&width=600&height=600&random=${project.title}_600_600`}
                          alt={project.title}
                          className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                </div>

              </div>);

          })}
        </div>
      </div>
    </div>);

};

export default ProjectShowcase;