import Footer from "../components/shared/Footer";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
function AddOns({ selected, handleAddOns,clickOnline,clickProfile,clickStorage,newProfile,newOnline,newStorage }) {
  const [online, setOnline] = useState("");
  const [storage, setStorage] = useState("");
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    setOnline(newOnline)
    setProfile(newProfile)
    setStorage(newStorage)
  },[newOnline,newProfile,newStorage])
  const handleAddPrice = (e) => {
    const item = {
      value: +e.target.value,
      text: e.target.parentElement.querySelector("h2").textContent,
      id: e.target.id,
    };
    handleAddOns(item);
  };
  const handleOnline = (e) => {
    if (e.target.checked && e.target.id === "online") {
      setOnline("online");
      clickOnline("online");
      e.target.parentNode.classList.add("border-purplishBlue", "bg-mongolia");
    } else {
      setOnline("");
      clickOnline("");
      e.target.parentNode.classList.remove(
        "border-purplishBlue",
        "bg-mongolia"
      );
    }
  };
  const handleProfile = (e) => {
    if (e.target.checked && e.target.id === "profile") {
      setProfile("profile");
      clickProfile("profile");
      e.target.parentNode.classList.add("border-purplishBlue", "bg-mongolia");
    } else {
      setProfile("");
      clickProfile("")
      e.target.parentNode.classList.remove(
        "border-purplishBlue",
        "bg-mongolia"
      );
    }
  };
  const handleStorage = (e) => {
    if (e.target.checked && e.target.id === "storage") {
      setStorage("storage");
      clickStorage("storage");
      e.target.parentNode.classList.add("border-purplishBlue", "bg-mongolia");
    } else {
      setStorage("");
      clickStorage("")
      e.target.parentNode.classList.remove(
        "border-purplishBlue",
        "bg-mongolia"
      );
    }
  };
  return (
    <div className="w-[80%] mx-auto pt-8">
      <h2 className="text-3xl font-bold pb-2 text-marineBlue">Pick add-ons</h2>
      <p className="text-coolGray text-[.95rem]">
        Add-ons help enhance your gaming experience.
      </p>
      <section className="space-y-4 mb-14">
        {/* label-1 */}
        <label htmlFor="online">
          <div className="add-ons  flex justify-between items-center border border-coolgray p-4 rounded-md">
            <input
              type="checkbox"
              name="pick"
              id="online"
              className="w-4 h-4 rounded-full mr-8"
              value={selected === "month" ? 1 : 10}
              onChange={handleAddPrice}
              checked={online === "online"}
              onClick={handleOnline}
            />

            <div className="flex flex-1 justify-between items-center">
              <div>
                <h2 className="font-bold text-base text-marineBlue">
                  Online Service
                </h2>
                <p className="text-sm text-coolGray">
                  Access to multiplayer games
                </p>
              </div>
              <p className="font-normal text-purplishBlue text-sm">
                {selected === "month" ? "+$1/mo" : "+$10/yr"}
              </p>
            </div>
          </div>
        </label>
        {/* label-2 */}
        <label htmlFor="storage">
          <div className="add-ons flex justify-between items-center border border-coolgray p-4 rounded-md">
            <input
              type="checkbox"
              name="pick"
              id="storage"
              className="w-4 h-4 rounded-full mr-8"
              value={selected === "month" ? 2 : 20}
              onChange={handleAddPrice}
              checked={storage === "storage"}
              onClick={handleStorage}
            />

            <div className="flex flex-1 justify-between items-center">
              <div>
                <h2 className="font-bold text-base text-marineBlue">
                  Larger Storage
                </h2>
                <p className="text-sm text-coolGray">Extra 1TB of cloud save</p>
              </div>
              <p className="font-normal text-purplishBlue text-sm">
                {selected === "month" ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          </div>
        </label>
        {/* label-3 */}
        <label htmlFor="profile">
          <div className="add-ons flex justify-between items-center border border-coolgray p-4 rounded-md">
            <input
              type="checkbox"
              name="pick"
              id="profile"
              className="w-4 h-4 rounded-full mr-8"
              value={selected === "month" ? 3 : 30}
              onChange={handleAddPrice}
              checked={profile === "profile"}
              onClick={handleProfile}
            />

            <div className="flex flex-1 justify-between items-center">
              <div>
                <h2 className="font-bold text-base text-marineBlue">
                  Customizable Profile
                </h2>
                <p className="text-sm text-coolGray">
                  Customer theme on your profile
                </p>
              </div>
              <p className="font-normal text-purplishBlue text-sm">
                {selected === "month" ? "+$3/mo" : "+$30/yr"}
              </p>
            </div>
          </div>
        </label>
      </section>

      <Footer
        children="Next Step"
        setStyle="bg-marineBlue hover:opacity-80"
        handleBack={() => navigate("/plan")}
        handleClick={() => navigate("/summary")}
      />
    </div>
  );
}

export default AddOns;
