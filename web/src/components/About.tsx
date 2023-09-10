import { css } from '@emotion/react';
import { Button, Card, Group, List, MantineProvider, Modal, Text, ThemeIcon, Title} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { IconArrowBadgeRight, IconCircleCheck } from '@tabler/icons-react';

export const About: React.FC = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <MantineProvider
        theme={{
            colors: {
            'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
            },
        }}
        >
          <Modal
            opened={opened}
            onClose={close}
            title={<h3>About Us</h3>}
            fullScreen
            transitionProps={{ transition: 'fade', duration: 600 }}
          >
            <div css={css`
                max-width: 800px;
                min-height: 100vh;
                display: block;
                margin: auto;
                `}>
              <Title order={4} pb='md'>Welcome to <Text span variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 150 }} inherit>MapIt</Text>, where <Text span variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 150 }} inherit>innovation</Text> meets <Text span variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 150 }} inherit>organization</Text>!</Title>
                <Card withBorder shadow="lg" radius="md" padding={'2rem'} pt='xl'>
                    <Text align="left" size="lg" fw={700}> 
                    Who We Are
                    </Text>
                    <Text align="left" size="md" px='md' pt='sm'>
                    At MapIt, we believe that clarity is the foundation of brilliance. We are a cutting-edge platform designed to make your thought process as streamlined, intuitive, and powerful as possible. Imagine having a brainstorming partner that not only listens but also understands, organizes, and even enriches your ideas. That's us!
                    </Text>
                </Card>
                <Card withBorder shadow="lg" radius="md" padding={'2rem'} pt='xl'>
                    <Text align="left" size="lg" fw={700}>
                    What We Do
                    </Text>
                    <Text align="left" size="md" px='md' pt='sm'>
                    We revolutionize the traditional mind-mapping experience by leveraging advanced algorithms and the power of OpenAI. Our dynamic platform allows you to input key terms or keywords, around which it intelligently constructs a robust, interactive mind map. But that's not all—each node in your mind map is not merely a term; it's a doorway to a treasure trove of knowledge.
                    </Text>
                </Card>
                <Card withBorder shadow="lg" radius="md" padding={'2rem'} pt='xl'>
                    <Text align="left" size="lg" fw={700}>
                    How It Works
                    </Text>
                    <List
                    spacing="lg"
                    size="md"
                    center
                    withPadding
                    pt='md'
                    icon={
                    <ThemeIcon color="blue" size={16} radius="xl">
                        <IconArrowBadgeRight size="1rem" color='white' stroke='1'/>
                    </ThemeIcon>
                    }
                    >
                        <List.Item>
                        Keyword Input: Simply begin by entering a few keywords or phrases related to the topic you are exploring.
                        </List.Item>
                        <List.Item>
                        AI-Powered Structuring: Our platform, backed by OpenAI, goes to work. It digs deep into a comprehensive database to understand the relationships between your keywords, the sub-topics they can branch into, and the ideas they can foster.
                        </List.Item>
                        <List.Item>
                        Rich Content: Each node on your mind map is enriched with relevant, concise information automatically sourced and cited. Forget toggling between browser tabs; all you need to know is right there in your mind map.
                        </List.Item>
                        <List.Item>
                        Metaphor API Integration: We employ the Metaphor API to attach additional resources to each term, making your mind map not just a tool for organization, but also for learning and discovery. These metaphorically-linked resources help you understand your topics in new lights, providing fresh perspectives and deeper understanding.
                        </List.Item>
                        <List.Item>
                        Interactive & Customizable: The final mind map is fully interactive. Move things around, edit, or dig deeper into each node. Your map, your rules.
                        </List.Item>
                    </List>
                </Card>
                <Card withBorder shadow="lg" radius="md" padding={'2rem'} pt='xl'>
                    <Text align="left" size="lg" fw={700}>
                    Why Mind Maps?
                    </Text>
                    <Text align="left" size="md" px='lg' pt='sm'>
                    Mind maps have long been considered effective tools for learning and memory retention, aiding in the organization of information in a manner that aligns well with how our brains naturally process data. Below are some reasons why mind maps are particularly useful for studying and memorization, supported by credible research and experts in the field.
                    </Text>

                    <List
                    spacing="lg"
                    size="md"
                    center
                    pt='md'
                    withPadding
                    // icon={
                    //   <ThemeIcon color="teal" size={24} radius="xl">
                    //     <IconCircleCheck size="1rem" />
                    //   </ThemeIcon>
                    // }
                    >
                        <List.Item>
                            Enhanced Memory Retention
                            <Text align="left" size="sm" px='lg' pt='xs'>
                            Mind maps help in better memory retention by utilizing both hemispheres of the brain. They engage your mind visually and analytically, thereby aiding in more effective memorization. According to Dr. Caroline Leaf, a cognitive neuroscientist, visual processes account for up to two-thirds of the electrical activity in the brain's perception, which suggests the importance of visual aids like mind maps in learning and memory (Leaf, Caroline. "Switch On Your Brain." Baker Books, 2013).
                            </Text>
                        </List.Item>
                        <List.Item>
                            Hierarchical Structure for Easy Recollection
                            <Text align="left" size="sm" px='lg' pt='xs'>
                            Mind maps have a hierarchical structure that starts with a central idea and branches out into sub-topics and further details. This hierarchization aids in contextual learning and makes it easier for the brain to retrieve specific pieces of information when needed. Research by Nist and Simpson has found that hierarchical structuring is effective for recall tasks (Nist, Sherrie L., and Simpson, Michele L. "College Studying." In: Peverly, Susan et al. "The Skillful Teacher." Allyn & Bacon, 1991).
                            </Text>
                        </List.Item>
                        <List.Item>
                            Active Engagement
                            <Text align="left" size="sm" px='lg' pt='xs'>
                            Creating a mind map requires active engagement, requiring you to think critically about the material you are studying. This deep level of processing aids in memory retention. According to the Levels of Processing model by Craik & Lockhart, deeper levels of analysis produce more elaborate, longer-lasting memory codes (Craik, F. I. M., & Lockhart, R. S. "Levels of processing: A framework for memory research." Journal of Verbal Learning and Verbal Behavior, 1972).
                            </Text>
                        </List.Item>
                        <List.Item>
                            Promotes Creative Connections
                            <Text align="left" size="sm" px='lg' pt='xs'>
                            Mind maps encourage you to draw connections between disparate pieces of information, which can lead to deeper understanding and better retention. Tony Buzan, an advocate of mind mapping, argues that the associative and integrative capabilities of mind maps facilitate creative thinking and problem-solving (Buzan, Tony. "The Mind Map Book." BBC Books, 1995).
                            </Text>
                        </List.Item>
                        <List.Item>
                            Flexibility
                            <Text align="left" size="sm" px='lg' pt='xs'>
                            Mind maps are highly customizable and can be adapted to suit various subjects and learning styles. This flexibility means that they can be a particularly good fit for complex subjects that require the integration of various types of information, as confirmed by a study published in the journal, "Medical Education" (Farrand, Paul, Hussain, Fearzana, and Hennessy, Enid. "The efficacy of the 'mind map' study technique." Medical Education, 2002).
                            </Text>
                        </List.Item>
                    </List>
                </Card>
                <Card withBorder shadow="lg" radius="md" padding={'2rem'} pt='xl'>
                    <Text align="left" size="lg" fw={700}>
                    Why Choose Us?
                    </Text>
                    <List
                    spacing="lg"
                    size="md"
                    center
                    pt='md'
                    withPadding
                    listStyleType="disc"
                    icon={
                    <ThemeIcon color="blue" size={16} radius="xl">
                        <IconCircleCheck size="1rem" />
                    </ThemeIcon>
                    }
                    >
                        <List.Item>
                        Efficiency: Save hours of research and brainstorming with our automated yet personalized mind map generation.
                        </List.Item>
                        <List.Item>
                        Depth: Benefit from the profound knowledge layer added by OpenAI and Metaphor API, transforming a simple mind map into an interactive knowledge network.
                        </List.Item>
                        <List.Item>
                        User-Friendly: No prior expertise required; if you can type a keyword, you can create a full-fledged mind map!
                        </List.Item>
                        <List.Item>
                        Innovation: We're the first and only platform to integrate OpenAI and Metaphor API to create mind maps, providing a holistic approach to conceptualizing ideas and gathering information.
                        </List.Item>
                    </List>
                </Card>
                <Text align="left" size="lg" pt='lg' pb='lg' fw={700}>
                Join us on this extraordinary journey of intellect, curiosity, and discovery!
                </Text>
            </div>
          </Modal>

          <Group position="right" css
            ={css`
            pointer-events: auto;
            `}>
            <Button 
            onClick={() => {
                console.log("test")
                open()
            }}
            color="ocean-blue"
            >About Us
            </Button>
            </Group>
            </MantineProvider>
        </>
    );
};