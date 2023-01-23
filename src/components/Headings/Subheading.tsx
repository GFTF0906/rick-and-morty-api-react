export const Subheading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h3 className={`subheading ${className ?? ''}`}>{text}</h3>;
};
