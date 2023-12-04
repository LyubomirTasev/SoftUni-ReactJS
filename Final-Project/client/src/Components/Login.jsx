import { useRef, useState, useEffect } from 'react'

export default function Login() {
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, []);

    useEffect(() => {
        setErrorMsg('');
    }, [user, password]);

  return (
    <div>
        
    </div>
  )
}
