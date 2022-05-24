const MultilineStrings = () => {
  return (
    <div className="content-item">
      <h2>Multiline Strings</h2>
      <div className="desc">
        <p>
          ECMAScript 6 (ES6) introduces a new type of literal, namely template
          literals. They have many features, variable interpolation among
          others, but most importantly for this question, they can be multiline.
        </p>
        <p>A template literal is delimited by backticks:</p>
        <pre>
          console.log(` This is a <br /> multiline string `)
        </pre>
      </div>
    </div>
  );
};

export default MultilineStrings;
