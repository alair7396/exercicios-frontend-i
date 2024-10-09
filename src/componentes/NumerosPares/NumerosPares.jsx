import './NumerosPares.css'; 

const NumerosPares/*<<<componenete pai*/ =    ({ numeros/* <<<prop do componente pai*/ }) => {
    return (
        <>
            <div className='pares'>
                <h3>São Pares</h3>
                <ul>
                    {numeros.map((numeros,/* variavel index criada para receber  a key de li e assim garantindo que todos os componentes tenham a mesma chave*/ index) => (
                        <li key={index}>{numeros}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NumerosPares;