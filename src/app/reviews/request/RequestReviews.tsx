import { Button, Slider, Text, Textarea, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import {
  FORM_FIELDS,
  getCommentPlaceholder,
  getInitialValues,
  Inputs,
  schema,
  SLIDER_MARKS,
} from "./RequestReview.helpers";
import { useStyles } from "./RequestReview.styles";

export function RequestReviews() {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: getInitialValues(),
    schema: zodResolver(schema),
  });

  function handleSubmit(data: Inputs) {
    console.log(data);
  }

  function renderTitle(title: string, required = true) {
    return (
      <Title order={2}>
        {title}
        {required && <span className={classes.asterisk}>*</span>}
      </Title>
    );
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className={classes.form}>
      {FORM_FIELDS.map((field) => {
        const { error, ...props } = form.getInputProps(field.input);

        return (
          <div key={field.input} className={classes.field}>
            {renderTitle(field.label)}
            <Text color="gray">{field.description}</Text>
            <div className={classes.rating}>
              {/* FIXME: Use stars */}
              <Slider
                {...props}
                marks={SLIDER_MARKS}
                defaultValue={0}
                step={1}
                min={1}
                max={5}
                size="xl"
              />
              <Text className={classes.error}>{error}</Text>
            </div>
            <Textarea
              {...form.getInputProps(field.commentsInput)}
              // FIXME: Re-renders on state updates
              placeholder={getCommentPlaceholder()}
              className={classes.textarea}
              minRows={3}
              autosize
            />
          </div>
        );
      })}

      <div className={classes.field}>
        {renderTitle("Any other feedback?", false)}
        <Textarea
          placeholder="You know the drill"
          className={classes.textarea}
          minRows={4}
          autosize
        />
      </div>

      <div className={classes.footer}>
        <Button type="submit" size="lg">
          Submit review
        </Button>
      </div>
    </form>
  );
}
