import { Text } from '@mantine/core';
import Lottie from 'lottie-react';

import animationData from '../../loading.json';

export const LoadingLottie: React.FC = () => {
    return (
      <div>
        <Lottie
          animationData={animationData}
          height={200}
          width={200}
        />
        <Text size='lg' align='center'>
            We are processing your request...
        </Text>
      </div>
    );
  
};