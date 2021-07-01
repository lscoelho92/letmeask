import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { database } from '../services/firebase';
import { Button } from '../components/Button';

import { useAuth } from '../hooks/useAuth';

import "../styles/pages/home.scss";

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';


export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`);
  }

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
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Room ID"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Create room
            </Button>
          </form>
          <p>
            Want to join an existing room? <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}