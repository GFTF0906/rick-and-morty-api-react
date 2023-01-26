export const ExternalLink = ({
  text,
  url,
  icon,
}: {
  text: string;
  url: string;
  icon: JSX.Element;
}) => {
  return (
    <>
      <a href={url} target="_blank">
        <button className="w-full h-full flex items-center gap-2 p-6 text-lg rounded transition-all font-semibold bg-gray-700 hover:opacity-80">
          {icon}
          {text}
        </button>
      </a>
    </>
  );
};
