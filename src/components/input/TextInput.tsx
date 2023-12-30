import { useState, ChangeEventHandler } from "react";
interface TextInputProps {
  className?: string;
  placeholder?: string;
  updateText: (content: string) => void;
  value?: string | undefined;
}

export const TextInput: React.FC<TextInputProps> = ({
  className,
  placeholder,
  updateText,
  value,
}) => {
  const [text, setText] = useState<string>(value || "");

  const updateTextContent = (text: string) => {
    setText(text);
    updateText(text);
  };

  return (
    <form className="bonadocs__form">
      <input
        onChange={(e) => updateTextContent(e.target.value)}
        className={className}
        value={text}
        placeholder={placeholder}
      />
      <button
        className="bonadocs__form__button"
        onClick={(e) => {
          e.preventDefault();
          updateTextContent("");
        }}
      >
        Clear
      </button>
    </form>
  );
};
