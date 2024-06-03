import { useState } from 'react';
import MedicineList from '../components/MedicineList';
import Pagination from '../components/Pagination';
import styles from '../styles/Medicines.module.css';
import path from 'path';
import fs from 'fs';

const Medicines = ({ initialMedicines }) => {
  const [medicines, setMedicines] = useState(initialMedicines);
  const [filteredMedicines, setFilteredMedicines] = useState(initialMedicines);
  const [currentPage, setCurrentPage] = useState(1);
  const medicinesPerPage = 10;

  const indexOfLastMedicine = currentPage * medicinesPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - medicinesPerPage;
  const currentMedicines = filteredMedicines.slice(indexOfFirstMedicine, indexOfLastMedicine);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <h1>Medicine List</h1>
      {currentMedicines.length > 0 ? (
        <>
          <MedicineList medicines={currentMedicines} />
          <Pagination
            totalMedicines={filteredMedicines.length}
            medicinesPerPage={medicinesPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'public/output.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const initialMedicines = JSON.parse(jsonData);

  return {
    props: { initialMedicines },
  };
}

export default Medicines;
