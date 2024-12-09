import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import IconsComponent from "../ui/IconsComponent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import DottedList from "./DottedList";

const AttachmentsList = ({ attachments }) => {
  return (
    <Box sx={{ mb: 2, mt: 0 }}>
      <Typography
        sx={{ color: "text.secondary", fontWeight: 500, fontSize: "1rem" }}
      >
        Attachments
      </Typography>
      {attachments && attachments.length > 0 ? (
        <List
          disablePadding
          sx={{
            "& .MuiListItem-root": { paddingY: 0.5 },
          }}
        >
          {attachments.map((attachment, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 0,
                listStyle: "none",
              }}
            >
              <Link
                href={attachment?.file_link}
                underline="hover"
                target="_blank"
              >
                <IconsComponent icon="attachment" size="16px" />
                <Typography
                  component="span"
                  sx={{ color: "text.secondary", fontWeight: 500 }}
                >
                  {attachment?.file_label}
                </Typography>
              </Link>
            </Box>
          ))}
        </List>
      ) : (
        <Typography sx={{ color: "text.secondary", mt: 1 }}>
          No attachments available
        </Typography>
      )}
    </Box>
  );
};

const KeywordsList = ({ keywords }) => {
  return (
    <Box>
      <Typography sx={{ color: "text.secondary", mb: "0" }}>
        Keywords
      </Typography>
      <Stack direction="row" spacing={1}>
        {keywords && keywords.length > 0 ? (
          keywords.map((keyword, index) => <Chip label={keyword} key={index} />)
        ) : (
          <Typography sx={{ color: "text.secondary" }}>
            No keywords available
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

const ProductDetails = ({ features, attachments, keywords }) => {
  return (
    <>
      <DottedList list={features} title="Features" />
      <AttachmentsList attachments={attachments} />
      <KeywordsList keywords={keywords} />
    </>
  );
};

export default ProductDetails;
