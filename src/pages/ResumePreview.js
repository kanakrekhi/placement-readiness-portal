import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { FaDownload, FaPrint } from "react-icons/fa";

const ResumePreview = ({ data }) => {
  const resumeRef = useRef();

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>${data.fullName || "Resume"}</title>
          <style>
            body { font-family: 'Arial', sans-serif; margin: 40px; color: #333; }
            h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
            h2 { color: #34495e; border-bottom: 1px solid #bdc3c7; padding-bottom: 5px; margin-top: 20px; }
            .section { margin-bottom: 20px; }
            .item { margin-bottom: 15px; }
            .item-title { font-weight: bold; color: #2c3e50; }
            .item-subtitle { font-style: italic; color: #7f8c8d; }
            ul { margin: 5px 0; padding-left: 20px; }
            li { margin-bottom: 3px; }
          </style>
        </head>
        <body>
          ${document.getElementById("resume-content").innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleDownloadPDF = () => {
    handlePrint();
  };

  return (
    <Card className="bg-white text-dark p-4" style={{ minHeight: "500px" }}>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="outline-primary" className="me-2" onClick={handlePrint}>
          <FaPrint /> Print
        </Button>
        <Button variant="outline-success" onClick={handleDownloadPDF}>
          <FaDownload /> PDF
        </Button>
      </div>
      <div id="resume-content" ref={resumeRef}>
        <h1>{data.fullName || "Your Name"}</h1>
        <p>
          {data.email && <span>{data.email} | </span>}
          {data.phone && <span>{data.phone} | </span>}
          {data.linkedin && <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
        </p>

        {data.summary && (
          <div className="section">
            <h2>Professional Summary</h2>
            <p>{data.summary}</p>
          </div>
        )}

        {data.education.some(e => e.degree || e.institution) && (
          <div className="section">
            <h2>Education</h2>
            {data.education.map((edu, idx) => (
              <div key={idx} className="item">
                <div className="item-title">{edu.degree || "Degree"}</div>
                <div className="item-subtitle">{edu.institution || "Institution"}</div>
                <div>{edu.year}{edu.grade && ` | ${edu.grade}`}</div>
              </div>
            ))}
          </div>
        )}

        {data.experience.some(e => e.jobTitle || e.company) && (
          <div className="section">
            <h2>Work Experience</h2>
            {data.experience.map((exp, idx) => (
              <div key={idx} className="item">
                <div className="item-title">{exp.jobTitle || "Job Title"} at {exp.company || "Company"}</div>
                <div className="item-subtitle">{exp.duration}</div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {data.skills && (
          <div className="section">
            <h2>Skills</h2>
            <p>{data.skills}</p>
          </div>
        )}

        {data.projects.some(p => p.title) && (
          <div className="section">
            <h2>Projects</h2>
            {data.projects.map((proj, idx) => (
              <div key={idx} className="item">
                <div className="item-title">{proj.title}</div>
                <div className="item-subtitle">{proj.technologies}</div>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>
        )}

        {data.certifications.some(c => c.name) && (
          <div className="section">
            <h2>Certifications</h2>
            {data.certifications.map((cert, idx) => (
              <div key={idx} className="item">
                <span className="item-title">{cert.name}</span> – {cert.issuer} ({cert.year})
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ResumePreview;