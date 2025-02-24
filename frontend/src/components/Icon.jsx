const Icon = ({ icon, size = "sm" }) => {
  const fontSize = {
    sm: "md-18",
    medium: "md-24",
    lg: "md-36",
    xl: "md-48",
  };

  const list = {
    logout: <span className={`material-icons ${fontSize[size]}`}>logout</span>,
  };

  return list[icon];
};

export default Icon;
