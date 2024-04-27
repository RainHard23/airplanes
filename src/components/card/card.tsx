import { Airplane } from '@/assets'
import { TicketType } from '@/assets/pages/tickets-page/tickets-page'
import { Typography } from '@/components'
import { Button } from '@/components/ui/button'

import s from './card.module.scss'

import turkishLogo from './../../assets/images/turkish.png'

type Props = {
    tickets: TicketType[]
}
export const Card = ({ tickets }: Props) => {
    const sortedTickets = [...tickets].sort((a, b) => a.stops - b.stops)

    return (
        <div className={s.card}>
            {sortedTickets.map((ticket, index) => (
                <div className={s.container} key={index}>
                    <div className={s.wrapper}>
                        <div className={s.card__left}>
                            <img alt={'turkish'} src={turkishLogo} />
                            <Button fullWidth>
                                <div>Купить</div>
                                <div>за {ticket.price} &#8381;</div>
                            </Button>
                        </div>

                        <div className={s.card__right}>
                            <div className={s.departure}>
                                <Typography className={s.time}>{ticket.departure_time}</Typography>
                                <div>
                                    <Typography className={s.city}>{ticket.origin_name}</Typography>
                                    <Typography className={s.date}>
                                        {ticket.departure_date}
                                    </Typography>
                                </div>
                            </div>
                            <div className={s.transfer__wrapper}>
                                <Typography as={'span'} className={s.transfer}>
                                    {ticket.stops} ПЕРЕСАДКИ
                                </Typography>
                                <div className={s.transfer__line__container}>
                                    <div className={s.transfer__line}></div>
                                    <Airplane className={s.airplane__icon} />
                                </div>
                            </div>

                            <div>
                                <Typography className={`${s.time} ${s.second__time}`}>
                                    {ticket.arrival_time}
                                </Typography>
                                <div>
                                    <Typography className={s.city}>
                                        {ticket.destination_name}, {ticket.destination}
                                    </Typography>
                                    <Typography className={s.date}>
                                        {ticket.arrival_date}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
