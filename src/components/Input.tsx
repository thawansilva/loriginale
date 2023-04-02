type InputProps = {
  signPage?: boolean;
  type: string;
  title: string;
  value: string;
  onChange: (textInput: string) => void;
};
export const Input = ({
  signPage,
  type,
  title,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      className="w-full h-10 px-3 placeholder:text-black/[.5] rounded-2xl outline-none mb-2"
      style={{
        backgroundColor: signPage ? "#B0BAC3" : "#EAEAEA",
      }}
      required
      value={value}
      type={type}
      placeholder={title}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
