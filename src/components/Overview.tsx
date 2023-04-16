import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Text, Stack, StackDivider, Box, Heading } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'

const Overview = (props: any) => {

    const { accData, dataScore, loading} = props
    console.log(accData)
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
                                    <Th>First Txn Date</Th>
                                    <Th> Txn Count </Th>
                                    <Th>ETH Price</Th>
                                    <Th>ETH Balance</Th>
                                    <Th>$-Value</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{Object.keys(accData).length > 0 ? accData.walletData.first_txn_date : '-'}</Td>
                                    <Td>{Object.keys(accData).length > 0 ? accData.walletData.num_transcations : '-'}</Td>
                                    <Td>{Object.keys(accData).length > 0 ? "$" + parseFloat(accData.walletData.eth_curr_price).toLocaleString()  : '-'}</Td>
                                    <Td>{Object.keys(accData).length > 0 ? parseFloat(accData.walletData.eth_balance).toLocaleString() : '-'}</Td>
                                    <Td>{Object.keys(accData).length > 0 ? "$" +(parseFloat(accData.walletData.eth_curr_price) * parseFloat(accData.walletData.eth_balance)).toLocaleString() : '-'}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
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
                                    <Th>Available Borrows ETH</Th>
                                    <Th>Borrow Amount</Th>
                                    <Th isNumeric>Borrow Count</Th>
                                    <Th isNumeric>Flash Loan Count</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{Object.keys(accData).length > 0 ? accData.AaveData.available_borrows_ETH : '-'}</Td>
                                    <Td>{Object.keys(accData).length > 0 ? accData.AaveData.borrowAmount : '-'}</Td>
                                    <Td isNumeric>{Object.keys(accData).length > 0 ? accData.AaveData.borrowCount : '-'}</Td>
                                    <Td isNumeric>{Object.keys(accData).length > 0 ? accData.AaveData.flashLoanCount : '-'}</Td>
                                </Tr>
                            </Tbody>
                            <Thead>
                                <Tr>
                                    <Th>Liquidation Amount</Th>
                                    <Th>Liquidation Count</Th>
                                    <Th isNumeric>Repay Amount</Th>
                                    <Th isNumeric>Repay Count</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{Object.keys(accData).length > 0 ? accData.AaveData.liquidationAmount : '-'}</Td>
                                    <Td>{Object.keys(accData).length > 0 ? accData.AaveData.liquidationCount : '-'}</Td>
                                    <Td isNumeric>{Object.keys(accData).length > 0 ? accData.AaveData.repayAmount : '-'}</Td>
                                    <Td isNumeric>{Object.keys(accData).length > 0 ? accData.AaveData.repayCount : '-'}</Td>
                                </Tr>
                            </Tbody>
                            <Thead>
                                <Tr>
                                    <Th>Current Liquidation Threshold</Th>
                                    <Th>Health Factor</Th>
                                    <Th isNumeric>LTV</Th>
                                    <Th isNumeric>Total Collateral ETH</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>{Object.keys(accData).length > 0 ? accData.AaveData.current_liquidation_threshold : '-'}</Td>
                                    <Td>{Object.keys(accData).length > 0 ? accData.AaveData.health_factor : '-'}</Td>
                                    <Td isNumeric>{Object.keys(accData).length > 0 ? accData.AaveData.ltv : '-'}</Td>
                                    <Td isNumeric>{Object.keys(accData).length > 0 ? accData.AaveData.total_collateral_ETH : '-'}</Td>
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

