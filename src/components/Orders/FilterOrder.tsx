import { FilterButton } from "../Button";

interface FilterOrderProps {
  handleChangeStatus: (status: string) => void;
}

export const FilterOrder: React.FC<FilterOrderProps> = ({
  handleChangeStatus,
}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      <FilterButton
        content="Open"
        bgColor="#ECF026"
        handleChangeStatus={handleChangeStatus}
      />
      <FilterButton
        content="Doing"
        bgColor="#FFC039"
        handleChangeStatus={handleChangeStatus}
      />
      <FilterButton
        content="Finished"
        handleChangeStatus={handleChangeStatus}
      />
    </div>
  );
};
