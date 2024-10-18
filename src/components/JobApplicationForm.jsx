import { useState } from "react";
import { fileUpload } from "../constants/constants";

export default function JobApplicationForm() {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    phone: "",
    age: "",
    birthProvince: "",
    residenceProvince: "",
    consent: false,
    relocate: "",
    weeklyTravel: "",
    licenses: [],
    machineUse: "",
    workExperience: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Per favore, seleziona un file PDF.");
        setFileName("");
        return;
      }
      setFileName(file.name);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      if (name === "licenses") {
        setFormData({
          ...formData,
          [name]: checked
            ? [...formData.licenses, value]
            : formData.licenses.filter((license) => license !== value),
        });
      } else {
        setFormData({
          ...formData,
          [name]: checked,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    data.append("city", formData.city);
    data.append("phone", formData.phone);
    data.append("age", formData.age);
    data.append("birthProvince", formData.birthProvince);
    data.append("residenceProvince", formData.residenceProvince);
    data.append("consent", formData.consent);
    data.append("relocate", formData.relocate);
    data.append("weeklyTravel", formData.weeklyTravel);
    data.append("licenses", JSON.stringify(formData.licenses));
    data.append("machineUse", formData.machineUse);
    data.append("workExperience", formData.workExperience);
    data.append("fileUpload", event.target.fileUpload.files[0]);

    try {
      const response = await fetch("https://politogroup.com/send_email.php", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("Modulo inviato con successo.");
        // Resetta il modulo e lo stato del file
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          city: "",
          phone: "",
          age: "",
          birthProvince: "",
          residenceProvince: "",
          consent: false,
          relocate: "",
          weeklyTravel: "",
          licenses: [],
          machineUse: "",
          workExperience: "",
        });
        setFileName("");
        event.target.fileUpload.value = ""; // Resetta il campo file
      } else {
        alert("Errore nell'invio del modulo: " + result.message);
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Errore nell'invio del modulo.");
    }
  };

  return (
    <section className="w-full h-auto bg-[#00000010] py-20 px-[5%] lg:px-[10%]">
      <div className="grid sm:grid-cols-2 gap-8 xl:grid-cols-3 pt-20 mb-20 items-center">
        <h1 className="text-4xl font-bold text-[--g-sky-blue]">
          Lavora con noi
        </h1>
        <div className="w-full h-[1px] bg-black xl:col-span-2"></div>
      </div>

      <div className="w-full h-auto sm:px-[5%]">
        <div className="w-full bg-white py-8 px-4 sm:p-8 grid grid-cols-1 gap-4 rounded-lg">
          <div className="w-full border-black/5 rounded-md">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
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
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <span className="font-bold">
                    Città <b className="text-[--g-orange]">*</b>
                  </span>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="py-2 px-4 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">
                    Numero di Telefono <b className="text-[--g-orange]">*</b>
                  </span>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="py-2 px-4 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">
                    Età <b className="text-[--g-orange]">*</b>
                  </span>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="py-2 px-4 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="font-bold">
                    Provincia di Nascita <b className="text-[--g-orange]">*</b>
                  </span>
                  <input
                    type="text"
                    name="birthProvince"
                    value={formData.birthProvince}
                    onChange={handleChange}
                    className="py-2 px-4 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">
                    Provincia di Residenza{" "}
                    <b className="text-[--g-orange]">*</b>
                  </span>
                  <input
                    type="text"
                    name="residenceProvince"
                    value={formData.residenceProvince}
                    onChange={handleChange}
                    className="py-2 px-4 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <span className="block font-bold">
                    Disponibilità a trasferirsi{" "}
                    <b className="text-[--g-orange]">*</b>
                  </span>
                  <div className="flex items-center gap-6">
                    <label>
                      <input
                        type="radio"
                        name="relocate"
                        value="Si"
                        checked={formData.relocate === "Si"}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      Si
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="relocate"
                        value="No"
                        checked={formData.relocate === "No"}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <span className="block font-bold">
                    Disponibilità a trasferte settimanali{" "}
                    <b className="text-[--g-orange]">*</b>
                  </span>
                  <div className="flex items-center gap-6">
                    <label>
                      <input
                        type="radio"
                        name="weeklyTravel"
                        value="Si"
                        checked={formData.weeklyTravel === "Si"}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      Si
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="weeklyTravel"
                        value="No"
                        checked={formData.weeklyTravel === "No"}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <span className="block font-bold">
                    Patenti possedute <b className="text-[--g-orange]">*</b>
                  </span>
                  <div className="flex items-center gap-6">
                    <label>
                      <input
                        type="checkbox"
                        name="licenses"
                        value="B"
                        checked={formData.licenses.includes("B")}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      B
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="licenses"
                        value="C"
                        checked={formData.licenses.includes("C")}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      C
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="licenses"
                        value="CE"
                        checked={formData.licenses.includes("CE")}
                        onChange={handleChange}
                        className="mr-1"
                      />
                      CE
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-bold">
                  Utilizzo Macchine Operatrici{" "}
                  <b className="text-[--g-orange]">*</b>
                </span>
                <textarea
                  name="machineUse"
                  className="min-h-32 max-h-64 py-2 px-4 border border-gray-300 rounded"
                  value={formData.machineUse}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex flex-col">
                <span className="font-bold">
                  Esperienza Lavorativa <b className="text-[--g-orange]">*</b>
                </span>
                <textarea
                  name="workExperience"
                  className="min-h-32 max-h-64 py-2 px-4 border border-gray-300 rounded"
                  value={formData.workExperience}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <span className="font-bold">
                  {" "}
                  Carica il tuo CV (formato pdf){" "}
                  <b className="text-[--g-orange]">*</b>
                </span>
                <label
                  htmlFor="file-upload"
                  className="bg-gray-50 text-gray-800 border border-dashed border-gray-300
              flex flex-col justify-center items-center gap-4 p-4 rounded cursor-pointer"
                >
                  <img className="w-14" src={fileUpload} alt="" />
                  <span>Fai clic per caricar il file</span>
                </label>
                <input
                  type="file"
                  id="file-upload"
                  name="fileUpload"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf"
                />

                {fileName && (
                  <p className="px-1 text-black font-bold">
                    File selezionato: {fileName}
                  </p>
                )}
              </div>

              <div className="flex gap-x-4 items-center">
                <input
                  type="checkbox"
                  name="consent"
                  className="cursor-pointer"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <span className="text-[14px] mt-0.5">
                  Ho letto la Privacy Policy e acconsento al trattamento dei
                  miei dati personali
                </span>
              </div>

              <button className="mt-6 rounded-md bg-[--g-blue] text-white font-bold py-2 px-12">
                Invia
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
