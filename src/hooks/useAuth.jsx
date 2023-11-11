import { useContext } from 'react';
import { AuthContext } from '../utils/AuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
