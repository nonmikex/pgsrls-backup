import { useState } from "react";
import heroMainImg from "../assets/header-banner.jpg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch(
        "https://politogroup.com/send_email_business.php",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("Messaggio inviato con successo.");
        // Resetta il modulo
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        alert("Errore nell'invio del messaggio: " + result.message);
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Errore nell'invio del messaggio.");
    }
  };

  return (
    <section className="w-full h-full overflow-hidden">
      <div
        style={{
          backgroundImage: `url("${heroMainImg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-full h-full mt-[3.75rem] py-20 px-[5%] bg-black/50 flex flex-col justify-center items-center xl:px-[10%]"
          style={{
            backdropFilter: "blur(4px)",
          }}
        >
          <h4 className="text-5xl text-white text-center font-semibold mb-8">
            Richiedi informazioni
          </h4>
          <form
            className="w-full md:w-[600px] bg-white p-8 rounded-lg flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-bold">
                  Nome <b className="text-[--g-orange]">*</b>
                </span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="py-2 px-4 border border-gray-300 rounded"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">
                  Cognome <b className="text-[--g-orange]">*</b>
                </span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="py-2 px-4 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">
                Email <b className="text-[--g-orange]">*</b>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-2 px-4 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">
                Messaggio <b className="text-[--g-orange]">*</b>
              </span>
              <textarea
                name="message"
                className="min-h-[200px] max-h-[200px] py-2 px-4 border border-gray-300 rounded"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="rounded-md bg-[--g-blue] text-white font-bold py-2 px-12">
              Invia
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
