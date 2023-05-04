import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  rem,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `${rem(2)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

// interface UserCardImageProps {
//   image: string;
//   avatar: string;
//   name: string;
//   job: string;
//   stats: { label: string; value: string }[];
// }

export function Profile({ image, avatar, name, job, stats }) {
  const { classes, theme } = useStyles();

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta='center' fz='lg' fw={500}>
        {stat.value}
      </Text>
      <Text ta='center' fz='sm' c='dimmed'>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding='xl' radius='md' className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
      <Avatar
        src={avatar}
        size={80}
        radius={80}
        mx='auto'
        mt={-30}
        className={classes.avatar}
      />
      <Text ta='center' fz='lg' fw={500} mt='sm'>
        {name}
      </Text>
      <Text ta='center' fz='sm' c='dimmed'>
        {job}
      </Text>
      <Group mt='md' position='center' spacing={30}>
        {items}
      </Group>
      <a href='https://theethawat.tdc.in.th' style={{ textDecoration: "none" }}>
        <Button
          fullWidth
          radius='md'
          mt='xl'
          size='md'
          color='blue'
          leftIcon={<IconExternalLink />}
        >
          เว็บไซต์ส่วนตัว
        </Button>
      </a>
    </Card>
  );
}

export default Profile;
