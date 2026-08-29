interface ICardProps {
    title: string,
    value: string,
    bgColor: string
}

const Card = ({title, value, bgColor}: ICardProps) => {
  return (
    <div className={`text-white p-4 ${bgColor} rounded-lg col-span-1 shadow-md cursor-pointer`}>
        <p className="">{title}</p>
        <h3 className="font-bold">{value}</h3>
    </div>
  )
}

export default Card