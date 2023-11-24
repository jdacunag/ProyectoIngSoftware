import { faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useLocation } from 'wouter';
import Card from '../components/Card';
import Link from '../components/Link';
import Button from '../components/Button';
import Input from '../components/input';
import Title from '../components/title';
import { useNavigate } from 'react-router-dom';

import style from './Payment.module.css';

export default function Payment() {
    const [location, setLocation] = useLocation();
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const estadoRef = useRef(null);
    const fechaFinRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ProjectId = location.split('/')[2];
        const description = descriptionRef.current?.value;
        const estado = estadoRef.current?.value;
        const fechaFin = fechaFinRef.current?.value;
                await taskapi.editById(ProjectId, taskId, title, description, fechaFin, estado )
        setLocation(`/projects/${ProjectId}`);
    };

    //const title = location.split('/').pop() === 'edit' ? 'Edit Task' : 'Create Task';
    const title = 'Payment';
    

  return (
    <div className={style.container}>
    <div className={style.card}>
        <Card>
            <div className={style.title}>
                <Title>{title}</Title>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
                <Input type="text" placeholder="Nombre" focus inputRef={nameRef} />
                <Button submit icon={faCartPlus}>
                    Complete Payment
                </Button>
            </form>
        </Card>
    </div>
</div>
  );
}