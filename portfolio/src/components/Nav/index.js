import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers'
function Nav(props) {
  // const {
  //   categories = [],
  //   setCurrentCategory,
  //   currentCategory,
  // } = props;
  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  return (

    <header className="flex-row px-1">
      <h2>
       <h1>Lu Summers</h1>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
          <a data-testid="contact-form" href="#contact-form">
            <span>Contact</span></a>
          </li>
          <li className="mx-2">
            <a data-testid="example" href="#example"> Portfolio</a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume"> Resume</a>
          </li>

          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>

    </header>
  );
}

export default Nav;