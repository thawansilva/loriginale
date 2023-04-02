import { Loader } from "./Loader";

interface ButtonsProps {
  loading: boolean;
  title: string;
  content: string;
  width?: string;
}

interface FilterButtonProps {
  bgColor?: string | undefined;
  content: string;
  handleChangeStatus: (status: string) => void;
}

export const Button = ({ loading, width, title, content }: ButtonsProps) => {
  return (
    <button
      title={title}
      className="font-bold w-full bg-green h-10 rounded-2xl my-2"
      style={{ width: width && width }}
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
      className="font-bold mx-auto h-10 bg-green rounded-2xl my-2 w-[150px] hover:shadow-md shadow-black dark:shadow-gray active:shadow-inner transition duration-150"
      style={styleFilterButton}
      title={`Filter by ${content} status`}
      onClick={() => handleChangeStatus(content)}
    >
      {content}
    </button>
  );
};
