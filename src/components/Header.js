const Header = ({ userName }) => {
  return (
    <header>
      {userName ?
        <h1>Welcome {userName} to a Trivia Quizz</h1> :
        <h1>Please enter your name:</h1>
      }
    </header>
  );
};

export default Header;