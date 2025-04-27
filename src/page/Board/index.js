import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelList } from '@/store/modules/channelStore'
export default function Board() {
    const { channel } = useSelector(state => state.channel)
    console.log(channel);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getChannelList())
    }, [dispatch])
    return (
        <div>Board: 
            <ul>
                {channel.map(item => <li key={item.id}>{item.name}-{item.age}-{item.grade}-{item.email}</li>)}
            </ul>
        </div>
    )
}
