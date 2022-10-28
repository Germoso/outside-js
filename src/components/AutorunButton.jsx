const AutorunButton = ({ autorun, setAutorun }) => {
    console.log(autorun)
    const activate = () => {
        setAutorun(!autorun)
    }

    return (
        <div className="absolute bottom-10 left-10 flex gap-3 w-full ">
            <button
                onClick={activate}
                className={` border border-headline h-fit p-4 rounded-lg  hover:bg-headline hover:text-background transition ${
                    autorun ? "bg-headline text-background" : "text-headline"
                }`}
            >
                Auto run
            </button>
        </div>
    )
}

export { AutorunButton }
