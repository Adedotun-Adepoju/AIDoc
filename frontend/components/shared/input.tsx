const Input = ({
    type,
    placeholder,
    value,
    onChange,
    min
}:{
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (event: any) => void,
    min?: any
}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange} value={value} min={min}/>
    )
}
export default Input