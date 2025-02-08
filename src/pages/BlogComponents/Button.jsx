const Button = ({
  title,
  onClick,
  className,
  image,
  iconClassName,
  ...props
}) => {
  return (
    <button
      aria-label={title}
      className={className}
      onClick={onClick}
      {...props}
    >
      {title}
      <div className={` ${image ? "" : "hidden"} `}>
        {/* <Image
            className={`ml-4 ${iconClassName}`}
            alt="arrow"
            title="arrow"
            src={Arrow}
            width={10}
            height={10}
          /> */}
      </div>
    </button>
  );
};

export default Button;
