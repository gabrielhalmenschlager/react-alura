import './estilo.css'

const icones = [perfil, sacola] 

function Icones() {
    return (
        <ul className='icones'>
            { icones.map ( (icone) => (
                <li className='icone'><img src={icone}></img></li>
            ) )}
        </ul>
    )
}