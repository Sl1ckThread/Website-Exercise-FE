import React from 'react';
import { useImages } from '../../assets/imageLoader';
import ExticleList from '../../assets/exticle';
import { useNavigate } from 'react-router-dom';

function ExticleAll(): JSX.Element {
  const images = useImages("./exticle/images", ExticleList);
  const height = 200; // Example height in pixels
  const navigate = useNavigate();
  const fixedWidth = 250; // Fixed width for each article in pixels

  const handleArticleClick = (articleName: string) => {
    navigate(`/exticle/${articleName}`); // Navigate to article route with articleName as param
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-poppins skew-x-[-5deg] text-2xl font-semibold text-white mt-10">All Articles</h1>
        <div className='flex flex-wrap justify-start py-2'>
            {ExticleList.map((exticle, index) => (
            <div className='bg-[#527182] p-2 rounded-lg transition-all transform hover:scale-105 mr-auto mb-5' 
                key={index} 
                style={{
                width: `${fixedWidth}px`, // Fixed width for each article
                height: 'auto',
                }}
                onClick={() => handleArticleClick(exticle.text)}>
                <div className="mx-auto" style={{
                height: `${height}px`,
                position: 'relative',
                overflow: 'hidden',
                }}>
                <img className="rounded-xl" src={images[exticle.image] || ''} alt={exticle.title} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                    userSelect: 'none'
                }} />
                </div>
                <h2 className='mx-auto font-bold text-white font-poppins text-xl'>{exticle.title}</h2>
                <p className='text-gray-900 text-xs font-semibold mt-auto'>By {exticle.author}</p>
                <p className='text-gray-900 text-xs  font-semibold mb-auto'>on {new Date(exticle.writtenOn).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            ))}
        </div>
    </div>
  );
}

export default ExticleAll;
