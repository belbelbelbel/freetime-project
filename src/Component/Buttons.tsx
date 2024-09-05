

export const Buttons = ({ onClick, label, color, border }: any) => {
    return (
        <button onClick={onClick} className={`${color} hover:bg-opacity-60  w-full h-[10vh] my-2 outline-0 border-0 ${border} mx-auto`}>{label}</button>
    )
}
