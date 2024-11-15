import { useSelector } from 'react-redux';

export function Datos() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <h1>Datos de usuario</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
      </ul>
    </>
  );
}
