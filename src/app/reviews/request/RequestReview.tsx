import {
  Alert,
  Button,
  Image,
  Modal,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";
import { getThumbnailUrl, useSaveVideo } from "app/videos";
import { useEffect } from "react";
import { ReactComponent as Sparkles } from "shared/assets/sparkles.svg";
import { getInitialValues, Inputs, schema } from "./RequestReview.helpers";
import { useStyles } from "./RequestReview.styles";

interface RequestReviewProps {
  open?: boolean;
  onClose: () => void;
  onSave: () => void;
}

export function RequestReview({ open, onClose, onSave }: RequestReviewProps) {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: getInitialValues(),
    schema: zodResolver(schema),
  });
  const { mutate: saveVideo, isLoading } = useSaveVideo();
  const [urlDebounced] = useDebouncedValue(form.values.url, 500);

  function handleSubmit(data: Inputs) {
    saveVideo(data, {
      onSuccess() {
        onSave();
        // TODO: Show success message
      },
      onError() {
        // TODO: Show error message
      },
    });
  }

  useEffect(() => {
    if (open) {
      form.reset();
    }

    // Form reset updates the local state and triggers infinite re-rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Modal
      opened={!!open}
      onClose={onClose}
      title={<Title order={3}>Request for reviews on your video</Title>}
    >
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
          data-autofocus
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

        <footer className={classes.footer}>
          <Button type="submit" size="lg" loading={isLoading}>
            Submit
          </Button>
        </footer>
      </form>
    </Modal>
  );
}
