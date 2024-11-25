import Header from '../../Utilities/Header/Header';

export default function Contact() {
  return (
    <div className="contact-section bg-white mt-4">
      <div className="container min-h-screen flex items-center justify-center flex-col gap-4">
        <Header text="Contact Component" />
        <form className="min-w-[0px] max-w-[750px] space-y-10">
          <input
            type="text"
            placeholder="user name"
            id="userName"
            name="userName"
            className="p-3 border-b rounded-lg w-full placeholder:text-gray-600 outline-transparent"
          />
          <input
            type="number"
            placeholder="user age"
            id="userName"
            name="userName"
            className="p-3 border-b rounded-lg w-full placeholder:text-gray-600 outline-transparent"
          />
          <input
            type="email"
            placeholder="user email"
            id="userName"
            name="userName"
            className="p-3 border-b rounded-lg w-full placeholder:text-gray-600 outline-transparent"
          />
          <input
            type="password"
            placeholder="user password"
            id="userName"
            name="userName"
            className="p-3 border-b rounded-lg w-full placeholder:text-gray-600 outline-transparent"
          />
          <button
            className="text-white bg-[#1abc9c] p-2 rounded transition-opacity hover:opacity-90"
            type="submit"
            onClick={e => {
              e.preventDefault();
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
