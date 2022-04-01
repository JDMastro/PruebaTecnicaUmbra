
interface Itextfield {
    className: string,
    name: string,
    label: string,
    value: string | number,
    error?: any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    autofocus: boolean,
    type: string
}

export default function TextField(props : Itextfield)
{
    const { autofocus, className, error, label, name, onChange, type, value } = props
    return (
        <>
          <div className="form-floating">
            <input type={type} className={error ? `${className} form-control is-invalid` : `${className} form-control`} autoFocus={autofocus} onChange={onChange} name={name} placeholder={label} value={value} />
            <label htmlFor="floatingInputValue">{label}</label>
            { error && <div className="invalid-feedback">{error}</div> }
        </div>
        </>
    )
}