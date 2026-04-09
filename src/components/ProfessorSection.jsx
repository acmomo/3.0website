import React from 'react';

const ProfessorSection = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Professor image - 3/10 width on desktop */}
        <div className="md:w-3/10 flex flex-col items-start">
          <div className="w-full aspect-[3/4] overflow-hidden rounded-none">
            <img
              src="https://www.weavefox.cn/api/bolt/unsplash_image?keyword=professor+portrait&width=600&height=800&random=professor_portrait_600_800"
              alt="Professor Clea von Chamier-Waite"
              className="w-full h-full object-cover" />

          </div>
          <h3 className="text-2xl font-avenir mt-4">Prof. Clea von Chamier-Waite</h3>
        </div>
        
        {/* Professor description - 7/10 width on desktop */}
        <div className="md:w-7/10">
          <p className="text-gray-700 !mt-[200px] !mb-[16px]">
            The Expanded Cinema and Science-Art Group, led by Prof. Clea von Chamier-Waite, is a team of creative, interdisciplinary researcher-practitioners in the areas of media art, embodied expanded/immersive cinema, and science-art. We engage in advanced artistic research that is interdisciplinary, technologically innovative, and both practice-based and theoretical, with research questions that critically engage the synergies between the arts, sciences, immersive moving images, and technological innovation as a means of creative expression.
          

          </p>
          



          



          



          



        </div>
      </div>
    </div>);

};

export default ProfessorSection;