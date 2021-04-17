const HeaderOption = ({Icon, title, selected}) => {
    return (
        <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-green-500 hover:border-green-500 pb-3 cursor-pointer ${selected && 'text-green-500 border-green-500' }`}>
            <Icon className='h-4' />
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default HeaderOption