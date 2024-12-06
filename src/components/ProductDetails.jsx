import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconsComponent from "./ui/IconsComponent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const FeatureList = ({ features }) => {
  return (
    <div>
      <Typography sx={{ color: "text.secondary", mb: "0" }}>
        Features
      </Typography>
      <List>
        {Object.entries(features).map(([key, value]) => (
          <li key={key}>
            &#x2022;
            <Typography sx={{ color: "text.secondary", mb: "0" }}>
              {key}: {value}
            </Typography>
          </li>
        ))}
      </List>
    </div>
  );
};

const AttachmentsList = ({ attachments }) => {
  return (
    <div>
      <Typography sx={{ color: "text.secondary", mb: "0" }}>
        Attachments
      </Typography>
      <List>
        {attachments.length > 0 ? (
          attachments.map((attachment, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton href={attachment.file_link}>
                <ListItemIcon>
                  <IconsComponent icon="attachment" />
                </ListItemIcon>
                <ListItemText primary={attachment.file_label} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <Typography sx={{ color: "text.secondary" }}>
            No attachments available
          </Typography>
        )}
      </List>
    </div>
  );
};

const KeywordsList = ({ keywords }) => {
  return (
    <div>
      <Typography sx={{ color: "text.secondary", mb: "0" }}>
        Keywords
      </Typography>
      <Stack direction="row" spacing={1}>
        {keywords.length > 0 ? (
          keywords.map((keyword, index) => <Chip label={keyword} key={index} />)
        ) : (
          <Typography sx={{ color: "text.secondary" }}>
            No keywords available
          </Typography>
        )}
      </Stack>
    </div>
  );
};

const ProductDetails = ({ features, attachments, keywords }) => {
  return (
    <>
      <FeatureList features={features} />
      <AttachmentsList attachments={attachments} />
      <KeywordsList keywords={keywords} />
    </>
  );
};

export default ProductDetails;
