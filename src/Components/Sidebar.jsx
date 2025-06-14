import React, { useEffect, useState } from 'react';
import { Box, Flex, VStack, Text, Button, Spacer, Divider } from '@chakra-ui/react';
import { Users, PawPrint, Home, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Sidebar({ setCurrentView }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to store user

  useEffect(() => {
    // Get user from localStorage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user from localStorage
    navigate('/Slogin');
  };

  return (
    <Box
      bg="gray.400"
      color="white"
      h="120vh"
      w={{ base: 'full', md: '64' }}
      p={6}
      shadow="lg"
    >
      {/* Sidebar Header */}
      <Flex align="center" mb={10}>
        <PawPrint size={32} />
        <Text ml={3} fontSize="xl" fontWeight="bold">
          Zoo Manager
        </Text>
      </Flex>

      {/* Navigation Buttons */}
      <VStack align="stretch" spacing={4}>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          leftIcon={<Home size={20} />}
          onClick={() => setCurrentView('dashboard')}
          _hover={{ bg: 'gray.700' }}
        >
          Dashboard
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          leftIcon={<PawPrint size={20} />}
          onClick={() => setCurrentView('animals')}
          _hover={{ bg: 'gray.700' }}
        >
          Animals
        </Button>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          leftIcon={<Users size={20} />}
          onClick={() => setCurrentView('staff')}
          _hover={{ bg: 'gray.700' }}
        >
          Staff
        </Button>
      </VStack>

      <Spacer />

      {/* Divider and Logout Button */}
      {user && (
        <>
          <Divider my={6} borderColor="gray.600" />
          <Button
            variant="ghost"
            justifyContent="flex-start"
            leftIcon={<LogOut size={20} />}
            onClick={handleLogout}
            _hover={{ bg: 'red.600' }}
          >
            Logout
          </Button>
        </>
      )}
    </Box>
  );
}
