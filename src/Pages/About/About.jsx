import Header from '@/Utilities/Header/Header';

export default function About() {
  return (
    <div className="about-section min-h-screen bg-[#1abc9c] text-white flex items-center justify-center flex-col gap-5">
      <Header text="About Component" color="#fff" />
      <div className="text grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start max-w-[1100px] gap-6">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
