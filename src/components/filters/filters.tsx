import { useState } from 'react'

import { Typography } from '@/components'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox/checkbox'

import s from './filters.module.scss'

type Props = {
    onCheckboxChange: (selectedStops: number[]) => void
}

export const Filters = ({ onCheckboxChange }: Props) => {
    const [selectedStops, setSelectedStops] = useState<number[]>([])
    const [checkboxStates, setCheckboxStates] = useState<any>({
        all: false,
        oneStop: false,
        threeStops: false,
        twoStops: false,
        withoutStops: false,
    })
    const [activeButton, setActiveButton] = useState<string>('')

    const handleCheckboxChange = (stops: number, checked: boolean) => {
        let updatedSelectedStops: number[]

        if (checked) {
            updatedSelectedStops = [...selectedStops, stops]
        } else {
            updatedSelectedStops = selectedStops.filter(stop => stop !== stops)
        }

        setSelectedStops(updatedSelectedStops)
        onCheckboxChange(updatedSelectedStops)

        setCheckboxStates((prevStates: any) => ({
            ...prevStates,
            [stops]: checked,
        }))
    }

    const handleButtonClick = (currency: string) => {
        setActiveButton(currency)
    }

    return (
        <div className={s.filters}>
            <Typography className={s.filter__title}>ВАЛЮТА</Typography>
            <div className={s.btn__container}>
                <Button
                    className={`${activeButton === 'RUB' ? s.activeButton : ''} ${s.leftButton}`}
                    onClick={() => handleButtonClick('RUB')}
                    variant={'secondary'}
                >
                    RUB
                </Button>
                <Button
                    className={activeButton === 'USD' ? s.activeButton : ''}
                    onClick={() => handleButtonClick('USD')}
                    variant={'secondary'}
                >
                    USD
                </Button>
                <Button
                    className={`${activeButton === 'EUR' ? s.activeButton : ''} ${s.rightButton}`}
                    onClick={() => handleButtonClick('EUR')}
                    variant={'secondary'}
                >
                    EUR
                </Button>
            </div>
            <Typography className={s.filter__title}>Количество пересадок</Typography>
            <div>
                <div className={s.filter__checkbox}>
                    <Checkbox
                        checked={checkboxStates[-1]}
                        label={'Все'}
                        onChange={checked => handleCheckboxChange(-1, checked)}
                    />
                    <Button className={s.checbox__btn} variant={'modal'}>
                        только
                    </Button>
                </div>
                <div className={s.filter__checkbox}>
                    <Checkbox
                        checked={checkboxStates[0]}
                        label={'Без пересадок'}
                        onChange={checked => handleCheckboxChange(0, checked)}
                    />
                    <Button className={s.checbox__btn} variant={'modal'}>
                        только
                    </Button>
                </div>
                <div className={s.filter__checkbox}>
                    <Checkbox
                        checked={checkboxStates[1]}
                        label={'1 пересадка'}
                        onChange={checked => handleCheckboxChange(1, checked)}
                    />
                    <Button className={s.checbox__btn} variant={'modal'}>
                        только
                    </Button>
                </div>
                <div className={s.filter__checkbox}>
                    <Checkbox
                        checked={checkboxStates[2]}
                        label={'2 пересадки'}
                        onChange={checked => handleCheckboxChange(2, checked)}
                    />
                    <Button className={s.checbox__btn} variant={'modal'}>
                        только
                    </Button>
                </div>
                <div className={s.filter__checkbox}>
                    <Checkbox
                        checked={checkboxStates[3]}
                        label={'3 пересадки'}
                        onChange={checked => handleCheckboxChange(3, checked)}
                    />
                    <Button className={s.checbox__btn} variant={'modal'}>
                        только
                    </Button>
                </div>
            </div>
        </div>
    )
}
