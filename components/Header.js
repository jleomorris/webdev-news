import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className="title">
        <span>WebDev</span>News
      </h1>
      <style>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
