const reactDescription = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <h1>{reactDescription[genRandomInt(2)]}  Topics</h1>
    </header>
  );
}

export default Header;