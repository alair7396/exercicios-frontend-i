import './ListaProdutos.css';

const ListaProdutos=({produtos}) => {
    return(
        <>
        <div className='listaprodutos'>{produtos}</div>
        </>
    )
}

export default ListaProdutos;