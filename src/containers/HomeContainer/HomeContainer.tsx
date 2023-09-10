import React, { FC } from "react";
import { AppView } from "@toxic/backoffice-ui";
import { useTitle } from "react-use";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Logo } from "../../components";
import { LogoVariant } from "../../enums";

type HomeContainerProps = {
  pageTitle: string;
};

export const HomeContainer: FC<HomeContainerProps> = ({ pageTitle }) => {
  useTitle(pageTitle);

  const apps = [
    {
      id: "6455684710",
      name: "Learning together",
      description:
        "Your baby will be able to explore a variety of colors, letters, numbers and shapes by selecting them on the screen while listening to their names.",
      logo: "/logos/learning-together.png",
      storeUrl: "",
    },
    {
      id: "6456039757",
      name: "DeckKeeper",
      description:
        "This app provides the ultimate gaming experience. You no longer have to waste time shuffling cards or choosing the next card - DeckKeeper does it all automatically.",
      logo: "/logos/DeckKeeper.png",
    },
  ];

  return (
    <AppView>
      <Box
        py={5}
        px={3}
        bgcolor={"#444444"}
        color={"#fff"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Logo variant={LogoVariant.Page} />
      </Box>

      <Box overflow={"auto"} pt={5} pb={10} px={3} maxWidth={1200} mx={"auto"}>
        <Grid container spacing={3}>
          {apps.map(({ id, name, description, logo }) => (
            <Grid md={6} item key={name}>
              <Paper
                component={Box}
                display={"grid"}
                gridTemplateColumns={"130px minmax(200px, 1fr)"}
                gridGap={24}
                elevation={2}
                padding={2}
              >
                <Box display={"flex"} flexDirection={"column"} gridGap={24}>
                  <img alt={name} src={logo} title={name} />

                  <a
                    href={`https://apps.apple.com/us/app/id${id}`}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      src={"/app-store.png"}
                      alt={"Download from App Store"}
                    />
                  </a>
                </Box>

                <Box>
                  <Typography gutterBottom variant="h4">
                    <strong>{name}</strong>
                  </Typography>
                  <Typography color="textSecondary">{description}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider
          variant={"middle"}
          component={Box}
          width={600}
          mx={"auto !important"}
          my={"60px !important"}
        />

        <Box
          mt={5}
          display={"flex"}
          alignItems={"center"}
          gridGap={24}
          justifyContent={"center"}
        >
          <Typography variant={"h4"}>Email us:</Typography>

          <Button
            variant={"contained"}
            size={"large"}
            color={"secondary"}
            href={
              'mailto:yashin.ziby@gmail.com?Subject=Contact from site "ZiBY Apps"'
            }
          >
            Send message
          </Button>
        </Box>
      </Box>
    </AppView>
  );
};
