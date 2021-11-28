import React from 'react';
import { Flex, Heading, VStack } from '@chakra-ui/react';
import { Story } from 'src/types';
import { PeopleStoryCard } from '../PeopleStoryCard';

interface Props {
  stories: Story[]
}

function PeopleStories({ stories }: Props): JSX.Element {
  return (
    <Flex
      width="100%"
      backgroundColor="gray.200"
    >
      <VStack margin="64px auto" width="1306px">
        <Flex alignItems="center" width="100%" marginBottom="16px">
          <Heading size="lg" fontFamily="Gloria Hallelujah">People Stories</Heading>
        </Flex>
        <Flex
          gridGap="16px"
          overflowX="auto"
          width="100%"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {stories.map((story) => <PeopleStoryCard key={story.id} story={story} />)}
        </Flex>
      </VStack>
    </Flex>
  );
}

export { PeopleStories };
