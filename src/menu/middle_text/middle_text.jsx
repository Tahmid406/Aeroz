function MiddleText({ text }) {
  return <div className="middle-text" dangerouslySetInnerHTML={{ __html: text }}></div>;
}

export default MiddleText;
