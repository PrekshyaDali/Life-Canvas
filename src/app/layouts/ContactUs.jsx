import Button from "../components/Button";

export default function ContactUs() {
  return (
    <div className="w-full h-screen flex justify-center pt-5 ">
      <div className="flex flex-col space-y-3 h-fit border-gray-100 rounded-md shadow-md  border-2 p-5">
        <div>
          <h1 className="text-3xl font-semibold">Contact Us</h1>
        </div>

        <div className="flex flex-col space-y-5  sm:flex-row sm:space-y-0 sm:space-x-5 w-full">
          <div className="w-full">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              className="w-full h-10 border-2 border-orange-300 bg-transparent rounded-md p-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              className="w-full h-10 border-2 border-orange-300  bg-transparent rounded-md p-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            className="w-full h-10 border-2 border-orange-300 bg-transparent rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="Subject">Subject</label>
          <input
            type="text"
            className="w-full h-10 border-2 border-orange-300 bg-transparent rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="Message">Message</label>
          <textarea
            type="text"
            cols={20}
            rows={4}
            className="bg-transparent w-full border-2 border-orange-300 rounded-md p-2"
          />
        </div>
        <div className="flex justify-end">
          <Button name="Submit"></Button>
        </div>
      </div>
    </div>
  );
}
