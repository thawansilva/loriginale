export const FilterButtons = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      <button className="font-bold mx-auto h-10 bg-yellow rounded-2xl my-2 w-[175px]">
        Open
      </button>
      <button className="font-bold mx-auto h-10 bg-orange rounded-2xl my-2 w-[175px]">
        Doing
      </button>
      <button className="font-bold mx-auto h-10 bg-green rounded-2xl my-2 w-[175px]">
        Finished
      </button>
      <button className="font-bold mx-auto h-10 bg-red rounded-2xl my-2 w-[175px]">
        Canceled
      </button>
    </div>
  );
};
