import "./App.css";

let name='Neha'
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div classname="container">
        <h1>Hello {name} </h1>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore id nemo
        tempore praesentium saepe esse aliquid modi! Consequuntur exercitationem
        rerum qui quod atque velit! Veritatis iste mollitia obcaecati
        consequatur qui veniam dicta!</p>
      </div>
    </>
  );
}

export default App;
