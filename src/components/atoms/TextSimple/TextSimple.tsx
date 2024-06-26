import "./TextSimple.style.css";

interface TextSimpleProps {
    content: string;
}

const TextSimple: React.FC<TextSimpleProps> = ({ content }) => {
    return (
        <div className="simple-text">
            <p className="simple-text-content justify text-m">{content}</p>
        </div>
    );
};

export default TextSimple;
