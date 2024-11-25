import avatar from '@/assets/imgs/avataaars.svg';
import Header from '@/Utilities/Header/Header';

export default function Home() {
  return (
    <div className="home-section flex justify-center items-center flex-col gap-4 min-h-screen bg-[#1abc9c]">
      <img src={avatar} className="w-64 mb-3" alt="avatar" />
      <Header color="#fff" text="Home Component" />
      <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
