

const Input = ({register, name, type, placeHolder}) => {

    return (
        <>
        <label htmlFor="">
            <p>{placeHolder}</p>
            <input type={type} {...register(name)} placeholder={placeHolder}/>
        </label>
        </>
    )
}

export default Input