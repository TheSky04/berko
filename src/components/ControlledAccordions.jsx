import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { t } = useTranslation();

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          maxWidth: "90%",
          padding: "2rem .5rem",
          marginBottom: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.5rem" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "2rem",
              color: "#181818",
              fontFamily: "inherit",
              fontWeight: "500",
            }}
          >
            {t("Question1")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "1.8rem",
              fontFamily: "inherit",
            }}
          >
            {t("Question1Text")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          maxWidth: "90%",
          padding: "2rem .5rem",
          marginBottom: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.5rem" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "2rem",
              color: "#181818",
              fontFamily: "inherit",
              fontWeight: "500",
            }}
          >
            {t("Question2")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "1.8rem",
              fontFamily: "inherit",
            }}
          >
            {t("Question2Text")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          maxWidth: "90%",
          padding: "2rem .5rem",
          marginBottom: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.5rem" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "2rem",
              color: "#181818",
              fontFamily: "inherit",
              fontWeight: "500",
            }}
          >
            {t("Question3")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "1.8rem",
              fontFamily: "inherit",
            }}
          >
            {t("Question3Text")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          maxWidth: "90%",
          padding: "2rem .5rem",
          marginBottom: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2.5rem" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "2rem",
              color: "#181818",
              fontFamily: "inherit",
              fontWeight: "500",
            }}
          >
            {t("Question4")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontSize: "1.8rem",
              fontFamily: "inherit",
            }}
          >
            {t("Question4Text")}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
