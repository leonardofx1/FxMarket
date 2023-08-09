

const Input = ({register, name, type }) => {

    return (
        <>
        <label htmlFor="">
            {name}
            <input type={type} {...register(name)} />
        </label>
        </>
    )
}

export default Input