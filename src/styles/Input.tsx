type InputProps = {
  signPage?: boolean;
  type: string;
  placeholder: string;
  value: string;
  onChange: (textInput: string) => void;
};
export const Input = ({
  signPage,
  type,
  placeholder,
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
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
