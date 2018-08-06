import {Link} from 'react-router-dom';

const Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few locations to try out the app:</p>
      <ol>
        <li>
          <Link to="/?location=Belgorod">Belgorod, Russia</Link><i> (one-word city)</i>
        </li>
        <li>
          <Link to="/?location=Bremen">Bremen, Germany</Link><i> (one-word city)</i>
        </li>
        <li>
          <Link to="/?location=San Francisco">San Francisco, USA</Link><i> (two-word city)</i>
        </li>
        <li>
          <Link to="/?location=London, UK">London, UK</Link><i> (city plus country)</i>
        </li>
      </ol>
    </div>
  );
};

export default Examples;