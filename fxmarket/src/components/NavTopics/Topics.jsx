

const Topics = ({link, img, titulo}) => {
console.log(titulo)

    return(
        <a href={link} >
        <img src={img} alt={titulo} />
        <span>{titulo}</span>
        </a>
    )
}

export default Topics