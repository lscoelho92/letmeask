import { Button } from '../components/Button';

import "../styles/pages/home.scss";

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';


export function Home() {
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

          <button className="create-room-btn">
            <img src={googleIconImg} alt="Google Logo" />
            Create your room with Google
          </button>

          <div className="separator">Or enter a room</div>
          <form>
            <input 
              type="text"
              placeholder="Enter room code"
            />
            <Button type="submit">
              Enter the room
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}