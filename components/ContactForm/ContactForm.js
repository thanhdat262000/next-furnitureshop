import { CircularProgress, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { createCustomer } from "../../api";
import TopTitle from "../TopTitle/TopTitle";
import useStyles from "./styles";
function ContactForm(props) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [sendStatus, setSendStatus] = useState("");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    createCustomer(data)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200) {
          setSendStatus("Send successfully!");
        } else setSendStatus("An error occur!");
      })
      .catch((error) => setSendStatus("Error!"));
  };
  const listInput = [
    { name: "name", label: "Name" },
    { name: "address", label: "Address" },
    {
      name: "number",
      label: "Number",
      rule: { min: 16, max: 99 },
    },
    {
      name: "email ",
      label: "Email",
      rule: {
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Invalid email",
        },
      },
    },
    { name: "content", label: "You want to say..." },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TopTitle title="CONTACT US" />
        <Typography variant="h4" className={classes.mainTitle}>
          Creative project? Let&#39;s have a productive talk.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.formContainer}
        >
          {listInput.map((input, index) => (
            <Controller
              key={index}
              name={input.name}
              control={control}
              defaultValue=""
              rules={{ required: true, ...input.rule }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  type={input.name === "number" ? "number" : "text"}
                  error={errors[input.name] !== undefined}
                  variant="outlined"
                  label={input.label}
                  margin="dense"
                  multiline={input.name === "content"}
                  rows={5}
                  helperText={
                    errors[input.name]?.type === "required"
                      ? "This field is required"
                      : errors[input.name]?.type === "pattern"
                      ? "Invalid email"
                      : errors[input.name]?.type === "min" ||
                        errors[input.name]?.type === "max"
                      ? "Invalid age"
                      : ""
                  }
                />
              )}
            />
          ))}

          <button type="submit" className={classes.submitButton}>
            <Typography>Send</Typography>
          </button>
          <div className={classes.sendStatus}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Typography>{sendStatus}</Typography>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
