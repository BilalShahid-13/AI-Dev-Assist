import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Icon, Flex, Text, Input } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';
import gsap from 'gsap';
import { InputField } from './InputField';
import { useSelector } from 'react-redux';

const TabsComponent = () => {
  const [tabs, setTabs] = useState([{ title: 'Tab 1', id: 1, content: '', extension: '' }]);
  const [nextId, setNextId] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isEditing, setIsEditing] = useState(null); // Tracks which tab is being edited
  const [newTitle, setNewTitle] = useState('');
  const refs = useRef([]);
  const codeName = useSelector((state) => state.name);

  useEffect(() => {
    if (codeName && codeName.id === currentIndex) {
      setTabs((prevTabs) =>
        prevTabs.map((tab) =>
          tab.id === currentIndex
            ? {
              ...tab, title: codeName.name || `Tab ${tab.id}`,
              extension: codeName.extension,
              content: codeName.content
            }
            : tab
        )
      );
    }
  }, [codeName, currentIndex]);

  const addTab = () => {
    const newTab = { title: `Tab ${nextId}`, id: nextId, content: '' };
    setTabs([...tabs, newTab]);
    setNextId(nextId + 1);

    // Redirect to the newly created tab
    setCurrentIndex(nextId);
  };

  const removeTab = (id) => {
    if (tabs.length > 1) {
      const updatedTabs = tabs.filter((tab) => tab.id !== id);
      setTabs(updatedTabs);
      if (currentIndex === id) setCurrentIndex(updatedTabs[0].id);
    }
  };

  const handleMouseEnter = (index) => {
    if (tabs.length > 1) {
      gsap.to(refs.current[index], { display: 'block', opacity: 1, duration: 0.3 });
    }
  };

  const handleMouseLeave = (index) => {
    gsap.to(refs.current[index], { display: 'none', opacity: 0, duration: 0.3 });
  };

  const handleDoubleClick = (index, currentTitle) => {
    setIsEditing(index);
    setNewTitle(currentTitle);
  };

  const handleSaveTitle = (index) => {
    const updatedTabs = [...tabs];
    updatedTabs[index].title = newTitle;
    setTabs(updatedTabs);
    setIsEditing(null);
  };

  return (
    <Box bgColor={'#0f1222'} w={'100%'} rounded={'lg'}>
      <Tabs
        position="relative"
        isFitted
        variant="enclosed"
        index={tabs.findIndex((tab) => tab.id === currentIndex)}
        onChange={(index) => setCurrentIndex(tabs[index].id)}
      >
        <Flex justifyContent={'center'} alignItems={'center'} gap={'8px'}>
          <TabList w={'full'} overflowX={'scroll'}
            borderBottomColor={'gray.800'}
            css={{
              /* Hide scrollbar for Chrome, Edge, and Safari */
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              /* Hide scrollbar for IE, Edge, and Firefox */
              '-ms-overflow-style': 'none', // Internet Explorer 10+
              'scrollbar-width': 'none', // Firefox
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={tab.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onDoubleClick={() => handleDoubleClick(index, tab.title)}
                _selected={{
                  borderWidth: '2px',
                  borderColor: 'blue.700',
                  borderBottom: currentIndex === tab.id ? '2px solid blue.500' : '',
                }}
                transition={'all ease 0.5s'}
                borderBottomColor={'blue.800'}
                minW={'130px'}
                gap={'12px'}
                display={'flex'} flexDir={'row'}
                justifyContent={'space-between'} alignItems={'center'}
              >
                {isEditing === index ? (
                  <Input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onBlur={() => handleSaveTitle(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveTitle(index);
                    }}
                    autoFocus
                    size="sm"
                    width="auto"
                  />
                ) : (
                  <Text textColor={'#cdced2'}>{tab.title}{tab.extension && `.${tab.extension}`}</Text>
                )}
                <Box
                  ref={(el) => (refs.current[index] = el)}
                  display={'none'}
                  >
                  <Icon
                    cursor="pointer"
                    as={IoIosClose}
                    onClick={() => removeTab(tab.id)}
                    rounded={'full'}
                    bgColor={'red.500'}
                  />
                </Box>
              </Tab>
            ))}
          </TabList>
          {/* add icon */}
          <Icon
            as={IoIosAdd}
            onClick={addTab}
            fontSize={{ lg: '25px' }}
            _hover={{
              cursor: 'pointer', bgColor: 'blue.400',
              boxShadow: '0 0 10px rgba(0, 0, 255, 0.6)'
            }}
            mr="10px"
            bgColor={'blue.500'} rounded={'full'}
            transition={'all ease 0.5s'}
          />
        </Flex>
        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab.id}>
              <InputField index={tab.id} currentIndex={currentIndex} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabsComponent;
