import { useParams } from 'react-router-dom';
import './UserDetail.css';

function UserDetail({ users }) {
  const { id } = useParams();
  const user = users.find(u => u.id.toString() === id); // Busca o usuário no array 'users' cujo 'id' corresponde ao parâmetro da URL.

  if (!user) return <p>Usuário não encontrado.</p>;

  return (
    <div className="user-detail">
      <img src={user.avatar} alt={user.name} style={{ width: 120, borderRadius: '50%' }} />
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Endereço:</strong> {user.address}</p>
      <p><strong>Nome Completo:</strong> {user.firstName} {user.lastName}</p>
      <button onClick={() => navigate(-1)} className="button">Voltar</button>
    </div>
  );
}

export default UserDetail;