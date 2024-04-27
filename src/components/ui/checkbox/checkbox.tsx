import { ChangeEvent, FC } from 'react'

import s from './checkbox.module.scss'

export type CheckboxProps = {
    checked?: boolean
    className?: string
    label?: string
    onChange?: (checked: boolean) => void
}

export const Checkbox: FC<CheckboxProps> = ({ checked, label, onChange }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.checked)
        }
    }

    return (
        <div className={s.CheckboxWrapper}>
            <label className={s.Label}>
                <input
                    checked={checked}
                    className={s.StyledInput}
                    onChange={handleChange}
                    type={'checkbox'}
                />
                {label}
            </label>
        </div>
    )
}
