import { useEffect, useState } from 'react'

import { Card } from '@/components/card/card'
import { Filters } from '@/components/filters/filters'

import s from './tickets.module.scss'

import ticketsData from '../../../data/tickets.json'

export type TicketType = {
    arrival_date: string
    arrival_time: string
    carrier: string
    departure_date: string
    departure_time: string
    destination: string
    destination_name: string
    origin: string
    origin_name: string
    price: number
    stops: number
}

export const TicketsPage = () => {
    const [tickets, setTickets] = useState<TicketType[]>([])
    const [filteredTickets, setFilteredTickets] = useState<TicketType[]>([])

    useEffect(() => {
        setTickets(ticketsData.tickets)
        setFilteredTickets(ticketsData.tickets)
    }, [])
    const handleCheckboxChange = (selectedStops: number[]) => {
        if (selectedStops.length === 0 || selectedStops.includes(-1)) {
            setFilteredTickets(tickets)
        } else {
            const filtered = tickets.filter(ticket => selectedStops.includes(ticket.stops))

            setFilteredTickets(filtered)
        }
    }

    return (
        <div className={s.container}>
            <Filters onCheckboxChange={handleCheckboxChange} />
            <Card tickets={filteredTickets} />
        </div>
    )
}
