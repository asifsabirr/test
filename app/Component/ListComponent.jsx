'use client'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromList, addToList } from '@/app/store/listSlice'

const ListComponent = () => {
    const list = useSelector((state) => state.list.array)
    const dispatch = useDispatch()
    const textRef = useRef()
    return (
        <div className='text-black'>
            <div className='flex   gap-2'>
                <input type='text' className='h-10 w-40 border' ref={textRef} />
                <button
                    className='bg-blue-500 '
                    onClick={() => dispatch(addToList(textRef.current.value))}>
                    add into list
                </button>
            </div>
            <div className='flex flex-col gap-4 items-center justify-center'>
                {list.map((item) => (
                    <div
                        className='text-black w-full bg-blue-50 my-2 hover:bg-blue-500'
                        onClick={() => {
                            dispatch(deleteFromList(item))
                        }}
                        key={item}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListComponent
