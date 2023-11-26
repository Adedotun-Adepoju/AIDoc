const Input = ({
    type,
    placeholder,
    value,
    onChange,
    refEl
}:{
    type: string,
    placeholder: string,
    value?: string,
    onChange?: (event: any) => void,
    refEl?: any
}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange} value={value} ref={refEl}/>
    )
}
export default Input