import '../css/therapists.css';
import React, { useState } from "react";

const therapistsData = [
    {
        name: "Dr. Abdul Manan Khaskheli",
        specialty: "Rehabilitation specialist",
        description: "Dr. Abdul completed his MBBS from Liaquat Medical College Jamshoro, Sindh. He further did Speciality Certificate Exam in Rehabilitation from Royal College of Physicians of UK. He has also done MRCPI from Ireland and MRCPS from Glasgow.",
        img: "/img/therapist/1.png",
        contact: { email: "manan.khaskheli@example.com"}
    },
    {
        name: "Dr. Abdul Munnon Durrani",
        specialty: "Rehabilitation specialist",
        description: "Dr. Abdul Durrani is an experienced, empathetic and highly skilled urologist with over 7 years of experience in his field of specialization.He graduated with honors from GMC Srinagar, India and is a Gold Medalist. Later he got training in Sir Ganga Ram Hospital, in New Delhi, India where he got trained in laparoscopic and Robotic procedures. He is well trained in doing endourologic, uroncologic and andrologic and kidney transplants.",
        img: "/img/therapist/2.png",
        contact: { email: "manan.khaskheli@example.com"}
    },
    {
        name: "Dr. Abdul Salam Al Hakim",
        specialty: "Rehabilitation specialist",
        description: "Dr. Al Hakim joined Emirates Hospitals Group with 16 years of experience in United Kingdom, where he was working as consultant general adult psychiatrist. He achieved his undergraduate medical degree in Europe, then moved to United Kingdom to join psychiatric training program. He has gained a wide-ranging experience in various psychiatric sub-specialties including, Eating Disorder, neuropsychiatry, Rehabilitation Psychiatry, Drugs and alcohol, Child and adolescent Psychiatry, forensic and old age psychiatry. In 2017 Dr Al hakim was also awarded a diploma in Clinical Psychiatry (DCP) from the Royal College in Ireland. In 2020 under European regulation, he was awarded Slovak board of clinic psychiatry.",
        img: "/img/therapist/3.png",
        contact: { email: "manan.khaskheli@example.com"}
    },
    {
        name: "Dr. Abdulraheem Khalaf",
        specialty: "Rehabilitation specialist",
        description: "Dr. Abdulraheem Khalaf, Consultant-Gastroenterology completed his graduation from the University of Baghdad, College of Medicine (MB.ChB) in 1972. He obtained his post graduate qualification in 1981, MRCP (UK) and was selected for the fellowship of Royal College of Physician of Edinburgh UK (FRCP Edin) in 1997. Dr. Khalaf has an extensive clinical experience of over 30 years spanning across Iraq, United Kingdom, Qatar and United Arab Emirates.In UAE, he worked as a consultant Gastroenterologist and Head of the Endoscopy Unit at Gulf Diagnostic Centre Hospital in Abu Dhabi. He also worked as a consultant Gastroenterologist and Head of Endoscopy unit at Madinat Zayed Hospital in Abu Dhabi. Apart from that, he also held academic position as an assistant professor of Internal Medicine and Gastroenterology at the College of Medicine in Baghdad University.",
        img: "/img/therapist/4.png",
        contact: { email: "manan.khaskheli@example.com"}
    },
    {
        name: "Dr. Agata Moscicka",
        specialty: "Rehabilitation specialist",
        description: "Dr. Agata Moscicka, Consultant-Neonatology, MD, Ph.D. has over 20 years of experience in Neonatology and managing & handling Neonatal Intensive Care Unit (NICU). Dr. Agata completed her Diploma of Medical Doctor from the University of Medical Sciences in Poznan. She received her specialization in Pediatrics and later Neonatology in 1999 from Post-graduate Medical Center, Warsaw, Poland. Dr. Agata also holds a Doctor of Medical Sciences (Ph.D.) degree from the University of Medical Sciences in Poznan. Dr. Agata is an International Board-Certified Lactation Consultant as well, helping mothers to establish successful breastfeeding. She received part of her post-graduate training from the University of Louisville and University of Illinois, USA.",
        img: "/img/therapist/5.png",
        contact: { email: "manan.khaskheli@example.com"}
    },
    {
        name: "Dr. Ahmed Elhelaly",
        specialty: "Rehabilitation specialist",
        description: "Dr. Ahmed completed his MBBCH in 2001 from Zagazig University, Faculty of Medicine, Egypt and obtained his Cardiology and Internal Medicine specialization from Socialstyrelsen Sweden. He completed his residency training at a reputed hospital in Sweden. Dr. Ahmed most recently worked as a consultant in Cardiology and Internal Medicine at Jönköping County Hospital, Sweden. He also worked as a consultant at Sheikh Khalifa Medical City Hospital Ajman.",
        img: "/img/therapist/6.png",
        contact: { email: "manan.khaskheli@example.com"}
    },
];

export default function Therapists() {
    const [selectedTherapist, setSelectedTherapist] = useState(null);
    return (
        <div className="therapists-container">
            <h1>Our Therapists</h1>
            <div className="therapists-grid">
                {therapistsData.map((therapist, index) => (
                    <div key={index} className="therapist-item" onClick={() => setSelectedTherapist(therapist)}>
                        <img src={therapist.img} alt={therapist.name} className="therapist-img" />
                        <h3>{therapist.name}</h3>
                        <h4>{therapist.specialty}</h4>
                    </div>
                ))}
            </div>
            {selectedTherapist && (
                <div className="therapist-details">
                    <h2>{selectedTherapist.name}</h2>
                    <h3>{selectedTherapist.specialty}</h3>
                    <p>{selectedTherapist.description}</p>
                    <p><strong>Contact:</strong></p>
                    <p>Email: <a href={`mailto:${selectedTherapist.contact?.email}`}>{selectedTherapist.contact?.email}</a></p>
                    <button onClick={() => setSelectedTherapist(null)}>Close</button>
                </div>
            )}
        </div>
    );
}