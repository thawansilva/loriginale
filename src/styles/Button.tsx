import { Loader } from "./Loader";

interface ButtonsProps {
  loading?: boolean;
  title: string;
  content: string;
  width?: string;
  onClick?: () => void;
}

interface FilterButtonProps {
  bgColor?: string | undefined;
  content: string;
  handleChangeStatus: (status: string) => void;
}

export const Button = ({
  loading,
  width,
  title,
  content,
  onClick,
}: ButtonsProps) => {
  return (
    <button
      title={title}
      className="text-sm font-bold w-full bg-green h-10 rounded-2xl my-2 sm:text-base"
      style={{ width: width && width }}
      onClick={onClick}
    >
      {loading ? <Loader /> : content}
    </button>
  );
};

export const FilterButton = ({
  bgColor,
  content,
  handleChangeStatus,
}: FilterButtonProps) => {
  const styleFilterButton = { backgroundColor: bgColor && bgColor };

  return (
    <button
      className="text-sm font-bold mx-auto h-10 bg-green rounded-2xl my-2 w-[150px] transition ease-in-out duration-300 hover:shadow-md hover:shadow-black dark:shadow-gray active:shadow-inner sm:text-base"
      style={styleFilterButton}
      title={`Filter by ${content} status`}
      onClick={() => handleChangeStatus(content)}
    >
      {content}
    </button>
  );
};
