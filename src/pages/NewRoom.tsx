import { Button } from '../components/Button';

import "../styles/pages/home.scss";

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';


export function NewRoom() {
  return (
    <div id="home-page">
      <aside>
        <img src={illustrationImg} alt="Questions and Answers Illustration" />
        <strong>Create rooms for Q&amp;A</strong>
        <p>Ask people's questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask Logo" />
          <h2>Create a new room</h2>
          <form>
            <input 
              type="text"
              placeholder="Room ID"
            />
            <Button type="submit">
              Create room
            </Button>
          </form>
          <p>
            Want to join an existing room? <a href="#">Click here</a>
          </p>
        </div>
      </main>
    </div>
  )
}