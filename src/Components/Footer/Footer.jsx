export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white text-center">
      <div className="grid grid-cols-1 py-24 md:grid-cols-3 gap-4 items-center container">
        <div className="space-y-4">
          <h4 className="font-semibold text-3xl">LOCATION</h4>
          <span className="block">2215 John Daniel Drive</span>
          <span className="block">Clark, MO 65243</span>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-3xl">AROUND THE WEB</h4>
          <ul className="icons flex items-center justify-center gap-2">
            <li className="size-10 border rounded-full flex items-center justify-center">
              <i className="fa-brands fa-square-facebook fa-lg"></i>
            </li>
            <li className="size-10 border rounded-full flex items-center justify-center">
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </li>
            <li className="size-10 border rounded-full flex items-center justify-center">
              <i className="fa-brands fa-square-x-twitter fa-lg"></i>
            </li>
            <li className="size-10 border rounded-full flex items-center justify-center">
              <i className="fa-brands fa-square-github fa-lg"></i>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-3xl">ABOUT FREELANCER</h4>
          <p className="mx-auto max-w-[400px]">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className="bg-slate-800 py-6">Copyright © Your Website 2021</div>
    </footer>
  );
}
