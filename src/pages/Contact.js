function Contact() {
      return (
        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4">Reach out to us for any inquiries.</p>
          <form className="mt-6 flex flex-col items-center">
            <input className="border p-2 w-80" type="text" placeholder="Your Name" />
            <input className="border p-2 w-80 mt-2" type="email" placeholder="Your Email" />
            <textarea className="border p-2 w-80 mt-2" placeholder="Your Message"></textarea>
            <button className="bg-blue-500 text-white p-2 mt-4 w-80">Send</button>
          </form>
        </div>
      );
    }
    
    export default Contact;
    