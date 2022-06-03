import './App.css';
import Card from "./components/Card";
import contacts from "./contacts";
import Avatar from "./components/Avatar";

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
    );
}

function App() {
    const myPhoto = "https://www.californiamuseum.org/sites/main/files/imagecache/" +
        "lightbox/main-images/cahalloffame_inductee_stevenspielberg_1800x2560.png";
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img={myPhoto}/>
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
