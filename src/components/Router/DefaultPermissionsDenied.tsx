import React, { memo } from "react";
import { Box, Typography } from "@material-ui/core";

const helpDeskUrl =
  "https://helpdesk.x-plarium.com/servicedesk/customer/portal/8/create/176";

export const DefaultPermissionsDenied = memo(() => (
  <Box
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    flexDirection={"column"}
    pt={10}
  >
    <Typography variant={"h1"}>🤬</Typography>
    <br />
    <Typography variant={"body1"} color={"textSecondary"}>
      Unfortunately, you don't have a permission to access this page.
    </Typography>
    <Typography variant={"body1"} color={"textSecondary"}>
      You can request an access via{" "}
      <a href={helpDeskUrl} target={"_blank"} rel="noreferrer">
        HelpDesk
      </a>
      .
    </Typography>
  </Box>
));
DefaultPermissionsDenied.displayName = "DefaultPermissionsDenied";
