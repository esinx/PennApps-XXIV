import { css } from '@emotion/react';
import { Button, Group,MantineProvider,Modal, Paper, Stack, TextInput, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

export const KeywordInput: React.FC = () => {
  const [value, setValue] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const handleAddKeywords = () => {
    setKeywords([...keywords, value]);
    setValue('');
  };
  
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<h3>Add Keywords Here!</h3>}
        radius={'md'}
        size="auto"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        transitionProps={{ transition: 'fade', duration: 600 }}
      >
        <Paper style={{ width: 580 }}>
            <Stack>
            <TextInput
                placeholder="E.g. psychology, behavioral psychology, positive reinforcement"
                label="Please enter your keywords separated by commas:"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                size='md'
            />
            <MantineProvider
            theme={{
                colors: {
                'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
                },
            }}
            >
            <Button onClick={handleAddKeywords} size='sm' color="ocean-blue">Submit</Button>
            {/* After calling API, load lottie view (check loading.tsx) until API call is completed and data/mindmap is there*/}
            </MantineProvider>
            </Stack>
        </Paper>
      </Modal>

      <MantineProvider
            theme={{
                colors: {
                'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
                },
            }}
            >
      <Group position="right" css
      ={css`
        pointer-events: auto;
      `}>
        <Button onClick={() => {
            console.log("test")
            open()
        }}
        color="ocean-blue"
        >Add Keywords</Button>
        {/* <div>
            <Text align="left">Stored Keywords:</Text>
            <Text align="left">{keywords.join(' ')}</Text>
        </div> */}
      </Group>
      </MantineProvider>
    </>
  );

};