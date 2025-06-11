import './UserCard.css';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.firstname}'s avatar`} className="user-avatar" />
      <h3>{user.firstname} {user.lastName}</h3>
      <p>{user.email}</p>
      <small>{user.addres}</small>
    </div>
  );
}

export default UserCard;