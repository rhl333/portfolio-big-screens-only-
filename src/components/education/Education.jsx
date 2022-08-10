import "./education.scss";

const Education = () => {
  return (
    <div className="education">
      <div className="educationContainer">
        <div className="degree">
          <h2>Bachelor In Technology</h2>
          <p>From Institute Of Technology Gopeshwar, Uttarakhand</p>
          <p>Marks : 70%</p>
          <p>Year : 2016 - 2020</p>
        </div>
        <div className="inter">
          <h2>Intermediate</h2>
          <p>From Government Inter College Raiagar, Uttarakhand, Pithoragarh</p>
          <p>Marks : 72%</p>
          <p>Year : 2015</p>
        </div>
        <div className="highschool">
          <h2>Highschool</h2>
          <p>From Government Inter College Raiagar, Uttarakhand, Pithoragarh</p>
          <p>Marks : 68%</p>
          <p>Year : 2013</p>
        </div>
        <div className="udemy">
          <h2>Full Stack Web Development Course</h2>
          <p>From Udemy.com</p>
          <p>Year : 2020 - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
