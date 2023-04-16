import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Text, Stack, StackDivider, Box, Heading } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'

const Overview = (props: any) => {

    const { dataHist, dataScore, loading } = props
    console.log(loading)
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
                    <Heading size='md'>Wallet</Heading>
                </CardHeader>
                <CardBody>
                    <TableContainer >
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Score</Th>
                                    <Th>Price</Th>
                                    <Th isNumeric>Balance</Th>
                                    <Th isNumeric>Value</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{Object.keys(dataHist).length > 0 ? dataHist.hist.borrowAmount : '-'}</Td>
                                    <Td>$2095.63</Td>
                                    <Td isNumeric>12.287</Td>
                                    <Td isNumeric>$25749.08</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>

            <Card border='1px' borderColor='gray.400'>
                <CardHeader>
                    <Heading size='md'>NFT</Heading>
                </CardHeader>
                <CardBody>
                    <Box>
                        <Image rounded='lg' boxSize='150px' objectFit='cover' src="https://storage.googleapis.com/zapper-fi-assets/nft/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/1500x5006.jpeg" alt="ENS: Ethereum Name Service" />
                    </Box>
                </CardBody>
            </Card>

            <Card border='1px' borderColor='gray.400'>
                <CardHeader>
                    <Heading size='md'>Aave Stats</Heading>
                </CardHeader>
                <CardBody>
                    <TableContainer >
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Borrow Amount</Th>
                                    <Th>Borrow Count</Th>
                                    <Th isNumeric>Flash Loan Count</Th>
                                    <Th isNumeric>Liquidation Amount</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{Object.keys(dataHist).length > 0 ? dataHist.hist.borrowAmount : '-'}</Td>
                                    <Td>{Object.keys(dataHist).length > 0 ? dataHist.hist.borrowCount : '-'}</Td>
                                    <Td isNumeric>{Object.keys(dataHist).length > 0 ? dataHist.hist.flashLoanCount : '-'}</Td>
                                    <Td isNumeric>{Object.keys(dataHist).length > 0 ? dataHist.hist.liquidationAmount : '-'}</Td>
                                </Tr>
                            </Tbody>
                            <Thead>
                                <Tr>
                                    <Th>Liquidation Count</Th>
                                    <Th>Repay Amount</Th>
                                    <Th isNumeric>Repay Count</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{Object.keys(dataHist).length > 0 ? dataHist.hist.liquidationCount : '-'}</Td>
                                    <Td>{Object.keys(dataHist).length > 0 ? dataHist.hist.repayAmount : '-'}</Td>
                                    <Td isNumeric>{Object.keys(dataHist).length > 0 ? dataHist.hist.repayCount : '-'}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        </Stack>

    )
}

export default Overview

