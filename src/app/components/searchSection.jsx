import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Card from './subcomponents/card'

function SearchSection() {
    return (
        <div>
            <hr />
            <div className="flex w-full max-w-sm items-center space-x-2 p-10">
                <Input type="email" placeholder="Recherchez un film..." />
                <Button type="submit">Chercher</Button>
            </div>
            <div className='p-10 grid grid-cols-2 gap-5'>
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default SearchSection