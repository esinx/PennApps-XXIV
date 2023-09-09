import { Card, Text, Title } from "@mantine/core";

export const Name: React.FC = () => {
    return (
        <Card withBorder shadow="lg" radius="md" padding={8} top={10}>
            <Text
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 150}}
            sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
            ta="center"
            size={30}
            fw={800}
            lh={1}
            >
            MapIt
            </Text>
            <Title order={4}>Made by <Text span variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 150 }} inherit>students</Text>, for <Text span variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 150 }} inherit>students</Text>.</Title>
        </Card>
    );
};