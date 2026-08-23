const Button = ({
  className,
  children,
  onClickEvent,
}: {
  className: string;
  children: React.ReactNode;
  onClickEvent?: () => void;
}) => {
  return (
    <button onClick={onClickEvent} className={`${className} `}>
      {children}
    </button>
  );
};

export default Button;
