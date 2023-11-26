const Input = ({
    type,
    placeholder,
    value,
    onChange
}:{
    type: string,
    placeholder: string,
    value?: string,
    onChange?: () => void
}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    )
}
export default Input