import { Button, Slider, Text, Textarea, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { Video } from "app/videos";
import { useState } from "react";
import { useAddReview } from "../reviews.api";
import {
  FORM_FIELDS,
  getCommentPlaceholder,
  getInitialValues,
  Inputs,
  schema,
  SLIDER_MARKS,
} from "./SubmitReviewForm.helpers";
import { useStyles } from "./SubmitReviewForm.styles";

interface SubmitReviewFormProps {
  className?: string;
  video: Video;
  onSave: () => void;
}

export function SubmitReviewForm({
  className,
  video,
  onSave,
}: SubmitReviewFormProps) {
  const { classes, cx } = useStyles();
  const form = useForm({
    initialValues: getInitialValues(),
    schema: zodResolver(schema),
  });
  const { mutate: addReview, isLoading } = useAddReview(video);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(data: Inputs) {
    addReview(
      { ...data, videoId: video.id },
      {
        onSuccess() {
          setIsSuccess(true);
          onSave();
        },
      }
    );
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
    <form
      onSubmit={form.onSubmit(handleSubmit)}
      className={cx(className, classes.form, { success: isSuccess })}
    >
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
          {...form.getInputProps("overallComments")}
          placeholder="You know the drill"
          className={classes.textarea}
          minRows={4}
          autosize
        />
      </div>

      <div className={classes.footer}>
        <Button type="submit" size="lg" loading={isLoading || isSuccess}>
          Submit review
        </Button>
      </div>
    </form>
  );
}
