import { Alert, Button, Image, Text, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";
import { getThumbnailUrl } from "app/videos";
import { useState } from "react";
import { ReactComponent as Sparkles } from "shared/assets/sparkles.svg";
import { getInitialValues, Inputs, schema } from "./RequestReview.helpers";
import { useStyles } from "./RequestReview.styles";

export function RequestReview() {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: getInitialValues(),
    schema: zodResolver(schema),
  });
  const [urlDebounced] = useDebouncedValue(form.values.url, 500);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(data: Inputs) {
    console.log(data);
    setIsLoading(true);

    // TODO: Persist to data storage
    setTimeout(() => {
      setIsLoading(false);
      // onSave();
    }, 3000);
  }

  return (
    <>
      <Title order={2}>Request for reviews on your video</Title>

      <Alert
        icon={<Sparkles className={classes.alertIcon} />}
        className={classes.alert}
        title="Good job posting a vid!"
        color="teal"
      >
        <Text>
          Note that you can only start seeing feedback on your videos when you
          contribute <span>at least 2 reviews</span> to the community.
        </Text>
        <Text>Let's help each other out!</Text>
      </Alert>

      <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
        {/* TODO: Consider allotting space for error message to avoid page shifting */}
        <TextInput
          {...form.getInputProps("url")}
          className={classes.urlInput}
          label="Youtube URL"
          placeholder="https://www.youtube.com/watch?v=123asdzxc"
          required
          autoComplete="off"
          autoFocus
        />

        <Text className={classes.thumbLabel}>Thumbnail:</Text>
        <div className={classes.thumb}>
          <Image
            src={urlDebounced ? getThumbnailUrl(urlDebounced) : undefined}
            alt="Video thumbnail"
            withPlaceholder
            width={320}
            height={180}
            radius="md"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          loading={isLoading}
          className={classes.submit}
        >
          Submit
        </Button>
      </form>
    </>
  );
}
