import { Container } from "./styles"



interface InputProps {
    label?: string | true
    defaultValue?: string
    name?: string
    type?: string
    mask?: (value: string) => string
    placeholder?: string
    disabled?: boolean
    error?: any
    value?: string
    register?: any
}


const Input: React.FC<InputProps> = ({
    label,
    defaultValue,
    name,
    type,
    mask = (value: string) => value,
    value,
    placeholder,
    disabled,
    error,
    register,
    ...inputProps
}) => {
    return (
        <Container>
            {label && (
                <label htmlFor={name}>
                    {(typeof label === 'string' && label) ||
                        placeholder ||
                        'Preencha este campo'}
                </label>
            )}
            <input
                onChange={e => (e.target.value = `${mask(e.target.value)}`)}
                disabled={disabled}
                ref={register}
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                defaultValue={defaultValue}
                {...inputProps}
            />

        </Container>
    )
}

export default Input