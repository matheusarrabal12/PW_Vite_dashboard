import { useNavigate } from 'react-router-dom';
import './UserCard.css';

function UserCard({ user }) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/usuarios/${user.id}`);
  };

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <small><strong>{user.firstName}</strong></small>
      <button className="button" onClick={handleViewProfile}>Ver Perfil</button>
    </div>
  );
}

export default UserCard;