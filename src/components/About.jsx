const About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a simple React app that fetches weather from <a href="https://openweathermap.org">openweathermap.org</a>.
        <br/>
        I've created it in October 2017 while learning React.
        Hope, it will be of some use. <br/> Cheers,<br/>
        Misery
      </p>
      <p>Some of the tools I used:</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react">React</a> - JS framework used
        </li>
        <li>
          <a href="https://foundation.zurb.com/">Zrub Foundation</a> - CSS framework used
        </li>
      </ol>
      <p>
        App repository on GitHub: <a href="https://github.com/misericorda/reactWeatherFetch">Github</a>
      </p>
    </div>
  );
};

export default About;