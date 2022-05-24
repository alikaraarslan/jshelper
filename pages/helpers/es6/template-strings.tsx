/* eslint-disable react/no-unescaped-entities */
import { CopyBlock, vs2015 } from 'react-code-blocks';

const TemplateStrings = () => {
  return (
    <div className="content-item">
      <h2>Template Strings</h2>
      <div className="desc">
        <p>
          Template literals are enclosed by backtick (`) characters instead of
          double or single quotes.
        </p>
        <p>
          Along with having normal strings, template literals can also contain
          other parts called placeholders, which are embedded expressions
          delimited by a dollar sign and curly braces: ${'expression'}. The
          strings and placeholders get passed to a function — either a default
          function, or a function you supply. The default function (when you
          don't supply your own) just performs string interpolation to do
          substitution of the placeholders and then concatenate the parts into a
          single string.
        </p>
      </div>
    </div>
  );
};

export default TemplateStrings;
