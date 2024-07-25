import { styled } from "@mui/material/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowRightIcon sx={{ width: "17px", height: "15px", color: "#2568EF" }} />}
    {...props}
  />
))(({ theme }) => ({
    borderRadius: "8px",
    minwidth: "5px",
    color: "#fff",
    border: "nome",
    
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(37, 104, 239, 1)"
      : "rgba(44, 44, 44, 1)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "",
  width: "560px",
}));

interface Props {
  question: string;
  response: string;
}

export default function Questions({ question, response }: Props) {
  // const handleChange =
  //   (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
  //     setExpanded(newExpanded ? panel : false);
  //   };


  const responseLines = response.split('\n')
  
  
  console.log(responseLines)

  return (
    <div >
      <Accordion  style={{border:"none", borderRadius: "9px", marginTop:"16px",  minWidth:"56"}}>
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className=""
        >
          <Typography className="">{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {responseLines.map( (line)=>( 
            <>
              <Typography>{line}</Typography>
              <br/>
            </>
           ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
