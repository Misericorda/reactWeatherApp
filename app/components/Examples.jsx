var React = require('react');
import {Link} from 'react-router-dom';
var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few examples locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Belgorod">Belgorod, Russia</Link>
                </li>
                <li>
                    <Link to="/?location=Bremen">Bremen, Germany</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;