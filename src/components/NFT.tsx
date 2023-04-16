import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Text, Stack, StackDivider, Box, Heading } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Spinner, HStack } from '@chakra-ui/react'

const NFT = (props: any) => {

    const { accData, dataScore, loading} = props
    const spinner = (<Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
    />)
    return (
        <Stack spacing={8}>
            <Card border='1px' borderColor='gray.400'>
                <CardHeader>
                    <Heading size='md'>NFT</Heading>
                </CardHeader>
                <CardBody>
                <HStack spacing={4}>
                    {Object.keys(accData).length > 0 &&
                    accData.NFTData.ERC721_holding.map(([name, imageUrl]: [string, string], i: number) => (
                        <Box key={i}>
                        <Image
                            rounded="lg"
                            boxSize="150px"
                            objectFit="cover"
                            src={imageUrl}
                            alt={name}
                        />
                        <Text>{name}</Text>
                        </Box>
                    ))}
                </HStack>
                    <TableContainer >
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>NFTs Owned</Th>
                                    <Th>ENS Time</Th>
                                    <Th isNumeric>Portfolio Value</Th>
                                    <Th isNumeric>ERC721 Count</Th>
                                    <Th>ERC721 Holding</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{Object.keys(accData).length > 0 ? accData.NFTData.ERC721_count : '-'}</Td>
                                    <Td>{Object.keys(accData).length > 0 ? parseFloat(accData.NFTData.ENS_time).toLocaleString()  : '-'}</Td>
                                    <Td isNumeric>{Object.keys(accData).length > 0 ? parseFloat(accData.NFTData.ERC721NFT_portfolioVal_opensea).toLocaleString() : '-'}</Td>
                                    <Td isNumeric>{Object.keys(accData).length > 0 ? parseFloat(accData.NFTData.ERC721_count).toLocaleString() : '-'}</Td>
                                    <Td>{Object.keys(accData).length > 0 ? accData.NFTData.ERC721_holding[0][0]  : '-'}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>

        </Stack>

    )
}

export default NFT

