import { useSelector, useDispatch } from 'react-redux';
import { changeEmail } from '../redux/userSlice';

export function Email() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  return (
    <input
      type="email"
      value={email}
      onChange={(e) => dispatch(changeEmail(e.target.value))}
    />
  );
}
