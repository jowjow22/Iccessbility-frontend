import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import api from '../../services/api';
import styles from  './style.module.css';

interface WhoToFollowProps {
  name: string;
  personType: string;
  profilePic: string;
  userId: number;
}

const WhoToFollow: React.FC<WhoToFollowProps> = (props) => {
  const { user } = useAuth();
  return (
    <article className={styles.followItem}>
      <header>
        <img src={props.profilePic} alt={props.name} />
        <div>
          <strong>{props.name}</strong>
          <span>Pessoa {props.personType}</span>
        </div>
      </header>
      <footer>
        <button type="button" onClick={async ()=>{
          await api.post(`follow/${user?.id}/${props.userId}`);
          window.location.reload();
        }}>
          Seguir
        </button>
      </footer>
    </article>
  );
}
export default WhoToFollow;
