export const Input = ({type,placeholder,onChange}:any) => {
  return (
    <input type={type} placeholder={placeholder}  onChange={onChange} className="w-full h-[10vh] rounded-[6px] px-[1.5rem] py-[1.5vw] border-0 outline-0 bg-gray-500 bg-opacity-20 "/>
  )
}
