"use strict";

function hospital(input) {
  let days = input[0];
  let doctors = 7;
  let patientSentToOtherHospitals = 0;
  let checkedPatients = 0;

  for (let i = 1; i <= days; i++) {
    let patients = input[i];
    if (i % 3 === 0) {
      if (patientSentToOtherHospitals > checkedPatients) {
        doctors++;
      }
    }
    if (doctors >= patients) {
      checkedPatients += patients;
    } else {
      patientSentToOtherHospitals += patients - doctors;
      checkedPatients += doctors;
    }
  }
  console.log(`Treated patients: ${checkedPatients}`);
  console.log(`Untreated patients: ${patientSentToOtherHospitals}`);
}

hospital([4, 7, 27, 9, 1]);
