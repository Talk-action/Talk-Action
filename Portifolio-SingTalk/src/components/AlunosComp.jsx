import nomes from '../static/nomes.json';
import style from './css/AlunosStyle.module.css';

const Alunos = () => {
    return (
        <div className={style.container}>
            <div className={style.dev}>
                <p className={style.p}>Desenvolvedores</p>
            </div>

            <div className={style.containerPerson}>
                {nomes.map((person)=>(
                    <div>
                        <div className={style.img}>
                            <img src={person.img}/>
                        </div>
                        <div>
                            <p>{person.nome}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Alunos;
