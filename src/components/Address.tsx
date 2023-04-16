import { Input, Button, Box, Stack, Flex } from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import ArcProgress from './arcProgress';


type AddressProps = {
    setAccData: (data: any) => void;
    setDataScore: (data: any) => void;
    setLoading: (data: any) => void;
    dataScore: any;

  };
const Address = ({ setAccData, setDataScore, setLoading, dataScore }: AddressProps) => {
    const [addr, setAddr] = useState('');
    const { address, isConnected } = useAccount();

    async function handleSubmit(e: any) {
        if (isConnected) {
            e.preventDefault();

            console.log('Submitted value:', address);
            let result
            setLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 2000))
            result = await axios.post("http://127.0.0.1:5000/api/v0/txhist", {
                "walletAddr": address
            })
            const accData = result.data
            result = await axios.post("http://127.0.0.1:5000/api/v0/score", {
                "walletAddr": address
            })
            const score = result.data
            setAccData(accData)
            setDataScore(score)
            console.log(accData)
            console.log(score)
            setLoading(false)
            // do something with the input value, such as send it to a server
    }
}
    async function handleSubmit1(e: any) {
        e.preventDefault();

        console.log('Submitted value:', addr);
        let result
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        result = await axios.post("http://127.0.0.1:5000/api/v0/txhist", {
            "walletAddr": addr
        })
        const accData = result.data
        result = await axios.post("http://127.0.0.1:5000/api/v0/score", {
            "walletAddr": addr
        })
        const score = result.data
        setAccData(accData)
        setDataScore(score)
        console.log(accData)
        console.log(score)
        setLoading(false)
        // do something with the input value, such as send it to a server
    }
    return (
        <>
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Box>
          <Button variant="primary" onClick={handleSubmit}>
            <ConnectButton label="Add a Wallet" accountStatus="avatar" />
          </Button>
        </Box>
        <Box>
          <ArcProgress level={dataScore.score} />
        </Box>
        <Box m={[2, 20]}>
                <form onSubmit={handleSubmit1}>
                    <Stack spacing={4} direction='row' align='center'>
                        <Input placeholder='Wallet Address' border='1px' borderColor='gray.400'
                            value={address}
                            onChange={(e: any) => setAddr(e.target.value)} />
                        <Button type="submit" minWidth={100} colorScheme='blue' size='md'>Done</Button>
                    </Stack>
                </form>
            </Box>
      </Flex>

    </>
    )
}

export default Address;
