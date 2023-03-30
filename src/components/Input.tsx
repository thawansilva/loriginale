type InputProps = {
  type: string;
  title: string;
  value: string;
  onChange: (textInput: string) => void;
};
export const Input = ({ type, title, value, onChange }: InputProps) => {
  return (
    <input
      className="w-full h-10 px-3 bg-gray placeholder:text-black/[.5] rounded-2xl outline-none mb-2"
      value={value}
      type={type}
      placeholder={title}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
