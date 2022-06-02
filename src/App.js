import './App.css';
import Card from "./components/Card";
import contacts from "./contacts";

function App() {
  return (
      <div>
        <Card
            name={contacts[0].name}
            img={contacts[0].imgURL}
            tel={contacts[0].phone}
            email={contacts[0].email}
        />
      </div>
  );
}

export default App;
