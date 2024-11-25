export default function Header({ color = '#334155', text = 'Section' }) {
  return (
    <div className="header">
      <div className="header flex flex-col items-center justify-center my-2 space-y-4">
        <h1
          style={{ color: color }}
          className="text-center text-4xl font-bold uppercase"
        >
          {text}
        </h1>
        <div className="flex relative w-[230px] justify-center items-center">
          <div
            style={{ background: color }}
            className={`h-1 w-[90px] absolute left-0 rounded-sm`}
          ></div>
          <i style={{ color: color }} className="fa-solid fa-star"></i>
          <div
            style={{ background: color }}
            className={`h-1 w-[90px] absolute right-0 rounded-sm`}
          ></div>
        </div>
      </div>
    </div>
  );
}
