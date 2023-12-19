import React from 'react'
import { Icon } from '@iconify/react';
import Meta from '../meta.json'
const MetaBox = () => {
  return (
    <section className='w-full pt-5 pb-8 rounded-lg bg-slate-100 flex flex-row justify-center'>
        <div className='bg-primary-500 rounded-xl shadow-xl px-5 py-3 w-4/5 flex flex-row max-mobile:grid max-mobile:grid-cols-2 max-mobile:gap-2 justify-around '>
            {
               Meta && Meta.map( datameta => {
                return(
                    <div className='text-accent-500 flex flex-col w-full items-center' key={datameta.id}>
                    <div className='py-2'><Icon icon={datameta.iconlink} className='text-8xl max-laptop:text-6xl max-tablet:text-5xl ' /></div>
                    <p className='text-3xl max-laptop:text-2xl  font-bold'>
                             {datameta.count}+
                    </p>
                    <p className='text-2xl  max-laptop:text-lg max-mobile:text-base py-2 max-laptop:py-1'>
                        {datameta.text}
                    </p>
                </div>
                )
               }) 
            }
        </div>
    </section>
  )
}

export default MetaBox