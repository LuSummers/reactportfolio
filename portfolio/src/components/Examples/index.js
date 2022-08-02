import React, { useState } from 'react';
import Modal from '../Modal';

const ExampleList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentExample, setCurrentExample] = useState();

  const [examples] = useState([
    {
      name: 'assignment',
      category: 'work',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
        name: 'assignment2',
        category: 'work',
        description:
          'lorem'
      },
  ]);

  const currentExamples = examples.filter(example => example.category === category);

  const toggleModal = (image, i) => {
    setCurrentExample({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div id="example">
      {isModalOpen && (
        <Modal onClose={toggleModal} currentExample={currentExample} />
      )}
      <div className="flex-row">
        {currentExamples.map((image, i) => (
          <img
            // src={require(`../../assets/small/${category}/${i}.jpg`).default}
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