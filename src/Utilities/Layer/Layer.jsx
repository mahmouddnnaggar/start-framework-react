export default function Layer() {
  return (
    <div className="layer absolute min-h-full min-w-full flex items-center justify-center bg-[#1abc9c] opacity-0 transition-opacity hover:opacity-85 duration-500 cursor-pointer z-30">
      <i className="fa-solid fa-plus text-8xl text-white relative -z-10"></i>
    </div>
  );
}
