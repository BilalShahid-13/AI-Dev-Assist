import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { GrAttachment } from 'react-icons/gr';
// import { IoSparklesOutline, IoIosAdd, IoIosClose } from 'react-icons/io';
import { setName } from '@/redux/slices/extensionSlice';
import { PiSparkle } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import CodeEditor from './CodeEditor';

export const InputField = ({ sendDataToParent, index, currentIndex }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const codeName = useSelector((state) => state.name);
  // console.log(codeName,codeName.id,codeName.content,index)
  console.log(codeName.id,currentIndex)

  // Handle custom file upload and set data for the current tab
  const handleCustomFileUpload = (event) => {
    const file = event.target.files[0];
    const fileExtension = file.name.split('.').pop();
    const fileName = file.name.replace(/\.[^/.]+$/, "");
    if (file) {
      if (/\.(cpp|js|py|jsx|ts|java|rb)$/i.test(file.name)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fileContent = e.target.result;
          setInputValue(fileContent);
          // Dispatch the file content and tab index to the Redux store
          dispatch(setName({
            name: fileName,
            id: currentIndex,
            content: fileContent,
            extension: fileExtension
          }));
          console.log(fileName);
          console.log('extension', fileExtension);
        };
        reader.readAsText(file);
      } else {
        alert('Please upload a valid source code file (.cpp, .js, .py, .jsx, .ts, .java, .rb).');
      }
    }
  };


  return (
    <Flex direction="column"
      gap="10px" w="full"
      key={index}>
      {/* <Textarea
        value={codeName.id === currentIndex ? codeName.content : inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Here is a sample placeholder"
        size="sm"
        textColor={'#f6f7f8'}
        rounded={'md'}
        rows={20}
        overflowY="auto"
        resize="vertical"
        _focus={{
          borderBottom: '1px solid #38bdf8',
        }}
        _hover={{
          borderColor: '#0ea5e9',
        }}
        border={'1px solid #0284c7'}
      /> */}
      <Box>
        <CodeEditor Code={codeName.id === currentIndex ? codeName.content : inputValue} />
      </Box>

      <Flex justifyContent={'flex-start'} alignItems={'center'}
        gap={'2vw'} display={'flex'} flexDir={'row-reverse'}>
        <Box>
          <Button
            bgColor={'purple.500'}
            borderWidth={'1px'}
            textColor={'gray.800'}
            _hover={{
              bgColor: 'purple.600',
            }}
            transition={'all linear 0.4s'}
            fontFamily={'Montserrat'}
            fontSize={{ lg: '13px' }}
            borderColor={'blue.800'}
            leftIcon={<Icon as={PiSparkle}
              fontSize={{ lg: '12px' }} />}
          >
            Generate
          </Button>
        </Box>
        <Box>
          <Button
            onClick={() => document.getElementById('customFileInput').click()}
            leftIcon={<Icon as={GrAttachment}
              fontSize={{ lg: '12px' }} />}
            bgColor={'transparent'}
            borderWidth={'1px'}
            textColor={'#cdced2'}
            _hover={{
              bgColor: '#7c77e9',
              textColor: 'gray.800'
            }}
            fontFamily={'Montserrat'}
            fontSize={{ lg: '13px' }}
            borderColor={'blue.800'}

          >
            Upload Custom File
          </Button>
          <input
            id="customFileInput"
            type="file"
            onChange={handleCustomFileUpload}
            style={{ display: 'none' }}
            accept=".cpp,.js,.py,.jsx,.ts,.java,.rb"
          />
        </Box>
      </Flex>
    </Flex>
  );
};