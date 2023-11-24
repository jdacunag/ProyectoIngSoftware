import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import Card from '../components/Card';
import Link from '../components/Link';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/input';
import Title from '../components/title';
import useSession from '../hooks/useSession';
import style from './Login.module.css';


export default function Login() {
    sessionStorage.removeItem('userId');
    const {createSession} = useSession();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    //const { createSession } = useSession();
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) return;

        try {
            const res = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            if (res.ok) {
                navigate('/home');
                const jsonString = await res.text();
                createSession(JSON.parse(jsonString))
            } else {
                alert('No se pudo iniciar sesion. Asegurate que los datos sean correctos');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={style.container}>

            <div >


                <Card>
                    <form className={style.form} onSubmit={handleSubmit}>




                        <div className={style.brand}>
                            <FontAwesomeIcon icon={faUser} size="3x" />
                            <Title>Iniciar Sesión</Title>
                        </div>

                        <Input inputRef={usernameRef} type="text" placeholder="Usuario" focus />
                        <Input inputRef={passwordRef} type="password" placeholder="Contraseña" />
                        <Button submit icon={faUser}>
                            Iniciar Sesion
                        </Button>

                        <Link href="/register">No tengo una cuenta</Link>
                    </form>
                </Card>
            </div>
        </div>
    );
}
