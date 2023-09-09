import { css } from '@emotion/react';
import { Button, Col, Grid, Group, Modal, Text} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

export const About: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
    
          <Modal
            opened={opened}
            onClose={close}
            title="About Us"
            fullScreen
            transitionProps={{ transition: 'fade', duration: 600 }}
          >
            <Grid>
              <Col style={{ height: '100%' }}>
                <Text align="left" size="xl">
                  Welcome to Our Website!
                </Text>
                <Text align="left" size="md">
                  We are a company that focuses on doing something great. Our team is composed of professionals in various fields, dedicated to providing the best services to our customers.
                </Text>
                <Text align="left" size="md">
                  Our mission is to make the world a better place through innovation and hard work.
                </Text>
    
                <Button
                  style={{ marginTop: 'auto' }}
                  onClick={close}
                >
                  Close
                </Button>
              </Col>
              </Grid>
          </Modal>

          <Group position="right" css
            ={css`
            pointer-events: auto;
            `}>
            <Button onClick={() => {
            console.log("test")
            open()
            }}>About Us</Button>
            </Group>
        </>
    );
};