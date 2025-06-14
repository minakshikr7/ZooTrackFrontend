import React from 'react';
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const ZooFAQ = () => {
  return (
    <Box maxW="800px" mx="auto" p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Zoo Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What are the zoo’s opening hours?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The zoo is open from 9 AM to 5 PM every day except on public holidays.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I purchase tickets?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Tickets can be purchased online via our website or at the entrance on the day of your visit.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Are there any membership options available?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, we offer annual memberships which include unlimited visits, discounts on events, and more.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What exhibits are featured at the zoo?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our zoo features exhibits for a variety of animals including lions, elephants, giraffes, reptiles, and a dedicated section for endangered species.
          </AccordionPanel>
        </AccordionItem>

        {/* FAQ 5 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Is there a guided tour available?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, guided tours are available every hour. You can join a group tour or book a private session.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ZooFAQ;
