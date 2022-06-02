import './App.css';
import Card from "./components/Card";
import contacts from "./contacts";
import Avatar from "./components/Avatar";

function App() {
   const myPhoto = "https://www.californiamuseum.org/sites/main/files/imagecache/" +
       "lightbox/main-images/cahalloffame_inductee_stevenspielberg_1800x2560.png";
  return (
      <div>
          <h1 className="heading">My Contacts</h1>
          <Avatar img={myPhoto} />
          <Card
            name={contacts[0].name}
            img={contacts[0].imgURL}
            tel={contacts[0].phone}
            email={contacts[0].email}
        />
        <Card
            name={contacts[1].name}
            img={contacts[1].imgURL}
            tel={contacts[1].phone}
            email={contacts[1].email}
        />
      </div>
  );
}

export default App;
