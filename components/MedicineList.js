import React from 'react';
import styles from '../styles/Medicines.module.css'

const MedicineList = ({ medicines }) => {
  return (
    <div className={styles.medicineList}>
      {medicines.map((medicine, index) => (
        <div className={styles.medicineItem} key={index}>
          <h2 className={styles.medicineName}>{medicine.Medicine_Name}</h2>
          <p >Price: {medicine.Discounted_Price}</p>
          <p>Manufacturer: {medicine.Manufacturer}</p>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
