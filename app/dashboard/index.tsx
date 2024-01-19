import React from 'react'

const Index = ({ user }: any) => {
    console.log(user)
    return (
        <div className="w-full bg-blue-900 p-6 text-slate-200 rounded-md shadow-md">
            <p className="text-2xl">Welcome, {user.displayName}</p>
        </div>
    )
}

export default Index