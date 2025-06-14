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
  Flex,
  Text,
  Select,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
} from '@chakra-ui/react';
import { User, MoreVertical, Edit, Trash2 } from 'lucide-react';

const mockStaff = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Zookeeper',
    assignedArea: 'Savanna Zone',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Veterinarian',
    assignedArea: 'Medical Center',
  },
];

export function StaffList() {
  const [staff, setStaff] = useState(mockStaff);
  const [newStaff, setNewStaff] = useState({ name: '', role: 'Zookeeper', assignedArea: '' });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddStaff = (e) => {
    e.preventDefault();
    const staffMember = {
      id: Date.now().toString(),
      ...newStaff,
    };
    setStaff([...staff, staffMember]);
    onClose();
    setNewStaff({ name: '', role: 'Zookeeper', assignedArea: '' });
  };

  const handleDelete = (id) => {
    setStaff(staff.filter((s) => s.id !== id));
  };

  return (
    <Box p={6}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Staff
        </Text>
        <Button colorScheme="blue" onClick={onOpen}>
          Add Staff Member
        </Button>
      </Flex>

      <Box overflowX="auto">
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Staff Member</Th>
              <Th>Role</Th>
              <Th>Assigned Area</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {staff.map((member) => (
              <Tr key={member.id}>
                <Td>
                  <Flex align="center">
                    <Box as={User} size="20px" color="blue.500" mr={2} />
                    <Text>{member.name}</Text>
                  </Flex>
                </Td>
                <Td>
                  <Badge colorScheme={member.role === 'Zookeeper' ? 'green' : 'yellow'}>
                    {member.role}
                  </Badge>
                </Td>
                <Td>{member.assignedArea}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<MoreVertical size={20} />}
                      variant="ghost"
                      aria-label="Actions"
                    />
                    <MenuList>
                      <MenuItem icon={<Edit size={16} />}>Edit</MenuItem>
                      <MenuItem icon={<Trash2 size={16} />} onClick={() => handleDelete(member.id)}>
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
          <ModalHeader>Add New Staff Member</ModalHeader>
          <ModalBody>
            <form onSubmit={handleAddStaff}>
              <Box mb={4}>
                <Text mb={1}>Name</Text>
                <Input
                  value={newStaff.name}
                  onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                  required
                />
              </Box>
              <Box mb={4}>
                <Text mb={1}>Role</Text>
                <Select
                  value={newStaff.role}
                  onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
                >
                  <option value="Zookeeper">Zookeeper</option>
                  <option value="Veterinarian">Veterinarian</option>
                  <option value="Admin">Admin</option>
                </Select>
              </Box>
              <Box mb={4}>
                <Text mb={1}>Assigned Area</Text>
                <Input
                  value={newStaff.assignedArea}
                  onChange={(e) => setNewStaff({ ...newStaff, assignedArea: e.target.value })}
                  required
                />
              </Box>
              <ModalFooter>
                <Button onClick={onClose} mr={3}>
                  Cancel
                </Button>
                <Button colorScheme="blue" type="submit">
                  Add Staff
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
