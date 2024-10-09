import './NumerosImpares.css';

const NumerosImpares = (numerosimpar) => {
    return (
        <>
            <div>
                <h3>São Impares</h3>
                <ul>
                    {numerosimpar.map((numerosimpar,
                     index) => (
                        <li key={index}>{numerosimpar}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NumerosImpares;