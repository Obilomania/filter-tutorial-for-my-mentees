import { useState } from "react";
import styled from "styled-components";

const names = [
  "John",
  "Emma",
  "Michael",
  "Olivia",
  "William",
  "Sophia",
  "James",
  "Isabella",
  "Benjamin",
  "Mia",
  "Lucas",
  "Charlotte",
  "Henry",
  "Amelia",
  "Alexander",
  "Harper",
  "Mason",
  "Evelyn",
  "Ethan",
  "Abigail",
  "Daniel",
  "Emily",
  "Jacob",
  "Avery",
  "David",
  "Ella",
  "Matthew",
  "Scarlett",
  "Joseph",
  "Grace",
  "Samuel",
  "Lily",
  "Andrew",
  "Aria",
];
const SearchFilter = () => {
  const [allName] = useState(names);
  const [searchName, setSearchName] = useState("");

  const handleInputChange = (e) => {
    setSearchName(e.target.value);
  };

    
  const filteredName = allName.filter((name) =>
    name.toLowerCase().includes(searchName.toLowerCase())
  );

    
  return (
    <TheSearch>
      <input
        type="text"
        placeholder="Enter A Name"
        onChange={handleInputChange}
      />
      <div className="names">
        {!filteredName.length ? (
          <p>No Name Found</p>
        ) : (
          filteredName.map((name, index) => (
            <div key={index}>
              <p>{name}</p>
            </div>
          ))
        )}
      </div>
    </TheSearch>
  );
};

const TheSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  padding: 2rem 10rem;
  input {
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    outline: none;
  }
  .names {
    margin: 1rem 0;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
export default SearchFilter;
