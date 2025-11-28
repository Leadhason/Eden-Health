import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
           <div className="max-w-xl">
            <SectionHeading subtitle="Results" title="Before & After Gallery." />
            <p className="text-gray-600 font-sans mt-[-2rem] mb-8 text-lg">
                Stunning transformations in our Before & After Gallery, showcasing real results and the beauty of healthy hair change.
            </p>
            <Button>View Full Gallery</Button>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Transformation 1 */}
            <div className="relative group overflow-hidden h-[400px]">
                <img src="https://picsum.photos/seed/face1/400/400" alt="Before" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white/50 transition-all duration-500 group-hover:w-0">
                    <img src="https://picsum.photos/seed/face1_old/400/400" alt="After" className="absolute inset-0 w-[200%] max-w-none h-full object-cover grayscale" />
                    <div className="absolute top-4 left-4 bg-white/80 px-2 py-1 text-xs font-bold tracking-widest uppercase">Before</div>
                </div>
                <div className="absolute top-4 right-4 bg-charcoal text-white px-2 py-1 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity delay-200">After</div>
            </div>

             {/* Transformation 2 - Different layout style */}
             <div className="relative group overflow-hidden h-[400px]">
                 <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full relative">
                        <img src="https://picsum.photos/seed/face2/300/400" alt="Before" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="w-1/2 h-full relative">
                        <img src="https://picsum.photos/seed/face2_new/300/400" alt="After" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 text-sm font-serif shadow-lg">
                    Color Correction
                 </div>
            </div>

            {/* Transformation 3 */}
            <div className="relative group overflow-hidden h-[400px] hidden lg:block">
                <img src="https://picsum.photos/seed/face3/400/400" alt="Result" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute bottom-8 left-8">
                     <h4 className="text-white font-serif text-2xl">Texture Release</h4>
                     <p className="text-white/80 text-sm">Natural Finish</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;