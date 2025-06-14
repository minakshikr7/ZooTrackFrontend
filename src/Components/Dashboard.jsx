import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Badge,
  Icon,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Activity, Users, PawPrint, AlertTriangle } from 'lucide-react';

export function Dashboard() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'lg-dark');
  const recentActivityBg = useColorModeValue('white', 'gray.800');
  const recentActivityHoverBg = useColorModeValue('gray.50', 'gray.700');

  const stats = [
    {
      label: 'Total Animals',
      value: 24,
      icon: PawPrint,
      iconBg: 'blue.100',
      iconColor: 'blue.600',
    },
    {
      label: 'Staff Members',
      value: 12,
      icon: Users,
      iconBg: 'green.100',
      iconColor: 'green.600',
    },
    {
      label: 'Active Tasks',
      value: 8,
      icon: Activity,
      iconBg: 'yellow.100',
      iconColor: 'yellow.600',
    },
    {
      label: 'Alerts',
      value: 2,
      icon: AlertTriangle,
      iconBg: 'red.100',
      iconColor: 'red.600',
    },
  ];

  const recentActivities = [
    { time: '2 hours ago', action: 'Lion feeding completed by John' },
    { time: '3 hours ago', action: 'New elephant health check-up scheduled' },
    { time: '5 hours ago', action: 'Penguin habitat maintenance completed' },
  ];

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Dashboard
      </Text>

      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
        {stats.map((stat, index) => (
          <GridItem
            key={index}
            bg={cardBg}
            p={6}
            rounded="lg"
            shadow={cardShadow}
          >
            <Flex align="center" gap={4}>
              <Box bg={stat.iconBg} p={3} rounded="full">
                <Icon as={stat.icon} color={stat.iconColor} boxSize={6} />
              </Box>
              <Box>
                <Text color="gray.600">{stat.label}</Text>
                <Text fontSize="2xl" fontWeight="bold">
                  {stat.value}
                </Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>

      <Box mt={8} bg={recentActivityBg} p={6} rounded="lg" shadow={cardShadow}>
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          Recent Activities
        </Text>
        <VStack spacing={4} align="stretch">
          {recentActivities.map((activity, index) => (
            <Flex
              key={index}
              align="center"
              gap={4}
              p={2}
              rounded="md"
              _hover={{ bg: recentActivityHoverBg }}
            >
              <Box w={2} h={2} bg="green.500" rounded="full" />
              <Box>
                <Text color="gray.800" _dark={{ color: 'gray.200' }}>
                  {activity.action}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {activity.time}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
