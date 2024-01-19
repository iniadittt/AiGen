import React from 'react'

const ButtonLogin = ({ action, children }: any) => {
    return (
        <button
            onClick={action}
            className='bg-blue-700 flex flex-row justify-center py-3 gap-4 rounded-md shadow-lg shado-blue-300'
        >
            {children}
        </button>
    )
}

export default ButtonLogin