import React from 'react'

const Index = ({ user }: any) => {
    console.log(user)
    return (
        <div className="w-full flex flex-col gap-8">
            <div className="text-gray-700">
                <p className="text-2xl font-bold">Hi, {user.displayName}. </p>
                <p className="text-lg">Welcome Back!</p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3 flex flex-col gap-4">
                    <div className="p-4 bg-white border rounded-lg text-gray-700 shadow-lg col-span-3">
                        <p className="text-lg font-bold">Dashboard</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                    <div className="p-4 bg-white border rounded-lg text-gray-700 shadow-lg col-span-3">
                        <p className="text-lg font-bold">Dashboard</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                    <div className="p-4 bg-white border rounded-lg text-gray-700 shadow-lg col-span-3">
                        <p className="text-lg font-bold">Dashboard</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                </div>
                <div className="p-4 bg-white border rounded-lg text-gray-700 shadow-lg">
                    <p className="text-lg font-bold">Dashboard</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
        </div>
    )
}

export default Index