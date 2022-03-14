import { useEffect, useState } from "react";

export const AddHouse = () => {
  const [house, setHouse] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "bachelor",
    image: "",
  });
  console.log("house:", house);

  const handleChange = (e) => {
    setHouse({ ...house, [e.target.name]: e.target.value });
  };

  const submit = () => {
    try {
      fetch("http://localhost:8080/houses", {
        method: "POST",
        body: JSON.stringify(house),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="name"
          name="name"
          value={house.name}
          required
        />
        <br />
        <label>ownerName</label>
        <input
          name="ownerName"
          value={house.ownerName}
          type="text"
          onChange={(e) => handleChange(e)}
          className="ownerName"
          required
        />
        <br />
        <label>address</label>
        <input
          name="address"
          value={house.address}
          type="text"
          onChange={(e) => handleChange(e)}
          className="address"
          required
        />
        <br />
        <label>areaCode</label>
        <input
          name="areaCode"
          value={house.areaCode}
          type="text"
          onChange={(e) => handleChange(e)}
          className="areaCode"
          required
        />
        <br />
        <label>rent</label>
        <input
          name="rent"
          value={house.rent}
          type="text"
          onChange={(e) => handleChange(e)}
          className="rent"
          required
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          checked={house.bachelor}
          type="checkbox"
          onChange={(e) => handleChange(e)}
          className="bachelor"
        />
        <br />
        <label>married</label>
        <input
          checked={house.married}
          type="checkbox"
          onChange={(e) => handleChange(e)}
          className="married"
        />
        <br />
        <label>image</label>
        <input
          name="image"
          value={house.image}
          type="text"
          onChange={(e) => handleChange(e)}
          className="image"
          required
        />
        <br />
        <input className="submitBtn" type="submit" onClick={submit} />
      </form>
    </div>
  );
};
