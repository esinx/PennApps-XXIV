import { TextInput } from "@mantine/core"
import { useState } from "react";

export const KeywordInput: React.FC = () => {
    const [value, setValue] = useState('');
    return (
        <TextInput
        placeholder="E.g. psychology, behavioral psychology, positive reinforcement"
        label="Type your keywords here"
        value={value} 
        onChange={(event) => setValue(event.currentTarget.value)} 
        />
    );
};