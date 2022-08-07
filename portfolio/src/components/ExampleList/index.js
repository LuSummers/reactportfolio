import React, { useState } from 'react';
import Modal from '../Modals';


const ExampleList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: '0',
      category: 'Portfolio',
      description:'Vinyl Collectors',
        githublink: <a href="https://github.com/ajpicc3734/Project-2">Checkout Repostitory on Github</a>,
        website:  <a href="https://evening-brushlands-26827.herokuapp.com/">Check out the App!</a>,
    },
    {
      name: '1',
      category: 'Portfolio',
      description:'Trending Music App',
        githublink: <a href="https://github.com/ajpicc3734/Group-Project">Checkout Repostitory on Github</a>,
        website:  <a href="https://ajpicc3734.github.io/Group-Project/">Check out the App!</a>,

    },
    {
      name: '2',
      category: 'Portfolio',
      description:'Budget Tracker',
        githublink: <a href="https://github.com/LuSummers/budget-Tracker">Checkout Repostitory on Github</a>,
        website:  <a href="https://lusbudget-tracker.herokuapp.com//">Check out the App!</a>,
  
      },
    {
      /**update with new project */
      name: '3',
      category: 'Portfolio',
      description:'Work Day Scheduler',
        githublink: <a href="https://github.com/LuSummers/budget-Tracker">Checkout Repostitory on Github</a>,
        website:  <a href="https://lusummers.github.io/DailyPlanner/">Check out the App!</a>,
      },
    {
      name: '4',
      category: 'Portfolio',
      description:'Horiseon Website',
        githublink: <a href="https://github.com/LuSummers/Horiseon-Marketing">Checkout Repostitory on Github</a>,
        website:  <a href="https://lusummers.github.io/Horiseon-Marketing/">Check out the Site!</a>,
      },
    {
      name: '5',
      category: 'Portfolio',
      description:'Work Day Scheduler',
        githublink: <a href="https://github.com/LuSummers/DailyPlanner">Checkout Repostitory on Github</a>,
        website:  <a href="https://lusummers.github.io/DailyPlanner/">Check out the App!</a>,
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



