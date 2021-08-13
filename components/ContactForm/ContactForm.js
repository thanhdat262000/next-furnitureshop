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
          setSendStatus("Gửi thành công!");
        } else setSendStatus("Có lỗi xảy ra, vui lòng thử lại!");
      })
      .catch((error) => setSendStatus("Có lỗi xảy ra, vui lòng thử lại!"));
  };
  const listInput = [
    { name: "name", label: "Tên" },
    { name: "address", label: "Địa chỉ" },
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
          message: "Email không hợp lệ!",
        },
      },
    },
    { name: "content", label: "Lời nhắn" },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TopTitle title="LIỆN HỆ" />
        <Typography variant="h4" className={classes.mainTitle}>
          Gửi ý kiến cho chúng tôi
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
                      ? "Vui lòng điền thông tin"
                      : errors[input.name]?.type === "pattern"
                      ? "Email không hợp lệ"
                      : errors[input.name]?.type === "min" ||
                        errors[input.name]?.type === "max"
                      ? "Tuổi không hợp lệ"
                      : ""
                  }
                />
              )}
            />
          ))}

          <button type="submit" className={classes.submitButton}>
            <Typography>Gửi</Typography>
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
