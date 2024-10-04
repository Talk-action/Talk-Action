import nomes from '../static/nomes.json';
import style from './css/AlunosStyle.module.css';

const Alunos = () => {
    return (
        <div className={style.container}>
            <div className={style.dev}>
                <p className={style.p}>Desenvolvedores</p>
            </div>

            <div className={style.containerPerfil}>
                {nomes.map((person)=>(
                    <div>
                        <div className={style.img}>
                            <img src={person.img}/>
                        </div>
                        <div>
                            <h2>{person.nome}</h2>
                            <h3><strong>{person.funcao}</strong></h3>
                            <a href={person.link} target='_blank'>Gitihub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Alunos;
