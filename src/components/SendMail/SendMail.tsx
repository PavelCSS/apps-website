import React, { FC, useState } from "react";
import axios from "axios";
import { Form, FormRow } from "@toxic/backoffice-ui";
import { TextField } from "@toxic/ui";
import { Button, Typography } from "@material-ui/core";

type SendMailProps = {
  recipient: string;
};

export const SendMail: FC<SendMailProps> = ({ recipient, ...props }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async () => {
    const response = await axios.post(
      "https://api.algobook.info/v1/mail/send",
      {
        subject: `Message from ${email}`,
        text: `
        Name: ${name}
        Client-email: ${email}
        
        
        ${message}`,
        recipient, // This is your email that we will send all messages to
      }
    );
  };

  return (
    <Form width={600} mx={"auto"} mt={5}>
      <Typography variant={"h3"}>Contact form</Typography>

      <FormRow mt={3}>
        <TextField
          autoFocus
          fullWidth
          variant={"outlined"}
          label={"Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormRow>
      <FormRow mt={3}>
        <TextField
          autoFocus
          fullWidth
          variant={"outlined"}
          label={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow mt={3}>
        <TextField
          autoFocus
          fullWidth
          multiline
          rows={5}
          variant={"outlined"}
          label={"Message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormRow>

      <FormRow mt={3}>
        <Button
          variant={"contained"}
          size={"large"}
          color={"secondary"}
          onClick={sendMail}
        >
          Send
        </Button>
      </FormRow>
    </Form>
  );
};
