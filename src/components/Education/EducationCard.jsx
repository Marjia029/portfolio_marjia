import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EducationCard = (props) => {
  return (
    <Card
      className="education-card-view"
      style={{
        display: "flex",
        flexDirection: "row",  // Horizontal layout
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      {/* Left side: Image */}
      <Card.Img
        variant="left"
        src={props.imgPath}
        alt="education-img"
        style={{
          width: "150px",   // Control image width for a horizontal card
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px",
          margin: "10px",
        }}
      />

      {/* Right side: Text */}
      <Card.Body
        style={{
          flex: 1,  // Allow text to take up the rest of the space
          paddingLeft: "20px",  // Add some padding to the left
          textAlign: "left"
        }}
      >
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.subtitle}</Card.Subtitle>
        {props.cgpa && (
          <div style={{ fontSize: "14px", marginTop: "5px" }}>
            <strong>CGPA:</strong> {props.cgpa}
          </div>
        )}
        <Card.Text style={{ textAlign: "justify", fontSize: "14px" }}>
          {props.description}
        </Card.Text>
        {/* Add Button if needed */}
        {props.link && (
          <Button
            variant="primary"
            href={props.link}
            target="_blank"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            {props.buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
