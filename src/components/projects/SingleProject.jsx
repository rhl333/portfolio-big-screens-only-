import "./project.scss";

const SingleProject = ({ src, title, image, extra }) => {
  return (
    <div className="singleProject">
      <div projectCard>
        <a href={src} target="_blank" rel="noreferrer">
          <img src={image} alt="" />
          <h3>{title}</h3>
          <p>{extra}</p>
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
