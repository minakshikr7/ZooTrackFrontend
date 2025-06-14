import React, { useState } from 'react';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormControl,
  FormLabel,
  Select,
  Badge,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { PawPrint, MoreVertical, Edit, Trash2 } from 'lucide-react';

const mockAnimals= [
  {
    id: '1',
    name: 'Leo',
    species: 'African Lion',
    age: 5,
    habitat: 'Savanna Enclosure',
    feedingTime: '10:00 AM',
    healthStatus: 'Healthy',
    lastFed: '2024-03-10 09:45 AM',
  },
  {
    id: '2',
    name: 'Luna',
    species: 'Gray Wolf',
    age: 3,
    habitat: 'Forest Habitat',
    feedingTime: '11:30 AM',
    healthStatus: 'Under Observation',
    lastFed: '2024-03-10 11:15 AM',
  },
];

export function AnimalList() {
  const [animals, setAnimals] = useState(mockAnimals);
  const [newAnimal, setNewAnimal] = useState({
    name: '',
    species: '',
    age: 0,
    habitat: '',
    feedingTime: '',
    healthStatus: 'Healthy' ,
    lastFed: '',
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddAnimal = (e) => {
    e.preventDefault();
    const animal = {
      id: Date.now().toString(),
      ...newAnimal,
      lastFed: new Date().toLocaleString(),
    };
    setAnimals([...animals, animal]);
    onClose();
    setNewAnimal({
      name: '',
      species: '',
      age: 0,
      habitat: '',
      feedingTime: '',
      healthStatus: 'Healthy',
      lastFed: '',
    });
  };

  const handleDelete = (id) => {
    setAnimals(animals.filter((a) => a.id !== id));
  };

  return (
    <Box p={6}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Animals
        </Text>
        <Button colorScheme="blue" onClick={onOpen}>
          Add Animal
        </Button>
      </Flex>

      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Animal</Th>
              <Th>Species</Th>
              <Th>Habitat</Th>
              <Th>Health Status</Th>
              <Th>Feeding Time</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {animals.map((animal) => (
              <Tr key={animal.id}>
                <Td>
                  <Flex align="center">
                    <Box mr={3} bg="green.100" p={2} borderRadius="md">
                      <PawPrint size={20} />
                    </Box>
                    <Box>
                      <Text fontWeight="bold">{animal.name}</Text>
                      <Text fontSize="sm">Age: {animal.age} years</Text>
                    </Box>
                  </Flex>
                </Td>
                <Td>{animal.species}</Td>
                <Td>{animal.habitat}</Td>
                <Td>
                  <Badge
                    colorScheme={
                      animal.healthStatus === 'Healthy'
                        ? 'green'
                        : animal.healthStatus === 'Under Observation'
                        ? 'yellow'
                        : 'red'
                    }
                  >
                    {animal.healthStatus}
                  </Badge>
                </Td>
                <Td>{animal.feedingTime}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<MoreVertical size={20} />}
                      variant="ghost"
                    />
                    <MenuList>
                      <MenuItem icon={<Edit size={16} />}>Edit</MenuItem>
                      <MenuItem
                        icon={<Trash2 size={16} />}
                        onClick={() => handleDelete(animal.id)}
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Animal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleAddAnimal}>
              <FormControl mb={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={newAnimal.name}
                  onChange={(e) =>
                    setNewAnimal({ ...newAnimal, name: e.target.value })
                  }
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Species</FormLabel>
                <Input
                  type="text"
                  value={newAnimal.species}
                  onChange={(e) =>
                    setNewAnimal({ ...newAnimal, species: e.target.value })
                  }
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  value={newAnimal.age}
                  onChange={(e) =>
                    setNewAnimal({ ...newAnimal, age: parseInt(e.target.value) })
                  }
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Habitat</FormLabel>
                <Input
                  type="text"
                  value={newAnimal.habitat}
                  onChange={(e) =>
                    setNewAnimal({ ...newAnimal, habitat: e.target.value })
                  }
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel>Feeding Time</FormLabel>
                <Input
                  type="text"
                  value={newAnimal.feedingTime}
                  onChange={(e) =>
                    setNewAnimal({
                      ...newAnimal,
                      feedingTime: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Health Status</FormLabel>
                <Select
                  value={newAnimal.healthStatus}
                  onChange={(e) =>
                    setNewAnimal({
                      ...newAnimal,
                      healthStatus: e.target.value ,
                    })
                  }
                >
                  <option value="Healthy">Healthy</option>
                  <option value="Under Observation">Under Observation</option>
                  <option value="Sick">Sick</option>
                </Select>
              </FormControl>
              <ModalFooter>
                <Button mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue" type="submit">
                  Add Animal
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
