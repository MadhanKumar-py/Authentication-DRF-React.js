import {Link} from 'react-router-dom'
function Main() {
    return (
        <div className="h-[80vh] flex">
            <div className="flex items-center justify-center text-center">
                <div className="w-10/12 bg-gray-800 p-5 rounded-md">
                    <h1 className="text-3xl font-bold" >Stock Prediction Portal</h1>
                    <p className="my-2 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vero dicta voluptatem. Ut cum ea, recusandae laborum animi nobis harum consequuntur, nemo placeat quod at cupiditate necessitatibus labore a ex dolore vel sequi, repellat nulla. Asperiores saepe tempora ipsum rem recusandae ad, voluptas atque nobis cupiditate! Blanditiis, cum? Corporis consequatur molestias maiores blanditiis aspernatur aliquam eum voluptatum rem labore saepe!</p>
                    <Link to="/dashboard" className="border px-2 py-1 border-amber-500 rounded-md font-semibold text-lg hover:bg-amber-500 hover:text-black">Dashboard</Link>
                </div>
            </div>
        </div>
    )
}

export default Main