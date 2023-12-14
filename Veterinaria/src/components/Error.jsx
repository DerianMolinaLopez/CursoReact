const error = ({children}) => {
    return (
        <>
            <div className="bg-red-700 text-white uppercase text-center p-3 mb-3 rounded font-bold">
                <h2>{children}</h2>
            </div>
        </>
    )
}
export default error