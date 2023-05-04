import { Title, Button, Card, Grid } from "@mantine/core";
import Header from "./components/Header";
import Profile from "./components/Profile";
import {
  IconGlobe,
  IconBrandFacebook,
  IconBrandLine,
  IconMail,
  IconMap,
  IconPhone,
} from "@tabler/icons-react";
function App() {
  return (
    <div className='font-sans'>
      <Header links={[]} />
      <Profile
        avatar='tin.jpg'
        image='tin.jpg'
        name='ธีร์ธวัช สวาสดิ์ธรรม'
        job='นักพัฒนาโปรแกรม'
        stats={[
          {
            label: "การศึกษาระดับปริญญาตรี",
            value: "วิศวกรรมคอมพิวเตอร์",
          },
          {
            label: "เริ่มทำงาน",
            value: "กรกฏาคม 2563",
          },
        ]}
      />

      <Title
        order={3}
        size='h4'
        sx={(theme) => ({
          fontFamily: `, ${theme.fontFamily}`,
          marginTop: 20,
          marginBottom: 20,
        })}
        weight={600}
        align='center'
      >
        ช่องทางการติดต่อ{" "}
      </Title>
      <Card withBorder padding='xl' radius='md' mt='xl'>
        {" "}
        <Title size='h5' align='center'>
          Email: theethawat.s@outlook.co.th
        </Title>
        <a
          href='mailto:theethawat.s@outlook.co.th'
          style={{ textDecoration: "none" }}
        >
          <Button
            fullWidth
            color='dark'
            radius='md'
            mt='md'
            size='md'
            leftIcon={<IconMail size='1rem' />}
          >
            ส่งอีเมล
          </Button>
        </a>
        <Title size='h5' align='center' mt='lg'>
          Line ID: svstin1998
        </Title>
        <a
          href='https://line.me/ti/p/ViExIqr-pF'
          style={{ textDecoration: "none" }}
        >
          <Button
            fullWidth
            color='green'
            radius='md'
            mt='md'
            size='md'
            leftIcon={<IconBrandLine size='1rem' />}
          >
            เพิ่มเพื่อน
          </Button>
        </a>
      </Card>
      <Title
        order={3}
        size='h4'
        sx={(theme) => ({
          fontFamily: `, ${theme.fontFamily}`,
          marginTop: 20,
          marginBottom: 20,
        })}
        weight={600}
        align='center'
      >
        ติดต่อที่ทำงาน{" "}
      </Title>
      <Card withBorder padding='xl' radius='md' mt='xl'>
        <Title size='h5' align='center' weight={400}>
          ศูนย์วิจัยระบบอัตโนมัติอัจฉริยะ คณะวิศวกรรมศาสตร์ <br />
          มหาวิทยาลัยสงขลานครินทร์ <br />
          โทร 074-287-339 อีเมล iarc.psu@gmail.com https://iarc.psu.ac.th
        </Title>
        <Grid>
          <Grid.Col span={6}>
            {" "}
            <a
              href='https://goo.gl/maps/JT4wm6Qjq3xA6HyH8'
              style={{ textDecoration: "none" }}
            >
              <Button
                fullWidth
                color='teal'
                radius='md'
                mt='md'
                size='md'
                leftIcon={<IconMap size='1rem' />}
              >
                แผนที่
              </Button>
            </a>
          </Grid.Col>
          <Grid.Col span={6}>
            {" "}
            <a href='tel:074287339' style={{ textDecoration: "none" }}>
              <Button
                fullWidth
                color='blue'
                radius='md'
                mt='md'
                size='md'
                leftIcon={<IconPhone size='1rem' />}
              >
                โทร
              </Button>
            </a>
          </Grid.Col>
          <Grid.Col span={4}>
            {" "}
            <a
              href='mailto:iarc.psu@gmail.com'
              style={{ textDecoration: "none" }}
            >
              <Button
                fullWidth
                color='dark'
                radius='md'
                mt='sm'
                size='md'
                leftIcon={<IconMail size='1rem' />}
              >
                ส่งอีเมล
              </Button>
            </a>
          </Grid.Col>{" "}
          <Grid.Col span={4}>
            <a href='https://iarc.psu.ac.th' style={{ textDecoration: "none" }}>
              <Button
                fullWidth
                color='gray'
                radius='md'
                mt='sm'
                size='md'
                leftIcon={<IconGlobe size='1rem' />}
              >
                เว็บไซต์
              </Button>
            </a>
          </Grid.Col>{" "}
          <Grid.Col span={4}>
            <a
              href='https://www.facebook.com/iarc.psu/'
              style={{ textDecoration: "none" }}
            >
              <Button
                fullWidth
                color='indigo'
                radius='md'
                mt='sm'
                size='md'
                leftIcon={<IconBrandFacebook size='1rem' />}
              >
                Facebook
              </Button>
            </a>
          </Grid.Col>
        </Grid>
      </Card>
    </div>
  );
}

export default App;
