var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                This is a simple react app to fetch weather. I've created it in October 2017 while learning
                React.
                Hope, it will be of some use. <br/><br/> Cheers,<br/>
                Misery
            </p>
            <p>Some of the tools I've used:</p>
            <ol>

                <li>
                    <a href="https://facebook.github.io/react">React</a> - JS framework used
                </li>
                <li>
                    <a href="https://foundation.zurb.com/">Zrub Foundation</a> - CSS framework used
                </li>
            </ol>
            <p>
                <a href="https://github.com/Misericorda/reactWeatherApp">Github</a> - repository link
            </p>
        </div>
    );
};

module.exports = About;