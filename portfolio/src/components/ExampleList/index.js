import React, { useState } from 'react';
import Modal from '../Modals';


const ExampleList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: '0',
      category: 'Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: '1',
      category: 'Portfolio',
      description:
        'Trending Music - Music lover app - one stop shop to watch music videos and search for lyrics'
    },
    {
      name: '2',
      category: 'Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: '3',
      category: 'Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: '4',
      category: 'Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: '5',
      category: 'Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: '6',
      category: 'Portfolio',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
   
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };
console.log(category);

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
       
     
<img id="small"
 src={require(`../../assets/small/${category}/${i}.jpeg`)}

alt={image.name}
className="img-thumbnail mx-1"
onClick={() => toggleModal(image, i)}
key={image.name}
/>
     
        ))}
      </div>
    </div>
  );
};

export default ExampleList;




// <img
//  src={require(`../../assets/small/${category}/${i}.jpeg`)}

// alt={image.name}
// className="img-thumbnail mx-1"
// onClick={() => toggleModal(image, i)}
// key={image.name}
// />